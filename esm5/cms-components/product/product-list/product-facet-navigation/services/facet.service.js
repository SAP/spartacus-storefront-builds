import { __assign, __decorate } from "tslib";
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FacetGroupCollapsedState, } from '../facet.model';
import { ProductFacetService } from './product-facet.service';
import * as i0 from "@angular/core";
import * as i1 from "./product-facet.service";
/**
 * Provides access to the facets as well as their UI state. The UI state
 * represents user related changes on the facets, such as expanding or
 * collapsing a facet group or expanding the number of _visible_ facet values.
 */
var FacetService = /** @class */ (function () {
    function FacetService(productFacetService) {
        var _this = this;
        this.productFacetService = productFacetService;
        /**
         * An internal map where we keep the UI state of the facets.
         */
        this.facetState = new Map();
        /**
         * Observes the facets for the given page and configures the initial UI state.
         *
         * Facets are configured on each emission so that we keep the facet UI state.
         * This is mainly done to keep the state during usage of the facet, but also
         * benefitial when the facets are rebuild while using them.
         */
        this.facetList$ = this.productFacetService.facetList$.pipe(tap(function (facetList) {
            facetList.facets.forEach(function (facet) { return _this.initialize(facet); });
        }));
    }
    /**
     * Returns the observed UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    FacetService.prototype.getState = function (facet) {
        this.initialize(facet);
        return this.facetState.get(facet.name);
    };
    /**
     * Returns the UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    FacetService.prototype.getStateSnapshot = function (facet) {
        return this.getState(facet).value;
    };
    /**
     * Toggles the facet expanded state. If the expanded state becomes false,
     * the visible values will decrease to the top values only.
     *
     * If the optional value argument is provided the expanded state will be set
     * to this value, regardless of the current `expanded` state.
     */
    FacetService.prototype.toggle = function (facet, isExpanded) {
        var state = this.getStateSnapshot(facet);
        var toggledState = {
            toggled: isExpanded
                ? FacetGroupCollapsedState.COLLAPSED
                : FacetGroupCollapsedState.EXPANDED,
        };
        if (toggledState.toggled === FacetGroupCollapsedState.COLLAPSED) {
            toggledState.maxVisible = state.topVisible;
        }
        this.updateState(facet, toggledState);
    };
    /**
     * Increases the visible values to the maximum values of the facet.
     */
    FacetService.prototype.increaseVisibleValues = function (facet) {
        this.updateState(facet, { maxVisible: facet.values.length });
    };
    /**
     * Decreases the visible values to the topValueCount.
     *
     * The topValueCount defaults to 6, but can be controlled in
     * the backend as well.
     */
    FacetService.prototype.decreaseVisibleValues = function (facet) {
        this.updateState(facet, { maxVisible: facet.topValueCount });
    };
    /**
     * Persists the facet state and initializes the default values for the top
     * and max visible values.
     */
    FacetService.prototype.initialize = function (facet) {
        if (!this.hasState(facet)) {
            this.facetState.set(facet.name, new BehaviorSubject({
                topVisible: facet.topValueCount || 0,
                maxVisible: facet.topValueCount || 0,
            }));
        }
    };
    /**
     * Updates the state of the facet in the local facet map.
     */
    FacetService.prototype.updateState = function (facet, property) {
        var state = __assign(__assign({}, this.getStateSnapshot(facet)), property);
        this.facetState.get(facet.name).next(state);
    };
    FacetService.prototype.hasState = function (facet) {
        return this.facetState.has(facet.name);
    };
    FacetService.prototype.getLinkParams = function (query) {
        return { query: new HttpUrlEncodingCodec().decodeValue(query) };
    };
    FacetService.ctorParameters = function () { return [
        { type: ProductFacetService }
    ]; };
    FacetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FacetService_Factory() { return new FacetService(i0.ɵɵinject(i1.ProductFacetService)); }, token: FacetService, providedIn: "root" });
    FacetService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FacetService);
    return FacetService;
}());
export { FacetService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRTlEOzs7O0dBSUc7QUFJSDtJQU1FLHNCQUFzQixtQkFBd0M7UUFBOUQsaUJBQWtFO1FBQTVDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFMOUQ7O1dBRUc7UUFDTyxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQStDLENBQUM7UUFJOUU7Ozs7OztXQU1HO1FBQ0gsZUFBVSxHQUEwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDMUUsR0FBRyxDQUFDLFVBQUMsU0FBUztZQUNaLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUNILENBQUM7SUFiK0QsQ0FBQztJQWVsRTs7OztPQUlHO0lBQ0gsK0JBQVEsR0FBUixVQUFTLEtBQVk7UUFDbkIsSUFBSSxDQUFDLFVBQVUs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L2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgRmFjZXRDb2xsYXBzZVN0YXRlLFxuICBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUsXG4gIEZhY2V0TGlzdCxcbn0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEZhY2V0U2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1mYWNldC5zZXJ2aWNlJztcblxuLyoqXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGZhY2V0cyBhcyB3ZWxsIGFzIHRoZWlyIFVJIHN0YXRlLiBUaGUgVUkgc3RhdGVcbiAqIHJlcHJlc2VudHMgdXNlciByZWxhdGVkIGNoYW5nZXMgb24gdGhlIGZhY2V0cywgc3VjaCBhcyBleHBhbmRpbmcgb3JcbiAqIGNvbGxhcHNpbmcgYSBmYWNldCBncm91cCBvciBleHBhbmRpbmcgdGhlIG51bWJlciBvZiBfdmlzaWJsZV8gZmFjZXQgdmFsdWVzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEFuIGludGVybmFsIG1hcCB3aGVyZSB3ZSBrZWVwIHRoZSBVSSBzdGF0ZSBvZiB0aGUgZmFjZXRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZhY2V0U3RhdGUgPSBuZXcgTWFwPHN0cmluZywgQmVoYXZpb3JTdWJqZWN0PEZhY2V0Q29sbGFwc2VTdGF0ZT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHByb2R1Y3RGYWNldFNlcnZpY2U6IFByb2R1Y3RGYWNldFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSBmYWNldHMgZm9yIHRoZSBnaXZlbiBwYWdlIGFuZCBjb25maWd1cmVzIHRoZSBpbml0aWFsIFVJIHN0YXRlLlxuICAgKlxuICAgKiBGYWNldHMgYXJlIGNvbmZpZ3VyZWQgb24gZWFjaCBlbWlzc2lvbiBzbyB0aGF0IHdlIGtlZXAgdGhlIGZhY2V0IFVJIHN0YXRlLlxuICAgKiBUaGlzIGlzIG1haW5seSBkb25lIHRvIGtlZXAgdGhlIHN0YXRlIGR1cmluZyB1c2FnZSBvZiB0aGUgZmFjZXQsIGJ1dCBhbHNvXG4gICAqIGJlbmVmaXRpYWwgd2hlbiB0aGUgZmFjZXRzIGFyZSByZWJ1aWxkIHdoaWxlIHVzaW5nIHRoZW0uXG4gICAqL1xuICBmYWNldExpc3QkOiBPYnNlcnZhYmxlPEZhY2V0TGlzdD4gPSB0aGlzLnByb2R1Y3RGYWNldFNlcnZpY2UuZmFjZXRMaXN0JC5waXBlKFxuICAgIHRhcCgoZmFjZXRMaXN0KSA9PiB7XG4gICAgICBmYWNldExpc3QuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB0aGlzLmluaXRpYWxpemUoZmFjZXQpKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvYnNlcnZlZCBVSSBzdGF0ZSBmb3IgdGhlIGZhY2V0LlxuICAgKlxuICAgKiBUaGUgc3RhdGUgaXMgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGBpbml0aWFsaXplYCBtZXRob2QuXG4gICAqL1xuICBnZXRTdGF0ZShmYWNldDogRmFjZXQpOiBPYnNlcnZhYmxlPEZhY2V0Q29sbGFwc2VTdGF0ZT4ge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShmYWNldCk7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRTdGF0ZS5nZXQoZmFjZXQubmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgVUkgc3RhdGUgZm9yIHRoZSBmYWNldC5cbiAgICpcbiAgICogVGhlIHN0YXRlIGlzIGluaXRpYWxpemVkIHVzaW5nIHRoZSBgaW5pdGlhbGl6ZWAgbWV0aG9kLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFN0YXRlU25hcHNob3QoZmFjZXQ6IEZhY2V0KTogRmFjZXRDb2xsYXBzZVN0YXRlIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0U3RhdGUoZmFjZXQpIGFzIEJlaGF2aW9yU3ViamVjdDxGYWNldENvbGxhcHNlU3RhdGU+KS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBmYWNldCBleHBhbmRlZCBzdGF0ZS4gSWYgdGhlIGV4cGFuZGVkIHN0YXRlIGJlY29tZXMgZmFsc2UsXG4gICAqIHRoZSB2aXNpYmxlIHZhbHVlcyB3aWxsIGRlY3JlYXNlIHRvIHRoZSB0b3AgdmFsdWVzIG9ubHkuXG4gICAqXG4gICAqIElmIHRoZSBvcHRpb25hbCB2YWx1ZSBhcmd1bWVudCBpcyBwcm92aWRlZCB0aGUgZXhwYW5kZWQgc3RhdGUgd2lsbCBiZSBzZXRcbiAgICogdG8gdGhpcyB2YWx1ZSwgcmVnYXJkbGVzcyBvZiB0aGUgY3VycmVudCBgZXhwYW5kZWRgIHN0YXRlLlxuICAgKi9cbiAgdG9nZ2xlKGZhY2V0OiBGYWNldCwgaXNFeHBhbmRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZVNuYXBzaG90KGZhY2V0KTtcblxuICAgIGNvbnN0IHRvZ2dsZWRTdGF0ZSA9IHtcbiAgICAgIHRvZ2dsZWQ6IGlzRXhwYW5kZWRcbiAgICAgICAgPyBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUuQ09MTEFQU0VEXG4gICAgICAgIDogRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLkVYUEFOREVELFxuICAgIH0gYXMgRmFjZXRDb2xsYXBzZVN0YXRlO1xuXG4gICAgaWYgKHRvZ2dsZWRTdGF0ZS50b2dnbGVkID09PSBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUuQ09MTEFQU0VEKSB7XG4gICAgICB0b2dnbGVkU3RhdGUubWF4VmlzaWJsZSA9IHN0YXRlLnRvcFZpc2libGU7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0ZShmYWNldCwgdG9nZ2xlZFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZXMgdGhlIHZpc2libGUgdmFsdWVzIHRvIHRoZSBtYXhpbXVtIHZhbHVlcyBvZiB0aGUgZmFjZXQuXG4gICAqL1xuICBpbmNyZWFzZVZpc2libGVWYWx1ZXMoZmFjZXQ6IEZhY2V0KTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZShmYWNldCwgeyBtYXhWaXNpYmxlOiBmYWNldC52YWx1ZXMubGVuZ3RoIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY3JlYXNlcyB0aGUgdmlzaWJsZSB2YWx1ZXMgdG8gdGhlIHRvcFZhbHVlQ291bnQuXG4gICAqXG4gICAqIFRoZSB0b3BWYWx1ZUNvdW50IGRlZmF1bHRzIHRvIDYsIGJ1dCBjYW4gYmUgY29udHJvbGxlZCBpblxuICAgKiB0aGUgYmFja2VuZCBhcyB3ZWxsLlxuICAgKi9cbiAgZGVjcmVhc2VWaXNpYmxlVmFsdWVzKGZhY2V0OiBGYWNldCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoZmFjZXQsIHsgbWF4VmlzaWJsZTogZmFjZXQudG9wVmFsdWVDb3VudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJzaXN0cyB0aGUgZmFjZXQgc3RhdGUgYW5kIGluaXRpYWxpemVzIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgdGhlIHRvcFxuICAgKiBhbmQgbWF4IHZpc2libGUgdmFsdWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXRpYWxpemUoZmFjZXQ6IEZhY2V0KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKGZhY2V0KSkge1xuICAgICAgdGhpcy5mYWNldFN0YXRlLnNldChcbiAgICAgICAgZmFjZXQubmFtZSxcbiAgICAgICAgbmV3IEJlaGF2aW9yU3ViamVjdCh7XG4gICAgICAgICAgdG9wVmlzaWJsZTogZmFjZXQudG9wVmFsdWVDb3VudCB8fCAwLFxuICAgICAgICAgIG1heFZpc2libGU6IGZhY2V0LnRvcFZhbHVlQ291bnQgfHwgMCxcbiAgICAgICAgfSBhcyBGYWNldENvbGxhcHNlU3RhdGUpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzdGF0ZSBvZiB0aGUgZmFjZXQgaW4gdGhlIGxvY2FsIGZhY2V0IG1hcC5cbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShmYWNldDogRmFjZXQsIHByb3BlcnR5OiBGYWNldENvbGxhcHNlU3RhdGUpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IHsgLi4udGhpcy5nZXRTdGF0ZVNuYXBzaG90KGZhY2V0KSwgLi4ucHJvcGVydHkgfTtcbiAgICB0aGlzLmZhY2V0U3RhdGUuZ2V0KGZhY2V0Lm5hbWUpLm5leHQoc3RhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc1N0YXRlKGZhY2V0OiBGYWNldCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZhY2V0U3RhdGUuaGFzKGZhY2V0Lm5hbWUpO1xuICB9XG5cbiAgZ2V0TGlua1BhcmFtcyhxdWVyeTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHsgcXVlcnk6IG5ldyBIdHRwVXJsRW5jb2RpbmdDb2RlYygpLmRlY29kZVZhbHVlKHF1ZXJ5KSB9O1xuICB9XG59XG4iXX0=