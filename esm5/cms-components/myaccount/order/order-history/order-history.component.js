import { __decorate, __read } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Order, OrderHistoryList, RoutingService, TranslationService, UserOrderService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap, filter, take } from 'rxjs/operators';
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(routing, userOrderService, translation) {
        var _this = this;
        this.routing = routing;
        this.userOrderService = userOrderService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
        this.orders$ = this.userOrderService.getOrderHistoryList(this.PAGE_SIZE).pipe(tap(function (orders) {
            if (orders.pagination) {
                _this.sortType = orders.pagination.sort;
            }
        }));
        this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
        /**
         * When "Order Return" feature is enabled, this component becomes one tab in
         * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
         */
        this.tabTitleParam$ = this.orders$.pipe(map(function (order) { return order.pagination.totalResults; }), filter(function (totalResults) { return totalResults !== undefined; }), take(1));
    }
    OrderHistoryComponent.prototype.ngOnDestroy = function () {
        this.userOrderService.clearOrderList();
    };
    OrderHistoryComponent.prototype.changeSortCode = function (sortCode) {
        var event = {
            sortCode: sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    };
    OrderHistoryComponent.prototype.pageChange = function (page) {
        var event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    };
    OrderHistoryComponent.prototype.goToOrderDetail = function (order) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: order,
        });
    };
    OrderHistoryComponent.prototype.getSortLabels = function () {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.orderNumber'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textByDate = _b[0], textByOrderNumber = _b[1];
            return {
                byDate: textByDate,
                byOrderNumber: textByOrderNumber,
            };
        }));
    };
    OrderHistoryComponent.prototype.fetchOrders = function (event) {
        this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    };
    OrderHistoryComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserOrderService },
        { type: TranslationService }
    ]; };
    OrderHistoryComponent = __decorate([
        Component({
            selector: 'cx-order-history',
            template: "<ng-container *ngIf=\"orders$ | async as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"isLoaded$ | async\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());
export { OrderHistoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQ0wsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3hEO0lBQ0UsK0JBQ1UsT0FBdUIsRUFDdkIsZ0JBQWtDLEVBQ2xDLFdBQStCO1FBSHpDLGlCQUlJO1FBSE0sWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFHakMsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUd0QixZQUFPLEdBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ2hFLEdBQUcsQ0FBQyxVQUFDLE1BQXdCO1lBQzNCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixjQUFTLEdBRUwsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFFdEQ7OztXQUdHO1FBQ0gsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3BELEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUE3QixDQUE2QixDQUFDLEVBQzNDLE1BQU0sQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksS0FBSyxTQUFTLEVBQTFCLENBQTBCLENBQUMsRUFDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7SUEzQkMsQ0FBQztJQTZCSiwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsUUFBZ0I7UUFDN0IsSUFBTSxLQUFLLEdBQThDO1lBQ3ZELFFBQVEsVUFBQTtZQUNSLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQU0sS0FBSyxHQUE4QztZQUN2RCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELCtDQUFlLEdBQWYsVUFBZ0IsS0FBWTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFDRSxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7U0FDbEQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsVUFBQyxFQUErQjtnQkFBL0Isa0JBQStCLEVBQTlCLGtCQUFVLEVBQUUseUJBQWlCO1lBQ2pDLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLGFBQWEsRUFBRSxpQkFBaUI7YUFDakMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU8sMkNBQVcsR0FBbkIsVUFBb0IsS0FBZ0Q7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FDakMsSUFBSSxDQUFDLFNBQVMsRUFDZCxLQUFLLENBQUMsV0FBVyxFQUNqQixLQUFLLENBQUMsUUFBUSxDQUNmLENBQUM7SUFDSixDQUFDOztnQkFoRmtCLGNBQWM7Z0JBQ0wsZ0JBQWdCO2dCQUNyQixrQkFBa0I7O0lBSjlCLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLDJ3TEFBNkM7WUFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLHFCQUFxQixDQW1GakM7SUFBRCw0QkFBQztDQUFBLEFBbkZELElBbUZDO1NBbkZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCwgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJIaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIFBBR0VfU0laRSA9IDU7XG4gIHNvcnRUeXBlOiBzdHJpbmc7XG5cbiAgb3JkZXJzJDogT2JzZXJ2YWJsZTxcbiAgICBPcmRlckhpc3RvcnlMaXN0XG4gID4gPSB0aGlzLnVzZXJPcmRlclNlcnZpY2UuZ2V0T3JkZXJIaXN0b3J5TGlzdCh0aGlzLlBBR0VfU0laRSkucGlwZShcbiAgICB0YXAoKG9yZGVyczogT3JkZXJIaXN0b3J5TGlzdCkgPT4ge1xuICAgICAgaWYgKG9yZGVycy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuc29ydFR5cGUgPSBvcmRlcnMucGFnaW5hdGlvbi5zb3J0O1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgaXNMb2FkZWQkOiBPYnNlcnZhYmxlPFxuICAgIGJvb2xlYW5cbiAgPiA9IHRoaXMudXNlck9yZGVyU2VydmljZS5nZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk7XG5cbiAgLyoqXG4gICAqIFdoZW4gXCJPcmRlciBSZXR1cm5cIiBmZWF0dXJlIGlzIGVuYWJsZWQsIHRoaXMgY29tcG9uZW50IGJlY29tZXMgb25lIHRhYiBpblxuICAgKiBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQuIFRoaXMgY2FuIGJlIHJlYWQgZnJvbSBUYWJQYXJhZ3JhcGhDb250YWluZXIuXG4gICAqL1xuICB0YWJUaXRsZVBhcmFtJDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5vcmRlcnMkLnBpcGUoXG4gICAgbWFwKG9yZGVyID0+IG9yZGVyLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKSxcbiAgICBmaWx0ZXIodG90YWxSZXN1bHRzID0+IHRvdGFsUmVzdWx0cyAhPT0gdW5kZWZpbmVkKSxcbiAgICB0YWtlKDEpXG4gICk7XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNsZWFyT3JkZXJMaXN0KCk7XG4gIH1cblxuICBjaGFuZ2VTb3J0Q29kZShzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGUsXG4gICAgICBjdXJyZW50UGFnZTogMCxcbiAgICB9O1xuICAgIHRoaXMuc29ydFR5cGUgPSBzb3J0Q29kZTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGU6IHRoaXMuc29ydFR5cGUsXG4gICAgICBjdXJyZW50UGFnZTogcGFnZSxcbiAgICB9O1xuICAgIHRoaXMuZmV0Y2hPcmRlcnMoZXZlbnQpO1xuICB9XG5cbiAgZ29Ub09yZGVyRGV0YWlsKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyxcbiAgICAgIHBhcmFtczogb3JkZXIsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTb3J0TGFiZWxzKCk6IE9ic2VydmFibGU8eyBieURhdGU6IHN0cmluZzsgYnlPcmRlck51bWJlcjogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc29ydGluZy5kYXRlJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc29ydGluZy5vcmRlck51bWJlcicpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0QnlEYXRlLCB0ZXh0QnlPcmRlck51bWJlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBieURhdGU6IHRleHRCeURhdGUsXG4gICAgICAgICAgYnlPcmRlck51bWJlcjogdGV4dEJ5T3JkZXJOdW1iZXIsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoT3JkZXJzKGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5sb2FkT3JkZXJMaXN0KFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICBldmVudC5jdXJyZW50UGFnZSxcbiAgICAgIGV2ZW50LnNvcnRDb2RlXG4gICAgKTtcbiAgfVxufVxuIl19