import { __assign, __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, PaymentDetails, RoutingService, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../services/checkout-config.service';
var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, activeCartService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.iconTypes = ICON_TYPE;
        this.newPaymentFormManuallyOpened = false;
        this.isGuestCheckout = false;
    }
    PaymentMethodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allowRouting = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.activeCartService.isGuestCart()) {
            this.userPaymentService.loadPaymentMethods();
        }
        else {
            this.isGuestCheckout = true;
        }
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.checkoutDeliveryService
            .getDeliveryAddress()
            .pipe(take(1))
            .subscribe(function (address) {
            _this.deliveryAddress = address;
        });
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter(function (paymentInfo) { return paymentInfo && !!Object.keys(paymentInfo).length; }))
            .subscribe(function (paymentInfo) {
            if (_this.allowRouting) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
            if (!paymentInfo['hasError']) {
                _this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach(function (key) {
                    if (key.startsWith('InvalidField')) {
                        _this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                    }
                });
                _this.checkoutService.clearCheckoutStep(3);
            }
        });
    };
    PaymentMethodComponent.prototype.getCardContent = function (payment) {
        var _this = this;
        if (!this.selectedPayment && payment.defaultPayment) {
            this.selectedPayment = payment;
        }
        return combineLatest([
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 4), textExpires = _b[0], textUseThisPayment = _b[1], textDefaultPaymentMethod = _b[2], textSelected = _b[3];
            return _this.createCard(payment, {
                textExpires: textExpires,
                textUseThisPayment: textUseThisPayment,
                textDefaultPaymentMethod: textDefaultPaymentMethod,
                textSelected: textSelected,
            });
        }));
    };
    PaymentMethodComponent.prototype.selectPaymentMethod = function (paymentDetails) {
        this.selectedPayment = paymentDetails;
    };
    PaymentMethodComponent.prototype.showNewPaymentForm = function () {
        this.newPaymentFormManuallyOpened = true;
    };
    PaymentMethodComponent.prototype.hideNewPaymentForm = function () {
        this.newPaymentFormManuallyOpened = false;
    };
    PaymentMethodComponent.prototype.setPaymentDetails = function (_a) {
        var paymentDetails = _a.paymentDetails, billingAddress = _a.billingAddress, _b = _a.isNewPayment, isNewPayment = _b === void 0 ? true : _b;
        var details = __assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        if (isNewPayment) {
            this.checkoutPaymentService.createPaymentDetails(details);
        }
        else if (this.selectedPayment && this.selectedPayment.id === details.id) {
            this.checkoutPaymentService.setPaymentDetails(details);
        }
        this.allowRouting = true;
    };
    PaymentMethodComponent.prototype.ngOnDestroy = function () {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
        this.checkoutPaymentService.paymentProcessSuccess();
    };
    PaymentMethodComponent.prototype.getCardIcon = function (code) {
        var ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    };
    PaymentMethodComponent.prototype.sendPaymentMethodFailGlobalMessage = function (msg) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field: msg },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    PaymentMethodComponent.prototype.createCard = function (paymentDetails, cardLabels) {
        return {
            title: paymentDetails.defaultPayment
                ? cardLabels.textDefaultPaymentMethod
                : '',
            textBold: paymentDetails.accountHolderName,
            text: [paymentDetails.cardNumber, cardLabels.textExpires],
            img: this.getCardIcon(paymentDetails.cardType.code),
            actions: [{ name: cardLabels.textUseThisPayment, event: 'send' }],
            header: this.selectedPayment && this.selectedPayment.id === paymentDetails.id
                ? cardLabels.textSelected
                : undefined,
        };
    };
    PaymentMethodComponent.prototype.goNext = function () {
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
        });
    };
    PaymentMethodComponent.prototype.goPrevious = function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    PaymentMethodComponent.ctorParameters = function () { return [
        { type: UserPaymentService },
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService },
        { type: ActiveCartService }
    ]; };
    PaymentMethodComponent = __decorate([
        Component({
            selector: 'cx-payment-method',
            template: "<ng-container *ngIf=\"existingPaymentMethods$ | async as existingPaymentMethods\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        (existingPaymentMethods$ | async).length &&\n          !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"selectPaymentMethod(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"goPrevious()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"goNext()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"goPrevious()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaymentMethodComponent);
    return PaymentMethodComponent;
}());
export { PaymentMethodComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU8vRTtJQWVFLGdDQUNZLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBQzlDLG9CQUEwQyxFQUMxQyxjQUE4QixFQUM5QixxQkFBNEMsRUFDNUMsY0FBOEIsRUFDOUIsV0FBK0IsRUFDL0IsaUJBQW9DO1FBVHBDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMkJB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QUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBM0wrQixrQkFBa0I7Z0JBQ3JCLGVBQWU7Z0JBQ1AsdUJBQXVCO2dCQUN4QixzQkFBc0I7Z0JBQ3hCLG9CQUFvQjtnQkFDMUIsY0FBYztnQkFDUCxxQkFBcUI7Z0JBQzVCLGNBQWM7Z0JBQ2pCLGtCQUFrQjtnQkFDWixpQkFBaUI7O0lBekJyQyxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixnK0VBQThDO1lBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxzQkFBc0IsQ0E0TWxDO0lBQUQsNkJBQUM7Q0FBQSxBQTVNRCxJQTRNQztTQTVNWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBQYXltZW50RGV0YWlscyxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtbWV0aG9kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgbmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBleGlzdGluZ1BheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc2VsZWN0ZWRQYXltZW50OiBQYXltZW50RGV0YWlscztcbiAgYWxsb3dSb3V0aW5nOiBib29sZWFuO1xuICBpc0d1ZXN0Q2hlY2tvdXQgPSBmYWxzZTtcblxuICBwcml2YXRlIGdldFBheW1lbnREZXRhaWxzU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3M7XG4gIHByaXZhdGUgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFsbG93Um91dGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzR3Vlc3RDaGVja291dCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxOZXh0ID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChhZGRyZXNzOiBBZGRyZXNzKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzID0gYWRkcmVzcztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5leGlzdGluZ1BheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCk7XG4gICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1YiA9IHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKHBheW1lbnRJbmZvKSA9PiBwYXltZW50SW5mbyAmJiAhIU9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocGF5bWVudEluZm8pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dSb3V0aW5nKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGF5bWVudEluZm9bJ2hhc0Vycm9yJ10pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnRJbmZvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKHBheW1lbnRJbmZvW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiBwYXltZW50LmRlZmF1bHRQYXltZW50KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50LmV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBwYXltZW50LmV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS51c2VUaGlzUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2VsZWN0ZWQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRFeHBpcmVzLFxuICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2FyZChwYXltZW50LCB7XG4gICAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudERldGFpbHM7XG4gIH1cblxuICBzaG93TmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFBheW1lbnREZXRhaWxzKHtcbiAgICBwYXltZW50RGV0YWlscyxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgICBpc05ld1BheW1lbnQgPSB0cnVlLFxuICB9OiB7XG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgICBpc05ld1BheW1lbnQ/OiBib29sZWFuO1xuICB9KTogdm9pZCB7XG4gICAgY29uc3QgZGV0YWlsczogUGF5bWVudERldGFpbHMgPSB7IC4uLnBheW1lbnREZXRhaWxzIH07XG4gICAgZGV0YWlscy5iaWxsaW5nQWRkcmVzcyA9IGJpbGxpbmdBZGRyZXNzIHx8IHRoaXMuZGVsaXZlcnlBZGRyZXNzO1xuXG4gICAgaWYgKGlzTmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmNyZWF0ZVBheW1lbnREZXRhaWxzKGRldGFpbHMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgdGhpcy5zZWxlY3RlZFBheW1lbnQuaWQgPT09IGRldGFpbHMuaWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhkZXRhaWxzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFsbG93Um91dGluZyA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yikge1xuICAgICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5wYXltZW50UHJvY2Vzc1N1Y2Nlc3MoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBjY0ljb246IHN0cmluZztcbiAgICBpZiAoY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5WSVNBO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ21hc3RlcicgfHwgY29kZSA9PT0gJ21hc3RlcmNhcmRfZXVyb2NhcmQnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5NQVNURVJfQ0FSRDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdkaW5lcnMnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5ESU5FUlNfQ0xVQjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdhbWV4Jykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQU1FWDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQ1JFRElUX0NBUkQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNjSWNvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BheW1lbnRNZXRob2RzLmludmFsaWRGaWVsZCcsXG4gICAgICAgIHBhcmFtczogeyBmaWVsZDogbXNnIH0sXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocGF5bWVudERldGFpbHMsIGNhcmRMYWJlbHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHBheW1lbnREZXRhaWxzLmRlZmF1bHRQYXltZW50XG4gICAgICAgID8gY2FyZExhYmVscy50ZXh0RGVmYXVsdFBheW1lbnRNZXRob2RcbiAgICAgICAgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyLCBjYXJkTGFiZWxzLnRleHRFeHBpcmVzXSxcbiAgICAgIGltZzogdGhpcy5nZXRDYXJkSWNvbihwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlKSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IGNhcmRMYWJlbHMudGV4dFVzZVRoaXNQYXltZW50LCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOlxuICAgICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiB0aGlzLnNlbGVjdGVkUGF5bWVudC5pZCA9PT0gcGF5bWVudERldGFpbHMuaWRcbiAgICAgICAgICA/IGNhcmRMYWJlbHMudGV4dFNlbGVjdGVkXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIGdvTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFBheW1lbnREZXRhaWxzKHtcbiAgICAgIHBheW1lbnREZXRhaWxzOiB0aGlzLnNlbGVjdGVkUGF5bWVudCxcbiAgICAgIGlzTmV3UGF5bWVudDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBnb1ByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyk7XG4gIH1cbn1cbiJdfQ==