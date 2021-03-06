import { inject, InjectionToken } from '@angular/core';
import { DEFAULT_URL_MATCHER, UrlMatcherService, } from '@spartacus/core';
import { getSuffixUrlMatcher } from '../../cms-structure/routing/suffix-routes/suffix-url-matcher';
export function getProductListingUrlMatcherFactory(service, defaultMatcherFactory) {
    const factory = (route) => {
        const defaultMatcher = defaultMatcherFactory(route);
        const suffixPLPMatcher = getSuffixUrlMatcher({
            marker: 'c',
            paramName: 'categoryCode',
        });
        return service.getCombined([defaultMatcher, suffixPLPMatcher]);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for PLP.
 * The provided url matcher matches both:
 * - the configured `paths` from routing config and
 * - custom pattern  `** / c / :categoryCode`
 *
 * If the this matcher doesn't fit the requirements, it can be replaced with the DEFAULT_URL_MATCHER
 * or additional matchers can be added for a specific route.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
export const PRODUCT_LISTING_URL_MATCHER = new InjectionToken('PRODUCT_LISTING_URL_MATCHER', {
    providedIn: 'root',
    factory: () => getProductListingUrlMatcherFactory(inject(UrlMatcherService), inject(DEFAULT_URL_MATCHER)),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLXVybC1tYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy11cmwtbWF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRW5HLE1BQU0sVUFBVSxrQ0FBa0MsQ0FDaEQsT0FBMEIsRUFDMUIscUJBQXdDO0lBRXhDLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDL0IsTUFBTSxjQUFjLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQztZQUMzQyxNQUFNLEVBQUUsR0FBRztZQUNYLFNBQVMsRUFBRSxjQUFjO1NBQzFCLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyxJQUFJLGNBQWMsQ0FFM0QsNkJBQTZCLEVBQUU7SUFDL0IsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNaLGtDQUFrQyxDQUNoQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFDekIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQzVCO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9VUkxfTUFUQ0hFUixcbiAgVXJsTWF0Y2hlckZhY3RvcnksXG4gIFVybE1hdGNoZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZ2V0U3VmZml4VXJsTWF0Y2hlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9zdWZmaXgtcm91dGVzL3N1ZmZpeC11cmwtbWF0Y2hlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0TGlzdGluZ1VybE1hdGNoZXJGYWN0b3J5KFxuICBzZXJ2aWNlOiBVcmxNYXRjaGVyU2VydmljZSxcbiAgZGVmYXVsdE1hdGNoZXJGYWN0b3J5OiBVcmxNYXRjaGVyRmFjdG9yeVxuKTogVXJsTWF0Y2hlckZhY3Rvcnkge1xuICBjb25zdCBmYWN0b3J5ID0gKHJvdXRlOiBSb3V0ZSkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRNYXRjaGVyID0gZGVmYXVsdE1hdGNoZXJGYWN0b3J5KHJvdXRlKTtcbiAgICBjb25zdCBzdWZmaXhQTFBNYXRjaGVyID0gZ2V0U3VmZml4VXJsTWF0Y2hlcih7XG4gICAgICBtYXJrZXI6ICdjJyxcbiAgICAgIHBhcmFtTmFtZTogJ2NhdGVnb3J5Q29kZScsXG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0Q29tYmluZWQoW2RlZmF1bHRNYXRjaGVyLCBzdWZmaXhQTFBNYXRjaGVyXSk7XG4gIH07XG4gIHJldHVybiBmYWN0b3J5O1xufVxuXG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB3aXRoIHVybCBtYXRjaGVyIGZhY3RvcnkgZm9yIFBMUC5cbiAqIFRoZSBwcm92aWRlZCB1cmwgbWF0Y2hlciBtYXRjaGVzIGJvdGg6XG4gKiAtIHRoZSBjb25maWd1cmVkIGBwYXRoc2AgZnJvbSByb3V0aW5nIGNvbmZpZyBhbmRcbiAqIC0gY3VzdG9tIHBhdHRlcm4gIGAqKiAvIGMgLyA6Y2F0ZWdvcnlDb2RlYFxuICpcbiAqIElmIHRoZSB0aGlzIG1hdGNoZXIgZG9lc24ndCBmaXQgdGhlIHJlcXVpcmVtZW50cywgaXQgY2FuIGJlIHJlcGxhY2VkIHdpdGggdGhlIERFRkFVTFRfVVJMX01BVENIRVJcbiAqIG9yIGFkZGl0aW9uYWwgbWF0Y2hlcnMgY2FuIGJlIGFkZGVkIGZvciBhIHNwZWNpZmljIHJvdXRlLlxuICpcbiAqIE5vdGU6IE1hdGNoZXJzIHdpbGwgXCJtYXRjaFwiIGEgcm91dGUsIGJ1dCBkbyBub3QgY29udHJpYnV0ZSB0byB0aGUgY3JlYXRpb24gb2YgdGhlIHJvdXRlLCBub3IgZG8gdGhleSBndWFyZCByb3V0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBQUk9EVUNUX0xJU1RJTkdfVVJMX01BVENIRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48XG4gIFVybE1hdGNoZXJGYWN0b3J5XG4+KCdQUk9EVUNUX0xJU1RJTkdfVVJMX01BVENIRVInLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogKCkgPT5cbiAgICBnZXRQcm9kdWN0TGlzdGluZ1VybE1hdGNoZXJGYWN0b3J5KFxuICAgICAgaW5qZWN0KFVybE1hdGNoZXJTZXJ2aWNlKSxcbiAgICAgIGluamVjdChERUZBVUxUX1VSTF9NQVRDSEVSKVxuICAgICksXG59KTtcbiJdfQ==