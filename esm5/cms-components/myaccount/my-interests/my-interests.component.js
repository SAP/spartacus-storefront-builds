import { __assign, __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { combineLatest } from 'rxjs';
import { PaginationModel, Product, ProductInterestEntryRelation, ProductInterestSearchResult, ProductScope, ProductService, TranslationService, UserInterestsService, } from '@spartacus/core';
import { map, tap } from 'rxjs/operators';
var MyInterestsComponent = /** @class */ (function () {
    function MyInterestsComponent(productInterestService, translationService, productService) {
        this.productInterestService = productInterestService;
        this.translationService = translationService;
        this.productService = productService;
        this.DEFAULT_PAGE_SIZE = 10;
        this.sortMapping = {
            byNameAsc: 'name:asc',
            byNameDesc: 'name:desc',
        };
        this.sort = 'byNameAsc';
        this.sortOptions = [
            {
                code: 'byNameAsc',
                selected: false,
            },
            {
                code: 'byNameDesc',
                selected: false,
            },
        ];
    }
    MyInterestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interests$ = this.productInterestService
            .getAndLoadProductInterests(this.DEFAULT_PAGE_SIZE)
            .pipe(tap(function (interests) {
            return (_this.pagination = {
                currentPage: interests.pagination.page,
                pageSize: interests.pagination.count,
                totalPages: interests.pagination.totalPages,
                totalResults: interests.pagination.totalCount,
                sort: 'byNameAsc',
            });
        }), map(function (interest) { return (__assign(__assign({}, interest), { results: interest.results
                ? interest.results.map(function (result) { return (__assign(__assign({}, result), { product$: _this.getProduct(result) })); })
                : interest.results })); }));
        this.getInterestsloading$ = this.productInterestService.getProdutInterestsLoading();
        this.isRemoveDisabled$ = combineLatest([
            this.getInterestsloading$,
            this.productInterestService.getRemoveProdutInterestLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), getLoading = _b[0], removeLoading = _b[1];
            return getLoading || removeLoading;
        }));
        this.sortLabels = this.getSortLabels();
    };
    MyInterestsComponent.prototype.getSortLabels = function () {
        return combineLatest([
            this.translationService.translate('myInterests.sorting.byNameAsc'),
            this.translationService.translate('myInterests.sorting.byNameDesc'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), asc = _b[0], desc = _b[1];
            return {
                byNameAsc: asc,
                byNameDesc: desc,
            };
        }));
    };
    MyInterestsComponent.prototype.getProduct = function (interest) {
        return this.productService.get(interest.product.code, ProductScope.DETAILS);
    };
    MyInterestsComponent.prototype.removeInterest = function (relation) {
        this.productInterestService.removeProdutInterest({
            product: relation.product,
            productInterestEntry: relation.productInterestEntry,
        });
    };
    MyInterestsComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, 0, this.sortMapping[sort]);
    };
    MyInterestsComponent.prototype.pageChange = function (page) {
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, page, this.sortMapping[this.sort]);
    };
    MyInterestsComponent.prototype.ngOnDestroy = function () {
        this.productInterestService.clearProductInterests();
        this.productInterestService.resetRemoveInterestState();
    };
    MyInterestsComponent.ctorParameters = function () { return [
        { type: UserInterestsService },
        { type: TranslationService },
        { type: ProductService }
    ]; };
    MyInterestsComponent = __decorate([
        Component({
            selector: 'cx-my-interests',
            template: "<div *ngIf=\"interests$ | async as interests\" class=\"container\">\n  <div class=\"cx-product-interests-title h3\">\n    <h3>{{ 'myInterests.header' | cxTranslate }}</h3>\n  </div>\n  <div\n    class=\"cx-product-interests-body\"\n    *ngIf=\"!(getInterestsloading$ | async); else loading\"\n  >\n    <ng-container *ngIf=\"interests.pagination.totalCount > 0; else noInterest\">\n      <div class=\"cx-product-interests-sort top row\">\n        <div\n          class=\"cx-product-interests-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div\n          class=\"cx-product-interests-pagination cx-product-interests-thead-mobile\"\n        >\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n      <table class=\"table cx-product-interests-table\">\n        <thead class=\"cx-product-interests-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'myInterests.item' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">\n            {{ 'myInterests.price' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'myInterests.notifications' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let interest of interests.results\"\n            class=\"cx-product-interests-product-item\"\n          >\n            <ng-container *ngIf=\"interest.product$ | async as product\">\n              <td>\n                <div class=\"cx-product-interests-label\">\n                  <a\n                    class=\"cx-product-interests-product-image-link\"\n                    tabindex=\"-1\"\n                    [routerLink]=\"\n                      { cxRoute: 'product', params: product } | cxUrl\n                    \"\n                  >\n                    <cx-media\n                      [container]=\"product.images?.PRIMARY\"\n                      format=\"thumbnail\"\n                    ></cx-media>\n                  </a>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-info col-10\">\n                  <div class=\"cx-info-container row\">\n                    <div>\n                      <div *ngIf=\"product.name\" class=\"cx-name\">\n                        <a\n                          class=\"cx-link cx-product-interests-product-code-link\"\n                          [routerLink]=\"\n                            { cxRoute: 'product', params: product } | cxUrl\n                          \"\n                        >\n                          {{ product.name }}\n                        </a>\n                      </div>\n                      <div *ngIf=\"product.code\" class=\"cx-code\">\n                        <span>{{\n                          'myInterests.productId'\n                            | cxTranslate: { code: product.code }\n                        }}</span>\n                      </div>\n\n                      <ng-container\n                        *ngFor=\"let baseOptions of product.baseOptions\"\n                      >\n                        <div\n                          *ngFor=\"\n                            let variant of baseOptions.selected\n                              ?.variantOptionQualifiers\n                          \"\n                          class=\"cx-property\"\n                        >\n                          <div\n                            class=\"cx-label cx-product-interests-variant-name\"\n                          >\n                            {{ variant.name }}\n                          </div>\n                          <div\n                            class=\"cx-value cx-product-interests-variant-value\"\n                          >\n                            {{ variant.value }}\n                          </div>\n                        </div>\n                      </ng-container>\n                      <div\n                        class=\"cx-property\"\n                        *ngIf=\"product.stock.stockLevelStatus === 'outOfStock'\"\n                      >\n                        <div\n                          class=\"cx-label cx-product-interests-product-stock\"\n                        >\n                          {{ 'myInterests.outOfStock' | cxTranslate }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-product-price\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.price' | cxTranslate }}\n                  </div>\n                  <span>{{ product.price.formattedValue }}</span>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-subscriptions\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.notifications' | cxTranslate }}\n                  </div>\n                  <div\n                    class=\"cx-product-interests-notification\"\n                    *ngFor=\"let interestEntry of interest.productInterestEntry\"\n                  >\n                    <span class=\"cx-product-interests-type\">\n                      {{\n                        'myInterests.' + interestEntry.interestType\n                          | cxTranslate\n                      }}\n                    </span>\n                    <span class=\"cx-product-interests-expiration-date\">\n                      {{\n                        'myInterests.expirationDate'\n                          | cxTranslate\n                            : {\n                                expirationDate:\n                                  interestEntry.expirationDate | date\n                              }\n                      }}\n                    </span>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-actions cx-product-interests-remove-button\">\n                  <button\n                    type=\"button\"\n                    class=\"link cx-product-interests-remove-btn\"\n                    [disabled]=\"isRemoveDisabled$ | async\"\n                    (click)=\"removeInterest(interest)\"\n                  >\n                    {{ 'myInterests.remove' | cxTranslate }}\n                  </button>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"cx-product-interests-sort bottom row\">\n        <div\n          class=\"cx-product-interests-form-group cx-product-interests-thead-mobile form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div class=\"cx-product-interests-pagination\">\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<ng-template #noInterest>\n  <div class=\"cx-product-interests-message\">\n    {{ 'myInterests.noInterests' | cxTranslate }}\n  </div>\n</ng-template>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], MyInterestsComponent);
    return MyInterestsComponent;
}());
export { MyInterestsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1pbnRlcmVzdHMvbXktaW50ZXJlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLE9BQU8sRUFDUCw0QkFBNEIsRUFDNUIsMkJBQTJCLEVBQzNCLFlBQVksRUFDWixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhMUM7SUF5QkUsOEJBQ1Usc0JBQTRDLEVBQzVDLGtCQUFzQyxFQUN0QyxjQUE4QjtRQUY5QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXNCO1FBQzVDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBM0JoQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRztZQUNwQixTQUFTLEVBQUUsVUFBVTtZQUNyQixVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsU0FBSSxHQUFHLFdBQVcsQ0FBQztRQUNuQixnQkFBVyxHQUFHO1lBQ1o7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQztJQVlDLENBQUM7SUFFSix1Q0FBUSxHQUFSO1FBQUEsaUJB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dkIsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsSUFBSSxFQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkE3RmlDLG9CQUFvQjtnQkFDeEIsa0JBQWtCO2dCQUN0QixjQUFjOztJQTVCN0Isb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsbWhRQUE0QztZQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csb0JBQW9CLENBd0hoQztJQUFELDJCQUFDO0NBQUEsQUF4SEQsSUF3SEM7U0F4SFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdGlvbk1vZGVsLFxuICBQcm9kdWN0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsXG4gIFByb2R1Y3RTY29wZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckludGVyZXN0c1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdFVJIGV4dGVuZHMgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IHtcbiAgcmVzdWx0cz86IChQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uICYge1xuICAgIHByb2R1Y3QkPzogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgfSlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbXktaW50ZXJlc3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL215LWludGVyZXN0cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNeUludGVyZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBERUZBVUxUX1BBR0VfU0laRSA9IDEwO1xuICBwcml2YXRlIHNvcnRNYXBwaW5nID0ge1xuICAgIGJ5TmFtZUFzYzogJ25hbWU6YXNjJyxcbiAgICBieU5hbWVEZXNjOiAnbmFtZTpkZXNjJyxcbiAgfTtcblxuICBzb3J0ID0gJ2J5TmFtZUFzYyc7XG4gIHNvcnRPcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGNvZGU6ICdieU5hbWVBc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ2J5TmFtZURlc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG4gIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcblxuICBpbnRlcmVzdHMkOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdFVJPjtcbiAgaXNSZW1vdmVEaXNhYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGdldEludGVyZXN0c2xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHsgYnlOYW1lQXNjOiBzdHJpbmc7IGJ5TmFtZURlc2M6IHN0cmluZyB9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RJbnRlcmVzdFNlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW50ZXJlc3RzJCA9IHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZVxuICAgICAgLmdldEFuZExvYWRQcm9kdWN0SW50ZXJlc3RzKHRoaXMuREVGQVVMVF9QQUdFX1NJWkUpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIChpbnRlcmVzdHMpID0+XG4gICAgICAgICAgICAodGhpcy5wYWdpbmF0aW9uID0ge1xuICAgICAgICAgICAgICBjdXJyZW50UGFnZTogaW50ZXJlc3RzLnBhZ2luYXRpb24ucGFnZSxcbiAgICAgICAgICAgICAgcGFnZVNpemU6IGludGVyZXN0cy5wYWdpbmF0aW9uLmNvdW50LFxuICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiBpbnRlcmVzdHMucGFnaW5hdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgICAgICAgICB0b3RhbFJlc3VsdHM6IGludGVyZXN0cy5wYWdpbmF0aW9uLnRvdGFsQ291bnQsXG4gICAgICAgICAgICAgIHNvcnQ6ICdieU5hbWVBc2MnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChpbnRlcmVzdCkgPT4gKHtcbiAgICAgICAgICAuLi5pbnRlcmVzdCxcbiAgICAgICAgICByZXN1bHRzOiBpbnRlcmVzdC5yZXN1bHRzXG4gICAgICAgICAgICA/IGludGVyZXN0LnJlc3VsdHMubWFwKChyZXN1bHQpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgIHByb2R1Y3QkOiB0aGlzLmdldFByb2R1Y3QocmVzdWx0KSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IGludGVyZXN0LnJlc3VsdHMsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgIHRoaXMuZ2V0SW50ZXJlc3RzbG9hZGluZyQgPSB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2UuZ2V0UHJvZHV0SW50ZXJlc3RzTG9hZGluZygpO1xuICAgIHRoaXMuaXNSZW1vdmVEaXNhYmxlZCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0SW50ZXJlc3RzbG9hZGluZyQsXG4gICAgICB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2UuZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RMb2FkaW5nKCksXG4gICAgXSkucGlwZShtYXAoKFtnZXRMb2FkaW5nLCByZW1vdmVMb2FkaW5nXSkgPT4gZ2V0TG9hZGluZyB8fCByZW1vdmVMb2FkaW5nKSk7XG5cbiAgICB0aGlzLnNvcnRMYWJlbHMgPSB0aGlzLmdldFNvcnRMYWJlbHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHtcbiAgICBieU5hbWVBc2M6IHN0cmluZztcbiAgICBieU5hbWVEZXNjOiBzdHJpbmc7XG4gIH0+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS50cmFuc2xhdGUoJ215SW50ZXJlc3RzLnNvcnRpbmcuYnlOYW1lQXNjJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS50cmFuc2xhdGUoJ215SW50ZXJlc3RzLnNvcnRpbmcuYnlOYW1lRGVzYycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFthc2MsIGRlc2NdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYnlOYW1lQXNjOiBhc2MsXG4gICAgICAgICAgYnlOYW1lRGVzYzogZGVzYyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdChcbiAgICBpbnRlcmVzdDogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvblxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoaW50ZXJlc3QucHJvZHVjdC5jb2RlLCBQcm9kdWN0U2NvcGUuREVUQUlMUyk7XG4gIH1cblxuICByZW1vdmVJbnRlcmVzdChcbiAgICByZWxhdGlvbjogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiAmIHtcbiAgICAgIHByb2R1Y3QkPzogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICB9XG4gICk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5yZW1vdmVQcm9kdXRJbnRlcmVzdCh7XG4gICAgICBwcm9kdWN0OiByZWxhdGlvbi5wcm9kdWN0LFxuICAgICAgcHJvZHVjdEludGVyZXN0RW50cnk6IHJlbGF0aW9uLnByb2R1Y3RJbnRlcmVzdEVudHJ5LFxuICAgIH0pO1xuICB9XG5cbiAgc29ydENoYW5nZShzb3J0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgIHRoaXMuREVGQVVMVF9QQUdFX1NJWkUsXG4gICAgICAwLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1tzb3J0XVxuICAgICk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgIHRoaXMuREVGQVVMVF9QQUdFX1NJWkUsXG4gICAgICBwYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1t0aGlzLnNvcnRdXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdEludGVyZXN0U2VydmljZS5jbGVhclByb2R1Y3RJbnRlcmVzdHMoKTtcbiAgICB0aGlzLnByb2R1Y3RJbnRlcmVzdFNlcnZpY2UucmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==