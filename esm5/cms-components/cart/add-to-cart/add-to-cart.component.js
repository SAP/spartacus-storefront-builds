/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { ModalService } from '../../../shared/components/modal/index';
import { CurrentProductService } from '../../product/current-product.service';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService, modalService, currentProductService, cd) {
        this.cartService = cartService;
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.increment = false;
    }
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.product) {
            this.productCode = this.product.code;
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            // force hasStock and quantity for the time being, as we do not have more info:
            this.quantity = 1;
            this.hasStock = true;
            this.cd.markForCheck();
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe((/**
             * @param {?} product
             * @return {?}
             */
            function (product) {
                _this.productCode = product.code;
                _this.setStockInfo(product);
                _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                _this.cd.markForCheck();
            }));
        }
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    AddToCartComponent.prototype.setStockInfo = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddToCartComponent.prototype.updateCount = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.quantity = value;
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.addToCart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        // check item is already present in the cart
        // so modal will have proper header text displayed
        this.cartService
            .getEntry(this.productCode)
            .subscribe((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            if (entry) {
                _this.increment = true;
            }
            _this.openModal();
            _this.cartService.addEntry(_this.productCode, _this.quantity);
            _this.increment = false;
        }))
            .unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    AddToCartComponent.prototype.openModal = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalInstance;
        this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.entry$ = this.cartEntry$;
        modalInstance.cart$ = this.cartService.getActive();
        modalInstance.loaded$ = this.cartService.getLoaded();
        modalInstance.quantity = this.quantity;
        modalInstance.increment = this.increment;
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AddToCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-cart',
                    template: "<div class=\"quantity\" *ngIf=\"productCode && showQuantity\">\n  <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n  <cx-item-counter\n    [value]=\"quantity\"\n    isValueChangeable=\"true\"\n    [min]=\"1\"\n    [max]=\"maxQuantity || null\"\n    *ngIf=\"hasStock\"\n    (update)=\"updateCount($event)\"\n  ></cx-item-counter>\n  <span class=\"info\">{{\n    hasStock\n      ? ('addToCart.inStock' | cxTranslate)\n      : ('addToCart.outOfStock' | cxTranslate)\n  }}</span>\n</div>\n<button\n  *ngIf=\"hasStock\"\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddToCartComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: ModalService },
        { type: CurrentProductService },
        { type: ChangeDetectorRef }
    ]; };
    AddToCartComponent.propDecorators = {
        productCode: [{ type: Input }],
        showQuantity: [{ type: Input }],
        product: [{ type: Input }]
    };
    return AddToCartComponent;
}());
export { AddToCartComponent };
if (false) {
    /** @type {?} */
    AddToCartComponent.prototype.productCode;
    /** @type {?} */
    AddToCartComponent.prototype.showQuantity;
    /**
     * As long as we do not support #5026, we require product input, as we need
     *  a reference to the product model to fetch the stock data.
     * @type {?}
     */
    AddToCartComponent.prototype.product;
    /** @type {?} */
    AddToCartComponent.prototype.maxQuantity;
    /** @type {?} */
    AddToCartComponent.prototype.modalRef;
    /** @type {?} */
    AddToCartComponent.prototype.hasStock;
    /** @type {?} */
    AddToCartComponent.prototype.quantity;
    /** @type {?} */
    AddToCartComponent.prototype.increment;
    /** @type {?} */
    AddToCartComponent.prototype.cartEntry$;
    /** @type {?} */
    AddToCartComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    AddToCartComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRW5HO0lBaUNFLDRCQUNZLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLHFCQUE0QyxFQUM5QyxFQUFxQjtRQUhuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBOUJ0QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQVc3QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBa0JmLENBQUM7Ozs7SUFFSixxQ0FBUTs7O0lBQVI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDckMs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IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIE9yZGVyRW50cnksIFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cvYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9DYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93UXVhbnRpdHkgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBcyBsb25nIGFzIHdlIGRvIG5vdCBzdXBwb3J0ICM1MDI2LCB3ZSByZXF1aXJlIHByb2R1Y3QgaW5wdXQsIGFzIHdlIG5lZWRcbiAgICogIGEgcmVmZXJlbmNlIHRvIHRoZSBwcm9kdWN0IG1vZGVsIHRvIGZldGNoIHRoZSBzdG9jayBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcblxuICBtYXhRdWFudGl0eTogbnVtYmVyO1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgcXVhbnRpdHkgPSAxO1xuICBpbmNyZW1lbnQgPSBmYWxzZTtcblxuICBjYXJ0RW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnByb2R1Y3QpIHtcbiAgICAgIHRoaXMucHJvZHVjdENvZGUgPSB0aGlzLnByb2R1Y3QuY29kZTtcbiAgICAgIHRoaXMuY2FydEVudHJ5JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSk7XG4gICAgICB0aGlzLnNldFN0b2NrSW5mbyh0aGlzLnByb2R1Y3QpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvZHVjdENvZGUpIHtcbiAgICAgIHRoaXMuY2FydEVudHJ5JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSk7XG4gICAgICAvLyBmb3JjZSBoYXNTdG9jayBhbmQgcXVhbnRpdHkgZm9yIHRoZSB0aW1lIGJlaW5nLCBhcyB3ZSBkbyBub3QgaGF2ZSBtb3JlIGluZm86XG4gICAgICB0aGlzLnF1YW50aXR5ID0gMTtcbiAgICAgIHRoaXMuaGFzU3RvY2sgPSB0cnVlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZVxuICAgICAgICAuZ2V0UHJvZHVjdCgpXG4gICAgICAgIC5waXBlKGZpbHRlcihCb29sZWFuKSlcbiAgICAgICAgLnN1YnNjcmliZSgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdENvZGUgPSBwcm9kdWN0LmNvZGU7XG4gICAgICAgICAgdGhpcy5zZXRTdG9ja0luZm8ocHJvZHVjdCk7XG4gICAgICAgICAgdGhpcy5jYXJ0RW50cnkkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKTtcbiAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFN0b2NrSW5mbyhwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy5xdWFudGl0eSA9IDE7XG4gICAgdGhpcy5oYXNTdG9jayA9XG4gICAgICBwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyAhPT0gJ291dE9mU3RvY2snO1xuICAgIGlmICh0aGlzLmhhc1N0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbCkge1xuICAgICAgdGhpcy5tYXhRdWFudGl0eSA9IHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb3VudCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5xdWFudGl0eSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkVG9DYXJ0KCkge1xuICAgIGlmICghdGhpcy5wcm9kdWN0Q29kZSB8fCB0aGlzLnF1YW50aXR5IDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY2hlY2sgaXRlbSBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGNhcnRcbiAgICAvLyBzbyBtb2RhbCB3aWxsIGhhdmUgcHJvcGVyIGhlYWRlciB0ZXh0IGRpc3BsYXllZFxuICAgIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKVxuICAgICAgLnN1YnNjcmliZShlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHRoaXMuaW5jcmVtZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZEVudHJ5KHRoaXMucHJvZHVjdENvZGUsIHRoaXMucXVhbnRpdHkpO1xuICAgICAgICB0aGlzLmluY3JlbWVudCA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuTW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsSW5zdGFuY2U6IGFueTtcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZSA9IHRoaXMubW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgbW9kYWxJbnN0YW5jZS5lbnRyeSQgPSB0aGlzLmNhcnRFbnRyeSQ7XG4gICAgbW9kYWxJbnN0YW5jZS5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgbW9kYWxJbnN0YW5jZS5sb2FkZWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKTtcbiAgICBtb2RhbEluc3RhbmNlLnF1YW50aXR5ID0gdGhpcy5xdWFudGl0eTtcbiAgICBtb2RhbEluc3RhbmNlLmluY3JlbWVudCA9IHRoaXMuaW5jcmVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19