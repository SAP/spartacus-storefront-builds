/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutingService, SearchboxService, TranslationService, WindowRef, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/** @type {?} */
var HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
var SearchBoxComponentService = /** @class */ (function () {
    function SearchBoxComponentService(searchService, routingService, translationService, winRef) {
        this.searchService = searchService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.winRef = winRef;
    }
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     */
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.search = /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    function (query, config) {
        if (!query || query === '') {
            this.clearResults();
            return;
        }
        if (config.minCharactersBeforeRequest &&
            query.length < config.minCharactersBeforeRequest) {
            return;
        }
        if (config.displayProducts) {
            this.searchService.search(query, {
                pageSize: config.maxProducts,
            });
        }
        if (config.displaySuggestions) {
            this.searchService.searchSuggestions(query, {
                pageSize: config.maxSuggestions,
            });
        }
    };
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getResults = /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config), this.getSearchMessage(config)).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 3), productResults = _b[0], suggestions = _b[1], message = _b[2];
            return {
                products: productResults ? productResults.products : null,
                suggestions: suggestions,
                message: message,
            };
        }), tap(function (results) {
            return _this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, _this.hasResults(results));
        }));
    };
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    SearchBoxComponentService.prototype.clearResults = /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    function () {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    };
    /**
     * @param {?} className
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasBodyClass = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        return this.winRef.document.body.classList.contains(className);
    };
    /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    SearchBoxComponentService.prototype.toggleBodyClass = /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    function (className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    };
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasResults = /**
     * @private
     * @param {?} results
     * @return {?}
     */
    function (results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getProductResults = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.displayProducts) {
            return this.searchService.getResults();
        }
        else {
            return of({});
        }
    };
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getProductSuggestions = /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map(function (res) { return res.map(function (suggestion) { return suggestion.value; }); }), switchMap(function (suggestions) {
                if (suggestions.length === 0) {
                    return _this.getExactSuggestion(config).pipe(map(function (match) { return (match ? [match] : []); }));
                }
                else {
                    return of(suggestions);
                }
            }));
        }
    };
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getExactSuggestion = /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return this.getProductResults(config).pipe(switchMap(function (productResult) {
            return productResult.products && productResult.products.length > 0
                ? _this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        }));
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getSearchMessage = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config)).pipe(switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), productResult = _b[0], suggestions = _b[1];
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                (suggestions && suggestions.length === 0)) {
                return _this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        }));
    };
    /**
     * Navigates to the search result page with a given query
     */
    /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponentService.prototype.launchSearchPage = /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: query },
        });
    };
    /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    SearchBoxComponentService.prototype.fetchTranslation = /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    function (translationKey, options) {
        return this.translationService.translate(translationKey, options);
    };
    SearchBoxComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SearchBoxComponentService.ctorParameters = function () { return [
        { type: SearchboxService },
        { type: RoutingService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SearchBoxComponentService.ngInjectableDef = i0.defineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.inject(i1.SearchboxService), i0.inject(i1.RoutingService), i0.inject(i1.TranslationService), i0.inject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
    return SearchBoxComponentService;
}());
export { SearchBoxComponentService };
if (false) {
    /** @type {?} */
    SearchBoxComponentService.prototype.searchService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.translationService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUFHL0MsdUJBQXVCLEdBQUcsdUJBQXVCO0FBRXZEO0lBSUUsbUNBQ1MsYUFBK0IsRUFDNUIsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLE1BQWlCO1FBSHBCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSjs7OztPQUlHOzs7Ozs7Ozs7SUFDSCwwQ0FBTTs7Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxNQUF1QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQ0UsTUFBTSxDQUFDLDBCQUEwQjtZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsRUFDaEQ7WUFDQSxPQUFPO1NBQ1I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUMvQixRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVc7YUFDN0IsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRTtnQkFDMUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsOENBQVU7Ozs7Ozs7SUFBVixVQUFXLE1BQXVCO1FBQWxDLGlCQWlCQztRQWhCQyxPQUFPLGFBQWEsQ0FDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEVBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FDOUIsQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUMsRUFBc0M7Z0JBQXRDLDBCQUFzQyxFQUFyQyxzQkFBYyxFQUFFLG1CQUFXLEVBQUUsZUFBTztZQUN4QyxPQUFPO2dCQUNMLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3pELFdBQVcsYUFBQTtnQkFDWCxPQUFPLFNBQUE7YUFDUixDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUEsT0FBTztZQUNULE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQXZFLENBQXVFLENBQ3hFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdEQUFZOzs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLFNBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsbURBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBaUIsRUFBRSxHQUFhO1FBQzlDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2RDthQUFNO1lBQ0wsR0FBRztnQkFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7Ozs7SUFFTyw4Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsT0FBc0I7UUFDdkMsT0FBTyxDQUNMLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8scURBQWlCOzs7OztJQUF6QixVQUNFLE1BQXVCO1FBRXZCLElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNLLHlEQUFxQjs7Ozs7OztJQUE3QixVQUE4QixNQUF1QjtRQUFyRCxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUM5QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQ25ELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLENBQUMsS0FBSyxFQUFoQixDQUFnQixDQUFDLEVBQXZDLENBQXVDLENBQUMsRUFDbkQsU0FBUyxDQUFDLFVBQUEsV0FBVztnQkFDbkIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsT0FBTyxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FDckMsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNLLHNEQUFrQjs7Ozs7OztJQUExQixVQUEyQixNQUF1QjtRQUFsRCxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLFVBQUEsYUFBYTtZQUNyQixPQUFPLGFBQWEsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDaEUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsRUFBRTtvQkFDakQsSUFBSSxFQUFFLGFBQWEsQ0FBQyxjQUFjO2lCQUNuQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sb0RBQWdCOzs7OztJQUF4QixVQUF5QixNQUF1QjtRQUFoRCxpQkFrQkM7UUFqQkMsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUNuQyxDQUFDLElBQUksQ0FDSixTQUFTLENBQUMsVUFBQyxFQUE0QjtnQkFBNUIsMEJBQTRCLEVBQTNCLHFCQUFhLEVBQUUsbUJBQVc7WUFDcEMsSUFDRSxhQUFhO2dCQUNiLGFBQWEsQ0FBQyxRQUFRO2dCQUN0QixhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNuQyxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUN6QztnQkFDQSxPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksb0RBQWdCOzs7OztJQUF2QixVQUF3QixLQUFhO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE1BQU0sRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxvREFBZ0I7Ozs7OztJQUF4QixVQUNFLGNBQXNCLEVBQ3RCLE9BQWE7UUFFYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2dCQXJMRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpDLGdCQUFnQjtnQkFEaEIsY0FBYztnQkFFZCxrQkFBa0I7Z0JBQ2xCLFNBQVM7OztvQ0FOWDtDQW9NQyxBQXRMRCxJQXNMQztTQW5MWSx5QkFBeUI7OztJQUVsQyxrREFBc0M7Ozs7O0lBQ3RDLG1EQUF3Qzs7Ozs7SUFDeEMsdURBQWdEOzs7OztJQUNoRCwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaGJveFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuXG5jb25zdCBIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUyA9ICdoYXMtc2VhcmNoYm94LXJlc3VsdHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hib3hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBzZWFyY2ggZm9yIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9ucyxcbiAgICogdW5sZXNzIHRoZSBjb25maWd1cmF0aW9uIGlzIHNldHVwIHRvIG5vdCBzZWFyY2ggZm9yXG4gICAqIHByb2R1Y3RzIG9yIHN1Z2dlc3Rpb25zLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFxdWVyeSB8fCBxdWVyeSA9PT0gJycpIHtcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0ICYmXG4gICAgICBxdWVyeS5sZW5ndGggPCBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3RcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFByb2R1Y3RzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hTdWdnZXN0aW9ucyhxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBTZWFyY2hSZXN1bHRzLiBXaGVuIHRoZXJlJ3MgYW55XG4gICAqIHJlc3VsdCwgdGhlIGJvZHkgdGFnIHdpbGwgZ2V0IGEgY2xhc3NuYW1lLCBzbyB0aGF0IHNwZWNpZmljIHN0eWxlXG4gICAqIHJ1bGVzIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgZ2V0UmVzdWx0cyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0U2VhcmNoTWVzc2FnZShjb25maWcpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKChbcHJvZHVjdFJlc3VsdHMsIHN1Z2dlc3Rpb25zLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0UmVzdWx0cyA/IHByb2R1Y3RSZXN1bHRzLnByb2R1Y3RzIDogbnVsbCxcbiAgICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICB0YXAocmVzdWx0cyA9PlxuICAgICAgICB0aGlzLnRvZ2dsZUJvZHlDbGFzcyhIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUywgdGhpcy5oYXNSZXN1bHRzKHJlc3VsdHMpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBzZWFyY2hib3ggcmVzdWx0cywgc28gdGhhdCBvbGQgdmFsdWVzIGFyZVxuICAgKiBubyBsb25nZXIgZW1pdGVkIHVwb24gbmV4dCBzZWFyY2guXG4gICAqL1xuICBjbGVhclJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuICAgIHRoaXMudG9nZ2xlQm9keUNsYXNzKEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTLCBmYWxzZSk7XG4gIH1cblxuICBoYXNCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUJvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgYWRkPzogYm9vbGVhbikge1xuICAgIGlmIChhZGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFxuICAgICAgICA/IHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIDogdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYXNSZXN1bHRzKHJlc3VsdHM6IFNlYXJjaFJlc3VsdHMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKCEhcmVzdWx0cy5wcm9kdWN0cyAmJiByZXN1bHRzLnByb2R1Y3RzLmxlbmd0aCA+IDApIHx8XG4gICAgICAoISFyZXN1bHRzLnN1Z2dlc3Rpb25zICYmIHJlc3VsdHMuc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCkgfHxcbiAgICAgICEhcmVzdWx0cy5tZXNzYWdlXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFJlc3VsdHMoXG4gICAgY29uZmlnOiBTZWFyY2hCb3hDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgc3VnZ2VzdGlvbnMgZnJvbSB0aGUgYmFja2VuZC4gSW4gY2FzZSB0aGVyZSdzIG5vIHN1Z2dlc3Rpb25cbiAgICogYXZhaWxhYmxlLCB3ZSB0cnkgdG8gZ2V0IGFuIGV4YWN0IG1hdGNoIHN1Z2dlc3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBpZiAoIWNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3VnZ2VzdGlvblJlc3VsdHMoKS5waXBlKFxuICAgICAgICBtYXAocmVzID0+IHJlcy5tYXAoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnZhbHVlKSksXG4gICAgICAgIHN3aXRjaE1hcChzdWdnZXN0aW9ucyA9PiB7XG4gICAgICAgICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhhY3RTdWdnZXN0aW9uKGNvbmZpZykucGlwZShcbiAgICAgICAgICAgICAgbWFwKG1hdGNoID0+IChtYXRjaCA/IFttYXRjaF0gOiBbXSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHdoZW5ldmVyIHRoZXJlIGlzIGF0IGxlYXN0IDEgcHJvZHVjdCwgd2Ugc2ltdWxhdGVcbiAgICogYSBzdWdnZXN0aW9uIHRvIHByb3ZpZGUgZWFzeSBhY2Nlc3MgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRFeGFjdFN1Z2dlc3Rpb24oY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZykucGlwZShcbiAgICAgIHN3aXRjaE1hcChwcm9kdWN0UmVzdWx0ID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMgJiYgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLmV4YWN0TWF0Y2gnLCB7XG4gICAgICAgICAgICAgIHRlcm06IHByb2R1Y3RSZXN1bHQuZnJlZVRleHRTZWFyY2gsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlYXJjaE1lc3NhZ2UoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnKVxuICAgICkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3Byb2R1Y3RSZXN1bHQsIHN1Z2dlc3Rpb25zXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdCAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMgJiZcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgIChzdWdnZXN0aW9ucyAmJiBzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLm5vTWF0Y2gnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZSB3aXRoIGEgZ2l2ZW4gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoVHJhbnNsYXRpb24oXG4gICAgdHJhbnNsYXRpb25LZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==