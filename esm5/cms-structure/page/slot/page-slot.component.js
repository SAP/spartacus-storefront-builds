import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, } from '@angular/core';
import { CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { CmsComponentsService } from '../../services/cms-components.service';
/**
 * The `PageSlotComponent` is used to render the CMS page slot and it's components.
 *
 * The Page slot host element will be supplemented with css classes so that the layout
 * can be fully controlled by customers:
 * - The page slot _position_ is added as a css class by default.
 * - The `cx-pending` is added for as long as the slot hasn't start loading.
 * - The `page-fold` style class is added for the page slot which is configured as the page fold.
 */
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, elementRef, cmsComponentsService, cd) {
        var _this = this;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cmsComponentsService = cmsComponentsService;
        this.cd = cd;
        /**
         * Indicates that the page slot is the last page slot above the fold.
         */
        this.isPageFold = false;
        /**
         * Indicates that the components of the page slot haven't been loaded as long
         * as the isPending state is true.
         */
        this.isPending = true;
        /**
         * Indicates that the page slot doesn't contain any components. This is no
         * longer used in spartacus, but kept for backwards compatibility.
         */
        this.hasComponents = false;
        this.position$ = new BehaviorSubject(undefined);
        this.slot$ = this.position$.pipe(switchMap(function (position) { return _this.cmsService.getContentSlot(position); }), distinctUntilChanged(this.isDistinct));
        /** Observes the components for the given page slot. */
        this.components$ = this.slot$.pipe(map(function (slot) { var _a; return (_a = slot === null || slot === void 0 ? void 0 : slot.components) !== null && _a !== void 0 ? _a : []; }));
        this.subscription = new Subscription();
        /** Keeps track of the pending components that must be loaded for the page slot */
        this.pendingComponentCount = 0;
    }
    Object.defineProperty(PageSlotComponent.prototype, "position", {
        get: function () {
            return this.position$.value;
        },
        /**
         * The position represents the unique key for a page slot on a single page, but can
         * be reused cross pages.
         *
         * The position is used to find the CMS components for the page slot. It is also
         * added as an additional CSS class so that layoutt can be applied.
         */
        set: function (value) {
            this.position$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    PageSlotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.slot$.pipe(tap(function (slot) { return _this.decorate(slot); })).subscribe(function (value) {
            _this.components = (value === null || value === void 0 ? void 0 : value.components) || [];
            _this.cd.markForCheck();
        }));
    };
    PageSlotComponent.prototype.decorate = function (slot) {
        var _a, _b;
        var cls = this.class || '';
        if (this.lastPosition && cls.indexOf(this.lastPosition) > -1) {
            cls = cls.replace(this.lastPosition, '');
        }
        if (this.position$.value) {
            cls += " " + this.position$.value;
            this.lastPosition = this.position$.value;
        }
        // host bindings
        this.pending = ((_a = slot === null || slot === void 0 ? void 0 : slot.components) === null || _a === void 0 ? void 0 : _a.length) || 0;
        this.hasComponents = ((_b = slot === null || slot === void 0 ? void 0 : slot.components) === null || _b === void 0 ? void 0 : _b.length) > 0;
        if (cls && cls !== this.class) {
            this.class = cls;
        }
        this.addSmartEditSlotClass(slot);
    };
    Object.defineProperty(PageSlotComponent.prototype, "pending", {
        get: function () {
            return this.pendingComponentCount;
        },
        /**
         * Sets the pending count for the page slot components. Once all pending components are
         * loaded, the `isPending` flag is updated, so that the associated class can be updated
         */
        set: function (count) {
            this.pendingComponentCount = count;
            this.isPending = this.pendingComponentCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Is triggered when a component is added to the view. This is used to
     * update the pending count
     */
    PageSlotComponent.prototype.isLoaded = function (loadState) {
        if (loadState) {
            this.pending--;
            this.cd.markForCheck();
        }
    };
    /**
     * The `DeferLoadingStrategy` indicates whether the component should be
     * rendered instantly or whether it should be deferred.
     */
    PageSlotComponent.prototype.getComponentDeferOptions = function (componentType) {
        var deferLoading = this.cmsComponentsService.getDeferLoadingStrategy(componentType);
        return { deferLoading: deferLoading };
    };
    PageSlotComponent.prototype.isDistinct = function (old, current) {
        var _a;
        return (current.components &&
            ((_a = old.components) === null || _a === void 0 ? void 0 : _a.length) === current.components.length &&
            !old.components.find(function (el, index) { return el.uid !== current.components[index].uid; }));
    };
    PageSlotComponent.prototype.addSmartEditSlotClass = function (slot) {
        if (slot) {
            this.dynamicAttributeService.addDynamicAttributes(this.elementRef.nativeElement, this.renderer, { slotData: slot });
        }
    };
    PageSlotComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: CmsComponentsService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], PageSlotComponent.prototype, "position", null);
    __decorate([
        Input(), HostBinding()
    ], PageSlotComponent.prototype, "class", void 0);
    __decorate([
        HostBinding('class.page-fold'), Input()
    ], PageSlotComponent.prototype, "isPageFold", void 0);
    __decorate([
        HostBinding('class.cx-pending')
    ], PageSlotComponent.prototype, "isPending", void 0);
    __decorate([
        HostBinding('class.has-components'), Input()
    ], PageSlotComponent.prototype, "hasComponents", void 0);
    PageSlotComponent = __decorate([
        Component({
            selector: 'cx-page-slot,[cx-page-slot]',
            template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-template\n    *ngFor=\"let component of components\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PageSlotComponent);
    return PageSlotComponent;
}());
export { PageSlotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7Ozs7Ozs7O0dBUUc7QUFNSDtJQTBERSwyQkFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsb0JBQTBDLEVBQzFDLEVBQXFCO1FBTmpDLGlCQU9JO1FBTlEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBNUNqQzs7V0FFRztRQUNzQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTVEOzs7V0FHRztRQUM4QixjQUFTLEdBQUcs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Q0FBQyxvQkFBb0IsQ0FDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxRQUFRLEVBQ2IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCx1Q0FBVyxHQUFYOztRQUNFLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsV0FBVyxHQUFHO0lBQ25DLENBQUM7O2dCQS9GdUIsVUFBVTtnQkFDRyx1QkFBdUI7Z0JBQ3RDLFNBQVM7Z0JBQ1AsVUFBVTtnQkFDQSxvQkFBb0I7Z0JBQ3RDLGlCQUFpQjs7SUF4RHhCO1FBQVIsS0FBSyxFQUFFO3FEQUVQO0lBUXVCO1FBQXZCLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRTtvREFBZTtJQUtHO1FBQXhDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRTt5REFBb0I7SUFNM0I7UUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO3dEQUFrQjtJQU1KO1FBQTdDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLEtBQUssRUFBRTs0REFBdUI7SUFuQ3pELGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLDJkQUF5QztZQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBMko3QjtJQUFELHdCQUFDO0NBQUEsQUEzSkQsSUEySkM7U0EzSlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIENvbnRlbnRTbG90RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IENtc0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZSc7XG5cbi8qKlxuICogVGhlIGBQYWdlU2xvdENvbXBvbmVudGAgaXMgdXNlZCB0byByZW5kZXIgdGhlIENNUyBwYWdlIHNsb3QgYW5kIGl0J3MgY29tcG9uZW50cy5cbiAqXG4gKiBUaGUgUGFnZSBzbG90IGhvc3QgZWxlbWVudCB3aWxsIGJlIHN1cHBsZW1lbnRlZCB3aXRoIGNzcyBjbGFzc2VzIHNvIHRoYXQgdGhlIGxheW91dFxuICogY2FuIGJlIGZ1bGx5IGNvbnRyb2xsZWQgYnkgY3VzdG9tZXJzOlxuICogLSBUaGUgcGFnZSBzbG90IF9wb3NpdGlvbl8gaXMgYWRkZWQgYXMgYSBjc3MgY2xhc3MgYnkgZGVmYXVsdC5cbiAqIC0gVGhlIGBjeC1wZW5kaW5nYCBpcyBhZGRlZCBmb3IgYXMgbG9uZyBhcyB0aGUgc2xvdCBoYXNuJ3Qgc3RhcnQgbG9hZGluZy5cbiAqIC0gVGhlIGBwYWdlLWZvbGRgIHN0eWxlIGNsYXNzIGlzIGFkZGVkIGZvciB0aGUgcGFnZSBzbG90IHdoaWNoIGlzIGNvbmZpZ3VyZWQgYXMgdGhlIHBhZ2UgZm9sZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1zbG90LFtjeC1wYWdlLXNsb3RdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2Utc2xvdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiByZXByZXNlbnRzIHRoZSB1bmlxdWUga2V5IGZvciBhIHBhZ2Ugc2xvdCBvbiBhIHNpbmdsZSBwYWdlLCBidXQgY2FuXG4gICAqIGJlIHJldXNlZCBjcm9zcyBwYWdlcy5cbiAgICpcbiAgICogVGhlIHBvc2l0aW9uIGlzIHVzZWQgdG8gZmluZCB0aGUgQ01TIGNvbXBvbmVudHMgZm9yIHRoZSBwYWdlIHNsb3QuIEl0IGlzIGFsc29cbiAgICogYWRkZWQgYXMgYW4gYWRkaXRpb25hbCBDU1MgY2xhc3Mgc28gdGhhdCBsYXlvdXR0IGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogTWFpbnRhaW5zIGNzcyBjbGFzc2VzIGludHJvZHVjZWQgYnkgdGhlIGhvc3QgYW5kIGFkZHMgYWRkaXRpb25hbCBjbGFzc2VzLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCkgY2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBpcyB0aGUgbGFzdCBwYWdlIHNsb3QgYWJvdmUgdGhlIGZvbGQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhZ2UtZm9sZCcpIEBJbnB1dCgpIGlzUGFnZUZvbGQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHBhZ2Ugc2xvdCBoYXZlbid0IGJlZW4gbG9hZGVkIGFzIGxvbmdcbiAgICogYXMgdGhlIGlzUGVuZGluZyBzdGF0ZSBpcyB0cnVlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jeC1wZW5kaW5nJykgaXNQZW5kaW5nID0gdHJ1ZTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBkb2Vzbid0IGNvbnRhaW4gYW55IGNvbXBvbmVudHMuIFRoaXMgaXMgbm9cbiAgICogbG9uZ2VyIHVzZWQgaW4gc3BhcnRhY3VzLCBidXQga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1jb21wb25lbnRzJykgQElucHV0KCkgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBwb3NpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGNvbXBvbmVudHM6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdO1xuXG4gIHByb3RlY3RlZCBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+ID0gdGhpcy5wb3NpdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHBvc2l0aW9uKSA9PiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29udGVudFNsb3QocG9zaXRpb24pKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCh0aGlzLmlzRGlzdGluY3QpXG4gICk7XG5cbiAgLyoqIE9ic2VydmVzIHRoZSBjb21wb25lbnRzIGZvciB0aGUgZ2l2ZW4gcGFnZSBzbG90LiAqL1xuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGFbXT4gPSB0aGlzLnNsb3QkLnBpcGUoXG4gICAgbWFwKChzbG90KSA9PiBzbG90Py5jb21wb25lbnRzID8/IFtdKVxuICApO1xuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIHBlbmRpbmcgY29tcG9uZW50cyB0aGF0IG11c3QgYmUgbG9hZGVkIGZvciB0aGUgcGFnZSBzbG90ICovXG4gIHByaXZhdGUgcGVuZGluZ0NvbXBvbmVudENvdW50ID0gMDtcblxuICAvKiogVHJhY2tzIHRoZSBsYXN0IHVzZWQgcG9zaXRpb24sIGluIGNhc2UgdGhlIHBhZ2Ugc2xvdCBpcyB1c2VkIGR5bmFtaWNhbGx5ICovXG4gIHByaXZhdGUgbGFzdFBvc2l0aW9uOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnNsb3QkLnBpcGUodGFwKChzbG90KSA9PiB0aGlzLmRlY29yYXRlKHNsb3QpKSkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB2YWx1ZT8uY29tcG9uZW50cyB8fCBbXTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWNvcmF0ZShzbG90OiBDb250ZW50U2xvdERhdGEpOiB2b2lkIHtcbiAgICBsZXQgY2xzID0gdGhpcy5jbGFzcyB8fCAnJztcblxuICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiAmJiBjbHMuaW5kZXhPZih0aGlzLmxhc3RQb3NpdGlvbikgPiAtMSkge1xuICAgICAgY2xzID0gY2xzLnJlcGxhY2UodGhpcy5sYXN0UG9zaXRpb24sICcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24kLnZhbHVlKSB7XG4gICAgICBjbHMgKz0gYCAke3RoaXMucG9zaXRpb24kLnZhbHVlfWA7XG4gICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24kLnZhbHVlO1xuICAgIH1cblxuICAgIC8vIGhvc3QgYmluZGluZ3NcbiAgICB0aGlzLnBlbmRpbmcgPSBzbG90Py5jb21wb25lbnRzPy5sZW5ndGggfHwgMDtcbiAgICB0aGlzLmhhc0NvbXBvbmVudHMgPSBzbG90Py5jb21wb25lbnRzPy5sZW5ndGggPiAwO1xuICAgIGlmIChjbHMgJiYgY2xzICE9PSB0aGlzLmNsYXNzKSB7XG4gICAgICB0aGlzLmNsYXNzID0gY2xzO1xuICAgIH1cblxuICAgIHRoaXMuYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBlbmRpbmcgY291bnQgZm9yIHRoZSBwYWdlIHNsb3QgY29tcG9uZW50cy4gT25jZSBhbGwgcGVuZGluZyBjb21wb25lbnRzIGFyZVxuICAgKiBsb2FkZWQsIHRoZSBgaXNQZW5kaW5nYCBmbGFnIGlzIHVwZGF0ZWQsIHNvIHRoYXQgdGhlIGFzc29jaWF0ZWQgY2xhc3MgY2FuIGJlIHVwZGF0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBzZXQgcGVuZGluZyhjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPSBjb3VudDtcbiAgICB0aGlzLmlzUGVuZGluZyA9IHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID4gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgcGVuZGluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudDtcbiAgfVxuXG4gIC8qXG4gICAqIElzIHRyaWdnZXJlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSB2aWV3LiBUaGlzIGlzIHVzZWQgdG9cbiAgICogdXBkYXRlIHRoZSBwZW5kaW5nIGNvdW50XG4gICAqL1xuICBpc0xvYWRlZChsb2FkU3RhdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAobG9hZFN0YXRlKSB7XG4gICAgICB0aGlzLnBlbmRpbmctLTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVmZXJMb2FkaW5nU3RyYXRlZ3lgIGluZGljYXRlcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlXG4gICAqIHJlbmRlcmVkIGluc3RhbnRseSBvciB3aGV0aGVyIGl0IHNob3VsZCBiZSBkZWZlcnJlZC5cbiAgICovXG4gIGdldENvbXBvbmVudERlZmVyT3B0aW9ucyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbnRlcnNlY3Rpb25PcHRpb25zIHtcbiAgICBjb25zdCBkZWZlckxvYWRpbmcgPSB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KFxuICAgICAgY29tcG9uZW50VHlwZVxuICAgICk7XG4gICAgcmV0dXJuIHsgZGVmZXJMb2FkaW5nIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEaXN0aW5jdChvbGQ6IENvbnRlbnRTbG90RGF0YSwgY3VycmVudDogQ29udGVudFNsb3REYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGN1cnJlbnQuY29tcG9uZW50cyAmJlxuICAgICAgb2xkLmNvbXBvbmVudHM/Lmxlbmd0aCA9PT0gY3VycmVudC5jb21wb25lbnRzLmxlbmd0aCAmJlxuICAgICAgIW9sZC5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgIChlbCwgaW5kZXgpID0+IGVsLnVpZCAhPT0gY3VycmVudC5jb21wb25lbnRzW2luZGV4XS51aWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgaWYgKHNsb3QpIHtcbiAgICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAgICB7IHNsb3REYXRhOiBzbG90IH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==