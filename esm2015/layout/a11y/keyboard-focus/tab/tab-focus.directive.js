import { Directive, ElementRef, HostListener } from '@angular/core';
import { AutoFocusDirective } from '../autofocus/auto-focus.directive';
import { TabFocusService } from './tab-focus.service';
/**
 * Directive to move the focus of ("locked") child elements. This is useful
 * for a nested list of tabs, carousel slides or any group of elements that
 * requires horizontal navigation.
 */
export class TabFocusDirective extends AutoFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        /** `tab` defaults to true if the directive `cxTabFocus` is used. */
        this.defaultConfig = { tab: true };
        // @Input('cxTabFocus')
        this.config = {};
    }
    handleNextTab(event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, 1 /* NEXT */, event);
        }
    }
    handlePreviousTab(event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, -1 /* PREV */, event);
        }
    }
}
TabFocusDirective.decorators = [
    { type: Directive }
];
TabFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TabFocusService }
];
TabFocusDirective.propDecorators = {
    handleNextTab: [{ type: HostListener, args: ['keydown.arrowRight', ['$event'],] }],
    handlePreviousTab: [{ type: HostListener, args: ['keydown.arrowLeft', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL3RhYi90YWItZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQ7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBa0I7SUFxQnZELFlBQ1ksVUFBc0IsRUFDdEIsT0FBd0I7UUFFbEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBdEJwQyxvRUFBb0U7UUFDMUQsa0JBQWEsR0FBbUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFeEQsdUJBQXVCO1FBQ2IsV0FBTSxHQUFtQixFQUFFLENBQUM7SUFxQnRDLENBQUM7SUFsQkQsYUFBYSxDQUFDLEtBQW9COztRQUNoQyxVQUFJLElBQUksQ0FBQyxNQUFNLDBDQUFFLEdBQUcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLGdCQUFtQixLQUFLLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFHRCxpQkFBaUIsQ0FBQyxLQUFvQjs7UUFDcEMsVUFBSSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxpQkFBbUIsS0FBSyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7WUFwQkYsU0FBUzs7O1lBVlUsVUFBVTtZQUdyQixlQUFlOzs7NEJBZXJCLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQ0FPN0MsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2F1dG9mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUYWJGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRhYkZvY3VzU2VydmljZSB9IGZyb20gJy4vdGFiLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBtb3ZlIHRoZSBmb2N1cyBvZiAoXCJsb2NrZWRcIikgY2hpbGQgZWxlbWVudHMuIFRoaXMgaXMgdXNlZnVsXG4gKiBmb3IgYSBuZXN0ZWQgbGlzdCBvZiB0YWJzLCBjYXJvdXNlbCBzbGlkZXMgb3IgYW55IGdyb3VwIG9mIGVsZW1lbnRzIHRoYXRcbiAqIHJlcXVpcmVzIGhvcml6b250YWwgbmF2aWdhdGlvbi5cbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4VGFiRm9jdXNdJ1xuZXhwb3J0IGNsYXNzIFRhYkZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgQXV0b0ZvY3VzRGlyZWN0aXZlIHtcbiAgLyoqIGB0YWJgIGRlZmF1bHRzIHRvIHRydWUgaWYgdGhlIGRpcmVjdGl2ZSBgY3hUYWJGb2N1c2AgaXMgdXNlZC4gKi9cbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFRhYkZvY3VzQ29uZmlnID0geyB0YWI6IHRydWUgfTtcblxuICAvLyBASW5wdXQoJ2N4VGFiRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBUYWJGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dSaWdodCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZU5leHRUYWIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jb25maWc/LnRhYikge1xuICAgICAgdGhpcy5zZXJ2aWNlLm1vdmVUYWIodGhpcy5ob3N0LCB0aGlzLmNvbmZpZywgTU9WRV9GT0NVUy5ORVhULCBldmVudCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd0xlZnQnLCBbJyRldmVudCddKVxuICBoYW5kbGVQcmV2aW91c1RhYihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmNvbmZpZz8udGFiKSB7XG4gICAgICB0aGlzLnNlcnZpY2UubW92ZVRhYih0aGlzLmhvc3QsIHRoaXMuY29uZmlnLCBNT1ZFX0ZPQ1VTLlBSRVYsIGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVGFiRm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG59XG4iXX0=