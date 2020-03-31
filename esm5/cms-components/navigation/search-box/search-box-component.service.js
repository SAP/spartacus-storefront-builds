import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { ProductSearchPage, RoutingService, SearchboxService, TranslationService, WindowRef, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
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
    SearchBoxComponentService.prototype.search = function (query, config) {
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
    SearchBoxComponentService.prototype.getResults = function (config) {
        var _this = this;
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), productResults = _b[0], suggestions = _b[1], message = _b[2];
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
    SearchBoxComponentService.prototype.clearResults = function () {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    };
    SearchBoxComponentService.prototype.hasBodyClass = function (className) {
        return this.winRef.document.body.classList.contains(className);
    };
    SearchBoxComponentService.prototype.toggleBodyClass = function (className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    };
    SearchBoxComponentService.prototype.hasResults = function (results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    };
    SearchBoxComponentService.prototype.getProductResults = function (config) {
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
    SearchBoxComponentService.prototype.getProductSuggestions = function (config) {
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
    SearchBoxComponentService.prototype.getExactSuggestion = function (config) {
        var _this = this;
        return this.getProductResults(config).pipe(switchMap(function (productResult) {
            return productResult.products && productResult.products.length > 0
                ? _this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        }));
    };
    SearchBoxComponentService.prototype.getSearchMessage = function (config) {
        var _this = this;
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
        ]).pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), productResult = _b[0], suggestions = _b[1];
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                suggestions &&
                suggestions.length === 0) {
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
    SearchBoxComponentService.prototype.launchSearchPage = function (query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: query },
        });
    };
    SearchBoxComponentService.prototype.fetchTranslation = function (translationKey, options) {
        return this.translationService.translate(translationKey, options);
    };
    SearchBoxComponentService.ctorParameters = function () { return [
        { type: SearchboxService },
        { type: RoutingService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    SearchBoxComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.ɵɵinject(i1.SearchboxService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
    SearchBoxComponentService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SearchBoxComponentService);
    return SearchBoxComponentService;
}());
export { SearchBoxComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUdyRCxJQUFNLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0FBS3hEO0lBQ0UsbUNBQ1MsYUFBK0IsRUFDNUIsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLE1BQWlCO1FBSHBCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsMENBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxNQUF1QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQ0UsTUFBTSxDQUFDLDBCQUEwQjtZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsRUFDaEQ7WUFDQSxPQUFP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YTtRQUViLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Z0JBakx1QixnQkFBZ0I7Z0JBQ1osY0FBYztnQkFDVixrQkFBa0I7Z0JBQzlCLFNBQVM7OztJQUxsQix5QkFBeUI7UUFIckMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHlCQUF5QixDQW9MckM7b0NBck1EO0NBcU1DLEFBcExELElBb0xDO1NBcExZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTID0gJ2hhcy1zZWFyY2hib3gtcmVzdWx0cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6IFNlYXJjaGJveFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIHNlYXJjaCBmb3IgcHJvZHVjdHMgYW5kIHN1Z2dlc3Rpb25zLFxuICAgKiB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gaXMgc2V0dXAgdG8gbm90IHNlYXJjaCBmb3JcbiAgICogcHJvZHVjdHMgb3Igc3VnZ2VzdGlvbnMuXG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5ID09PSAnJykge1xuICAgICAgdGhpcy5jbGVhclJlc3VsdHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QgJiZcbiAgICAgIHF1ZXJ5Lmxlbmd0aCA8IGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4UHJvZHVjdHMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaFN1Z2dlc3Rpb25zKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4U3VnZ2VzdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNlYXJjaFJlc3VsdHMuIFdoZW4gdGhlcmUncyBhbnlcbiAgICogcmVzdWx0LCB0aGUgYm9keSB0YWcgd2lsbCBnZXQgYSBjbGFzc25hbWUsIHNvIHRoYXQgc3BlY2lmaWMgc3R5bGVcbiAgICogcnVsZXMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuICBnZXRSZXN1bHRzKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0U2VhcmNoTWVzc2FnZShjb25maWcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtwcm9kdWN0UmVzdWx0cywgc3VnZ2VzdGlvbnMsIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RSZXN1bHRzID8gcHJvZHVjdFJlc3VsdHMucHJvZHVjdHMgOiBudWxsLFxuICAgICAgICAgIHN1Z2dlc3Rpb25zLFxuICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHRhcCgocmVzdWx0cykgPT5cbiAgICAgICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIHRoaXMuaGFzUmVzdWx0cyhyZXN1bHRzKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgc2VhcmNoYm94IHJlc3VsdHMsIHNvIHRoYXQgb2xkIHZhbHVlcyBhcmVcbiAgICogbm8gbG9uZ2VyIGVtaXRlZCB1cG9uIG5leHQgc2VhcmNoLlxuICAgKi9cbiAgY2xlYXJSZXN1bHRzKCkge1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgICB0aGlzLnRvZ2dsZUJvZHlDbGFzcyhIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUywgZmFsc2UpO1xuICB9XG5cbiAgaGFzQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGFkZD86IGJvb2xlYW4pIHtcbiAgICBpZiAoYWRkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRcbiAgICAgICAgPyB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICA6IHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFzUmVzdWx0cyhyZXN1bHRzOiBTZWFyY2hSZXN1bHRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICghIXJlc3VsdHMucHJvZHVjdHMgJiYgcmVzdWx0cy5wcm9kdWN0cy5sZW5ndGggPiAwKSB8fFxuICAgICAgKCEhcmVzdWx0cy5zdWdnZXN0aW9ucyAmJiByZXN1bHRzLnN1Z2dlc3Rpb25zLmxlbmd0aCA+IDApIHx8XG4gICAgICAhIXJlc3VsdHMubWVzc2FnZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RSZXN1bHRzKFxuICAgIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHN1Z2dlc3Rpb25zIGZyb20gdGhlIGJhY2tlbmQuIEluIGNhc2UgdGhlcmUncyBubyBzdWdnZXN0aW9uXG4gICAqIGF2YWlsYWJsZSwgd2UgdHJ5IHRvIGdldCBhbiBleGFjdCBtYXRjaCBzdWdnZXN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgaWYgKCFjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICByZXR1cm4gb2YoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN1Z2dlc3Rpb25SZXN1bHRzKCkucGlwZShcbiAgICAgICAgbWFwKChyZXMpID0+IHJlcy5tYXAoKHN1Z2dlc3Rpb24pID0+IHN1Z2dlc3Rpb24udmFsdWUpKSxcbiAgICAgICAgc3dpdGNoTWFwKChzdWdnZXN0aW9ucykgPT4ge1xuICAgICAgICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEV4YWN0U3VnZ2VzdGlvbihjb25maWcpLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobWF0Y2gpID0+IChtYXRjaCA/IFttYXRjaF0gOiBbXSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHdoZW5ldmVyIHRoZXJlIGlzIGF0IGxlYXN0IDEgcHJvZHVjdCwgd2Ugc2ltdWxhdGVcbiAgICogYSBzdWdnZXN0aW9uIHRvIHByb3ZpZGUgZWFzeSBhY2Nlc3MgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRFeGFjdFN1Z2dlc3Rpb24oY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZykucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdFJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdFJlc3VsdC5wcm9kdWN0cyAmJiBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IHRoaXMuZmV0Y2hUcmFuc2xhdGlvbignc2VhcmNoQm94LmhlbHAuZXhhY3RNYXRjaCcsIHtcbiAgICAgICAgICAgICAgdGVybTogcHJvZHVjdFJlc3VsdC5mcmVlVGV4dFNlYXJjaCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBvZihudWxsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoTWVzc2FnZShjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnKSxcbiAgICBdKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbcHJvZHVjdFJlc3VsdCwgc3VnZ2VzdGlvbnNdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0ICYmXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cyAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgc3VnZ2VzdGlvbnMgJiZcbiAgICAgICAgICBzdWdnZXN0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hUcmFuc2xhdGlvbignc2VhcmNoQm94LmhlbHAubm9NYXRjaCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlIHdpdGggYSBnaXZlbiBxdWVyeVxuICAgKi9cbiAgcHVibGljIGxhdW5jaFNlYXJjaFBhZ2UocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgY3hSb3V0ZTogJ3NlYXJjaCcsXG4gICAgICBwYXJhbXM6IHsgcXVlcnkgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hUcmFuc2xhdGlvbihcbiAgICB0cmFuc2xhdGlvbktleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UudHJhbnNsYXRlKHRyYW5zbGF0aW9uS2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19