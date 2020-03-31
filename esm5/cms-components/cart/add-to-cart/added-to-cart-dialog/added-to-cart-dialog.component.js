import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cart, ActiveCartService, OrderEntry, PromotionLocation, PromotionResult, } from '@spartacus/core';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
var AddedToCartDialogComponent = /** @class */ (function () {
    function AddedToCartDialogComponent(modalService, cartService, promotionService) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.iconTypes = ICON_TYPE;
        this.promotionLocation = PromotionLocation.ActiveCart;
        this.quantity = 0;
        this.modalIsOpen = false;
        this.form = new FormGroup({});
    }
    /**
     * Returns an observable formControl with the quantity of the cartEntry,
     * but also updates the entry in case of a changed value.
     * The quantity can be set to zero in order to remove the entry.
     */
    AddedToCartDialogComponent.prototype.getQuantityControl = function () {
        var _this = this;
        if (!this.quantityControl$) {
            this.quantityControl$ = this.entry$.pipe(filter(function (e) { return !!e; }), map(function (entry) { return _this.getFormControl(entry); }), switchMap(function () {
                return _this.form.valueChanges.pipe(
                // tslint:disable-next-line:deprecation
                startWith(null), tap(function (valueChange) {
                    if (valueChange) {
                        _this.cartService.updateEntry(valueChange.entryNumber, valueChange.quantity);
                        if (valueChange.quantity === 0) {
                            _this.dismissModal('Removed');
                        }
                    }
                    else {
                        _this.form.markAsPristine();
                    }
                }));
            }), map(function () { return _this.form.get('quantity'); }));
        }
        return this.quantityControl$;
    };
    AddedToCartDialogComponent.prototype.ngOnInit = function () {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    };
    AddedToCartDialogComponent.prototype.getFormControl = function (entry) {
        if (!this.form.get('quantity')) {
            var quantity = new FormControl(entry.quantity, { updateOn: 'blur' });
            this.form.addControl('quantity', quantity);
            var entryNumber = new FormControl(entry.entryNumber);
            this.form.addControl('entryNumber', entryNumber);
        }
        return this.form.get('quantity');
    };
    AddedToCartDialogComponent.prototype.dismissModal = function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    AddedToCartDialogComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ActiveCartService },
        { type: PromotionService }
    ]; };
    __decorate([
        ViewChild('dialog', { read: ElementRef })
    ], AddedToCartDialogComponent.prototype, "dialog", void 0);
    AddedToCartDialogComponent = __decorate([
        Component({
            selector: 'cx-added-to-cart-dialog',
            template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) || modalIsOpen; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart'\n          ) | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [quantityControl]=\"getQuantityControl() | async\"\n            [promotionLocation]=\"promotionLocation\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n\n            <div>{{ cart.subTotal?.formattedValue }}</div>\n          </div>\n\n          <!-- Promotions -->\n          <div\n            class=\"cx-dialog-promotions\"\n            *ngIf=\"orderPromotions$ | async as orderPromotions\"\n          >\n            <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n          </div>\n\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              autofocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
        })
    ], AddedToCartDialogComponent);
    return AddedToCartDialogComponent;
}());
export { AddedToCartDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxJQUFJLEVBQ0osaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQU0zRjtJQW9CRSxvQ0FDWSxZQUEwQixFQUMxQixXQUE4QixFQUM5QixnQkFBa0M7UUFGbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF0QjlDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFPdEIsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQUVwRSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFL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bnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENhcnQsXG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgUHJvbW90aW9uUmVzdWx0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkZWQtdG8tY2FydC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBlbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBsb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpbmNyZW1lbnQ6IGJvb2xlYW47XG4gIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIHF1YW50aXR5ID0gMDtcbiAgbW9kYWxJc09wZW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZGlhbG9nOiBFbGVtZW50UmVmO1xuXG4gIGZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuXG4gIHByaXZhdGUgcXVhbnRpdHlDb250cm9sJDogT2JzZXJ2YWJsZTxGb3JtQ29udHJvbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2VcbiAgKSB7fVxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvcm1Db250cm9sIHdpdGggdGhlIHF1YW50aXR5IG9mIHRoZSBjYXJ0RW50cnksXG4gICAqIGJ1dCBhbHNvIHVwZGF0ZXMgdGhlIGVudHJ5IGluIGNhc2Ugb2YgYSBjaGFuZ2VkIHZhbHVlLlxuICAgKiBUaGUgcXVhbnRpdHkgY2FuIGJlIHNldCB0byB6ZXJvIGluIG9yZGVyIHRvIHJlbW92ZSB0aGUgZW50cnkuXG4gICAqL1xuICBnZXRRdWFudGl0eUNvbnRyb2woKTogT2JzZXJ2YWJsZTxGb3JtQ29udHJvbD4ge1xuICAgIGlmICghdGhpcy5xdWFudGl0eUNvbnRyb2wkKSB7XG4gICAgICB0aGlzLnF1YW50aXR5Q29udHJvbCQgPSB0aGlzLmVudHJ5JC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGUpID0+ICEhZSksXG4gICAgICAgIG1hcCgoZW50cnkpID0+IHRoaXMuZ2V0Rm9ybUNvbnRyb2woZW50cnkpKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgICAgICB0YXAoKHZhbHVlQ2hhbmdlKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZS5lbnRyeU51bWJlcixcbiAgICAgICAgICAgICAgICAgIHZhbHVlQ2hhbmdlLnF1YW50aXR5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVDaGFuZ2UucXVhbnRpdHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzc01vZGFsKCdSZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKCgpID0+IDxGb3JtQ29udHJvbD50aGlzLmZvcm0uZ2V0KCdxdWFudGl0eScpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucXVhbnRpdHlDb250cm9sJDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXJQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnMoXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybUNvbnRyb2woZW50cnk6IE9yZGVyRW50cnkpOiBGb3JtQ29udHJvbCB7XG4gICAgaWYgKCF0aGlzLmZvcm0uZ2V0KCdxdWFudGl0eScpKSB7XG4gICAgICBjb25zdCBxdWFudGl0eSA9IG5ldyBGb3JtQ29udHJvbChlbnRyeS5xdWFudGl0eSwgeyB1cGRhdGVPbjogJ2JsdXInIH0pO1xuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woJ3F1YW50aXR5JywgcXVhbnRpdHkpO1xuXG4gICAgICBjb25zdCBlbnRyeU51bWJlciA9IG5ldyBGb3JtQ29udHJvbChlbnRyeS5lbnRyeU51bWJlcik7XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgnZW50cnlOdW1iZXInLCBlbnRyeU51bWJlcik7XG4gICAgfVxuICAgIHJldHVybiA8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmdldCgncXVhbnRpdHknKTtcbiAgfVxuXG4gIGRpc21pc3NNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5kaXNtaXNzQWN0aXZlTW9kYWwocmVhc29uKTtcbiAgfVxufVxuIl19