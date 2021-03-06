import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { FacetService } from '../services/facet.service';
/**
 * Active facets render the applied facet values as a list of focusable buttons
 * which can be used to remove the applied facet value.
 */
export class ActiveFacetsComponent {
    constructor(facetService) {
        this.facetService = facetService;
        /** Active facets which are applied to the product results. */
        this.facetList$ = this.facetService.facetList$;
        /** Configurable icon which is used for the active facet close button */
        this.closeIcon = ICON_TYPE.CLOSE;
    }
    getLinkParams(facet) {
        var _a, _b;
        return this.facetService.getLinkParams((_b = (_a = facet.removeQuery) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.value);
    }
    /**
     * The focus key is used to persist the focus on the facet when the DOM is being
     * recreated. We only apply the focus key for the given _active_ facet when there
     * the original facets is not available. This happens for non multi-valued facets.
     *
     * With this approach, the we keep the focus, either at the facet list or on the
     * active facets.
     */
    getFocusKey(facetList, facet) {
        var _a;
        return ((_a = facetList.facets) === null || _a === void 0 ? void 0 : _a.find((f) => { var _a; return (_a = f.values) === null || _a === void 0 ? void 0 : _a.find((val) => val.name === facet.facetValueName); })) ? ''
            : facet.facetValueName;
    }
}
ActiveFacetsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-active-facets',
                template: "<ng-container *ngIf=\"facetList$ | async as facetList\">\n  <h4 *ngIf=\"facetList?.activeFacets?.length > 0\">\n    {{ 'productList.appliedFilter' | cxTranslate }}\n  </h4>\n\n  <a\n    *ngFor=\"let facet of facetList?.activeFacets\"\n    routerLink=\"./\"\n    [queryParams]=\"getLinkParams(facet)\"\n    [cxFocus]=\"getFocusKey(facetList, facet)\"\n  >\n    <span>{{ facet.facetValueName }}</span>\n    <cx-icon aria-hidden=\"true\" [type]=\"closeIcon\"></cx-icon>\n  </a>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.Default
            },] }
];
ActiveFacetsComponent.ctorParameters = () => [
    { type: FacetService }
];
ActiveFacetsComponent.propDecorators = {
    closeIcon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vYWN0aXZlLWZhY2V0cy9hY3RpdmUtZmFjZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEOzs7R0FHRztBQU1ILE1BQU0sT0FBTyxxQkFBcUI7SUFPaEMsWUFBc0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOaEQsOERBQThEO1FBQzlELGVBQVUsR0FBMEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFFakUsd0VBQXdFO1FBQy9ELGNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBRWMsQ0FBQztJQUVwRCxhQUFhLENBQUMsS0FBaUI7O1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLGFBQUMsS0FBSyxDQUFDLFdBQVcsMENBQUUsS0FBSywwQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILFdBQVcsQ0FBQyxTQUFvQixFQUFFLEtBQWlCOztRQUNqRCxPQUFPLE9BQUEsU0FBUyxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsd0JBQ2xDLENBQUMsQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsY0FBYyxJQUFDLEdBRTFELENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDM0IsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix5ZkFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO2FBQ2pEOzs7WUFWUSxZQUFZOzs7d0JBZ0JsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRMaXN0IH0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmFjZXQuc2VydmljZSc7XG5cbi8qKlxuICogQWN0aXZlIGZhY2V0cyByZW5kZXIgdGhlIGFwcGxpZWQgZmFjZXQgdmFsdWVzIGFzIGEgbGlzdCBvZiBmb2N1c2FibGUgYnV0dG9uc1xuICogd2hpY2ggY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHRoZSBhcHBsaWVkIGZhY2V0IHZhbHVlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hY3RpdmUtZmFjZXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGl2ZS1mYWNldHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZhY2V0c0NvbXBvbmVudCB7XG4gIC8qKiBBY3RpdmUgZmFjZXRzIHdoaWNoIGFyZSBhcHBsaWVkIHRvIHRoZSBwcm9kdWN0IHJlc3VsdHMuICovXG4gIGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PiA9IHRoaXMuZmFjZXRTZXJ2aWNlLmZhY2V0TGlzdCQ7XG5cbiAgLyoqIENvbmZpZ3VyYWJsZSBpY29uIHdoaWNoIGlzIHVzZWQgZm9yIHRoZSBhY3RpdmUgZmFjZXQgY2xvc2UgYnV0dG9uICovXG4gIEBJbnB1dCgpIGNsb3NlSWNvbiA9IElDT05fVFlQRS5DTE9TRTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZmFjZXRTZXJ2aWNlOiBGYWNldFNlcnZpY2UpIHt9XG5cbiAgZ2V0TGlua1BhcmFtcyhmYWNldDogQnJlYWRjcnVtYikge1xuICAgIHJldHVybiB0aGlzLmZhY2V0U2VydmljZS5nZXRMaW5rUGFyYW1zKGZhY2V0LnJlbW92ZVF1ZXJ5Py5xdWVyeT8udmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmb2N1cyBrZXkgaXMgdXNlZCB0byBwZXJzaXN0IHRoZSBmb2N1cyBvbiB0aGUgZmFjZXQgd2hlbiB0aGUgRE9NIGlzIGJlaW5nXG4gICAqIHJlY3JlYXRlZC4gV2Ugb25seSBhcHBseSB0aGUgZm9jdXMga2V5IGZvciB0aGUgZ2l2ZW4gX2FjdGl2ZV8gZmFjZXQgd2hlbiB0aGVyZVxuICAgKiB0aGUgb3JpZ2luYWwgZmFjZXRzIGlzIG5vdCBhdmFpbGFibGUuIFRoaXMgaGFwcGVucyBmb3Igbm9uIG11bHRpLXZhbHVlZCBmYWNldHMuXG4gICAqXG4gICAqIFdpdGggdGhpcyBhcHByb2FjaCwgdGhlIHdlIGtlZXAgdGhlIGZvY3VzLCBlaXRoZXIgYXQgdGhlIGZhY2V0IGxpc3Qgb3Igb24gdGhlXG4gICAqIGFjdGl2ZSBmYWNldHMuXG4gICAqL1xuICBnZXRGb2N1c0tleShmYWNldExpc3Q6IEZhY2V0TGlzdCwgZmFjZXQ6IEJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gZmFjZXRMaXN0LmZhY2V0cz8uZmluZCgoZikgPT5cbiAgICAgIGYudmFsdWVzPy5maW5kKCh2YWwpID0+IHZhbC5uYW1lID09PSBmYWNldC5mYWNldFZhbHVlTmFtZSlcbiAgICApXG4gICAgICA/ICcnXG4gICAgICA6IGZhY2V0LmZhY2V0VmFsdWVOYW1lO1xuICB9XG59XG4iXX0=