/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReturnRequestService } from '../return-request.service';
export class ReturnRequestItemsComponent {
    /**
     * @param {?} returnRequestService
     */
    constructor(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
}
ReturnRequestItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-return-request-items',
                template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n        {{ 'returnRequest.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.itemPrice' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-md-3 col-lg-3 col-xl-2\">\n        {{ 'returnRequest.returnQty' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.total' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div\n    class=\"cx-item-list-row\"\n    *ngFor=\"let returnEntry of returnRequest.returnEntries; let i = index\"\n  >\n    <div class=\"cx-item-list-items\">\n      <div class=\"row\">\n        <!-- Item Image -->\n        <div class=\"col-2 cx-image-container\">\n          <cx-media\n            [container]=\"returnEntry.orderEntry?.product.images?.PRIMARY\"\n            format=\"thumbnail\"\n          ></cx-media>\n        </div>\n        <!-- Item Information -->\n        <div class=\"cx-info col-10\">\n          <div class=\"cx-info-container row \">\n            <!-- Item Description -->\n            <div class=\"col-md-3 col-lg-4 col-xl-5\">\n              <div *ngIf=\"returnEntry.orderEntry?.product.name\" class=\"cx-name\">\n                {{ returnEntry.orderEntry?.product.name }}\n              </div>\n              <div *ngIf=\"returnEntry.orderEntry?.product.code\" class=\"cx-code\">\n                {{ 'cartItems.id' | cxTranslate }}\n                {{ returnEntry.orderEntry?.product.code }}\n              </div>\n              <!-- Variants \n                <div\n                  *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\">{{ variant.name }}</div>\n                  <div class=\"cx-value\">{{ variant.value }}</div>\n                </div>\n                -->\n            </div>\n            <!-- Item Price -->\n            <div\n              *ngIf=\"returnEntry.orderEntry?.basePrice\"\n              class=\"cx-price col-md-3 col-lg-2 col-xl-2\"\n            >\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.itemPrice' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.orderEntry?.basePrice?.formattedValue }}\n              </div>\n            </div>\n            <!-- return Quantity -->\n            <div class=\"cx-quantity col-md-3 col-lg-3 col-xl-3\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.returnQty' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.expectedQuantity }}\n              </div>\n            </div>\n            <!-- Total Price -->\n            <div class=\"cx-total col-md-3 col-lg-3 col-xl-2\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.total' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.refundAmount?.formattedValue }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ReturnRequestItemsComponent.ctorParameters = () => [
    { type: ReturnRequestService }
];
if (false) {
    /** @type {?} */
    ReturnRequestItemsComponent.prototype.returnRequest$;
    /**
     * @type {?}
     * @protected
     */
    ReturnRequestItemsComponent.prototype.returnRequestService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL3JldHVybi1yZXF1ZXN0LWRldGFpbC9yZXR1cm4tcmVxdWVzdC1pdGVtcy9yZXR1cm4tcmVxdWVzdC1pdGVtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPakUsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxZQUFzQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUVoRSxtQkFBYyxHQUVWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBSmtCLENBQUM7OztZQU5yRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMscWdIQUFvRDtnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxvQkFBb0I7Ozs7SUFVM0IscURBRWlEOzs7OztJQUpyQywyREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vcmV0dXJuLXJlcXVlc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldHVybi1yZXF1ZXN0LWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldHVybi1yZXF1ZXN0LWl0ZW1zLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldHVyblJlcXVlc3RJdGVtc0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogUmV0dXJuUmVxdWVzdFNlcnZpY2UpIHt9XG5cbiAgcmV0dXJuUmVxdWVzdCQ6IE9ic2VydmFibGU8XG4gICAgUmV0dXJuUmVxdWVzdFxuICA+ID0gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRSZXR1cm5SZXF1ZXN0KCk7XG59XG4iXX0=