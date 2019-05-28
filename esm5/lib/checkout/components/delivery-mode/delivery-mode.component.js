/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CheckoutConfigService } from '../../checkout-config.service';
var DeliveryModeComponent = /** @class */ (function () {
    function DeliveryModeComponent(fb, checkoutService, routingService, checkoutConfigService, activatedRoute) {
        this.fb = fb;
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.changedOption = false;
        this.supportedDeliveryModes$ = this.checkoutService.getSupportedDeliveryModes();
        this.selectedDeliveryMode$ = this.checkoutService.getSelectedDeliveryMode();
        this.checkoutService.loadSupportedDeliveryModes();
        this.selectedDeliveryMode$
            .pipe(map(function (deliveryMode) {
            return deliveryMode && deliveryMode.code ? deliveryMode.code : null;
        }))
            .subscribe(function (code) {
            if (code) {
                _this.mode.controls['deliveryModeId'].setValue(code);
                _this.currentDeliveryModeId = code;
            }
        });
    };
    /**
     * @param {?} code
     * @return {?}
     */
    DeliveryModeComponent.prototype.changeMode = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        if (code !== this.currentDeliveryModeId) {
            this.changedOption = true;
            this.currentDeliveryModeId = code;
        }
    };
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.changedOption) {
            this.checkoutService.setDeliveryMode(this.currentDeliveryModeId);
        }
        this.deliveryModeSub = this.checkoutService
            .getSelectedDeliveryMode()
            .subscribe(function (data) {
            if (data && data.code === _this.currentDeliveryModeId) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
        });
    };
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    Object.defineProperty(DeliveryModeComponent.prototype, "deliveryModeInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode.controls['deliveryModeId'].invalid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    };
    DeliveryModeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-delivery-mode',
                    template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of (supportedDeliveryModes$ | async)\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DeliveryModeComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutService },
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute }
    ]; };
    return DeliveryModeComponent;
}());
export { DeliveryModeComponent };
if (false) {
    /** @type {?} */
    DeliveryModeComponent.prototype.supportedDeliveryModes$;
    /** @type {?} */
    DeliveryModeComponent.prototype.selectedDeliveryMode$;
    /** @type {?} */
    DeliveryModeComponent.prototype.currentDeliveryModeId;
    /** @type {?} */
    DeliveryModeComponent.prototype.checkoutStepUrlNext;
    /** @type {?} */
    DeliveryModeComponent.prototype.checkoutStepUrlPrevious;
    /** @type {?} */
    DeliveryModeComponent.prototype.changedOption;
    /** @type {?} */
    DeliveryModeComponent.prototype.deliveryModeSub;
    /** @type {?} */
    DeliveryModeComponent.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.activatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9kZWxpdmVyeS1tb2RlL2RlbGl2ZXJ5LW1vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixHQUd4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBZ0IsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUFtQkUsK0JBQ1UsRUFBZSxFQUNmLGVBQWdDLEVBQ2hDLGNBQThCLEVBQzlCLHFCQUE0QyxFQUM1QyxjQUE4QjtRQUo5QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVR4QyxTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDOUIsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDMUMsQ0FBQyxDQUFDO0lBUUEsQ0FBQzs7OztJQUVKLHdDQUFROzs7SUFBUjtRQUFBLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHFCQUFx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O0lBQ2hELHNEQUE4Qjs7SUFDOUIsb0RBQTRCOztJQUM1Qix3REFBZ0M7O0lBRWhDLDhDQUF1Qjs7SUFDdkIsZ0RBQThCOztJQUU5QixxQ0FFRzs7Ozs7SUFHRCxtQ0FBdUI7Ozs7O0lBQ3ZCLGdEQUF3Qzs7Ozs7SUFDeEMsK0NBQXNDOzs7OztJQUN0QyxzREFBb0Q7Ozs7O0lBQ3BELCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgQ2hlY2tvdXRTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1kZWxpdmVyeS1tb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGl2ZXJ5LW1vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG4gIHNlbGVjdGVkRGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjdXJyZW50RGVsaXZlcnlNb2RlSWQ6IHN0cmluZztcbiAgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuXG4gIGNoYW5nZWRPcHRpb246IGJvb2xlYW47XG4gIGRlbGl2ZXJ5TW9kZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG1vZGU6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGRlbGl2ZXJ5TW9kZUlkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcbiAgICB0aGlzLmNoYW5nZWRPcHRpb24gPSBmYWxzZTtcblxuICAgIHRoaXMuc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgdGhpcy5zZWxlY3RlZERlbGl2ZXJ5TW9kZSQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpO1xuXG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWREZWxpdmVyeU1vZGUkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSkgPT5cbiAgICAgICAgICBkZWxpdmVyeU1vZGUgJiYgZGVsaXZlcnlNb2RlLmNvZGUgPyBkZWxpdmVyeU1vZGUuY29kZSA6IG51bGxcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShjb2RlID0+IHtcbiAgICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgICB0aGlzLm1vZGUuY29udHJvbHNbJ2RlbGl2ZXJ5TW9kZUlkJ10uc2V0VmFsdWUoY29kZSk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZU1vZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRPcHRpb24gPSB0cnVlO1xuICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZE9wdGlvbikge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2Uuc2V0RGVsaXZlcnlNb2RlKHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlbGl2ZXJ5TW9kZVN1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5jb2RlID09PSB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxOZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyk7XG4gIH1cblxuICBnZXQgZGVsaXZlcnlNb2RlSW52YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlLmNvbnRyb2xzWydkZWxpdmVyeU1vZGVJZCddLmludmFsaWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxpdmVyeU1vZGVTdWIpIHtcbiAgICAgIHRoaXMuZGVsaXZlcnlNb2RlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=