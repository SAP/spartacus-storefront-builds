/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { UserInterestsService, UserNotificationPreferenceService, AuthService, OCC_USER_ID_ANONYMOUS, NotificationType, GlobalMessageService, TranslationService, GlobalMessageType, } from '@spartacus/core';
import { Subscription, combineLatest } from 'rxjs';
import { map, filter, tap, first } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
export class StockNotificationComponent {
    /**
     * @param {?} authService
     * @param {?} currentProductService
     * @param {?} globalMessageService
     * @param {?} translationService
     * @param {?} interestsService
     * @param {?} modalService
     * @param {?} notificationPrefService
     */
    constructor(authService, currentProductService, globalMessageService, translationService, interestsService, modalService, notificationPrefService) {
        this.authService = authService;
        this.currentProductService = currentProductService;
        this.globalMessageService = globalMessageService;
        this.translationService = translationService;
        this.interestsService = interestsService;
        this.modalService = modalService;
        this.notificationPrefService = notificationPrefService;
        this.anonymous = true;
        this.enabledPrefs = [];
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.outOfStock$ = combineLatest([
            this.currentProductService.getProduct().pipe(filter(Boolean)),
            this.authService.getOccUserId(),
        ]).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([product, userId]) => {
            this.productCode = product.code;
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.anonymous = false;
                this.notificationPrefService.loadPreferences();
                this.interestsService.loadProductInterests(null, null, null, product.code, NotificationType.BACK_IN_STOCK);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([product]) => !!product.stock && product.stock.stockLevelStatus === 'outOfStock')));
        this.hasProductInterests$ = this.interestsService
            .getProductInterests()
            .pipe(map((/**
         * @param {?} interests
         * @return {?}
         */
        interests => !!interests.results && interests.results.length === 1)));
        this.subscribeSuccess$ = this.interestsService.getAddProductInterestSuccess();
        this.isRemoveInterestLoading$ = this.interestsService.getRemoveProdutInterestLoading();
        this.prefsEnabled$ = this.notificationPrefService
            .getEnabledPreferences()
            .pipe(tap((/**
         * @param {?} prefs
         * @return {?}
         */
        prefs => (this.enabledPrefs = prefs))), map((/**
         * @param {?} prefs
         * @return {?}
         */
        prefs => prefs.length > 0)));
        this.subscriptions.add(this.interestsService.getAddProductInterestError().subscribe((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (error) {
                this.onInterestAddingError();
            }
        })));
        this.subscriptions.add(this.interestsService
            .getRemoveProdutInterestSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            if (success) {
                this.onInterestRemovingSuccess();
            }
        })));
    }
    /**
     * @return {?}
     */
    subscribe() {
        this.openDialog();
        this.interestsService.addProductInterest(this.productCode, NotificationType.BACK_IN_STOCK);
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        this.interestsService.removeProdutInterest({
            product: {
                code: this.productCode,
            },
            productInterestEntry: [
                {
                    interestType: NotificationType.BACK_IN_STOCK,
                },
            ],
        }, true);
    }
    /**
     * @private
     * @return {?}
     */
    onInterestRemovingSuccess() {
        this.subscriptions.add(this.translationService
            .translate('stockNotification.unsubscribeSuccess')
            .pipe(first())
            .subscribe((/**
         * @param {?} text
         * @return {?}
         */
        text => this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_INFO))));
        this.interestsService.resetRemoveInterestState();
    }
    /**
     * @private
     * @return {?}
     */
    onInterestAddingError() {
        this.modalService.dismissActiveModal();
        this.interestsService.resetAddInterestState();
    }
    /**
     * @private
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const modalInstance = this.modalService.open(StockNotificationDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        modalInstance.subscribeSuccess$ = this.subscribeSuccess$;
        modalInstance.enabledPrefs = this.enabledPrefs;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.interestsService.clearProductInterests();
        this.notificationPrefService.clearPreferences();
    }
}
StockNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-stock-notification',
                template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <label>{{ 'stockNotification.getNotified' | cxTranslate }}</label>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <label>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </label>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <label>{{ 'stockNotification.notified' | cxTranslate }}</label>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StockNotificationComponent.ctorParameters = () => [
    { type: AuthService },
    { type: CurrentProductService },
    { type: GlobalMessageService },
    { type: TranslationService },
    { type: UserInterestsService },
    { type: ModalService },
    { type: UserNotificationPreferenceService }
];
if (false) {
    /** @type {?} */
    StockNotificationComponent.prototype.hasProductInterests$;
    /** @type {?} */
    StockNotificationComponent.prototype.prefsEnabled$;
    /** @type {?} */
    StockNotificationComponent.prototype.outOfStock$;
    /** @type {?} */
    StockNotificationComponent.prototype.isRemoveInterestLoading$;
    /** @type {?} */
    StockNotificationComponent.prototype.anonymous;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.enabledPrefs;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.productCode;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.subscribeSuccess$;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.interestsService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.notificationPrefService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUNBQWlDLEVBQ2pDLFdBQVcsRUFDWCxxQkFBcUIsRUFFckIsZ0JBQWdCLEVBRWhCLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQU9uSCxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7Ozs7O0lBWXJDLFlBQ1UsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsZ0JBQXNDLEVBQ3RDLFlBQTBCLEVBQzFCLHVCQUEwRDtRQU4xRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixD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QUFJO1NBQ1gsQ0FDRixDQUFDLGlCQUFpQjtRQUNuQixhQUFhLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pELGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbEQsQ0FBQzs7O1lBN0lGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2d0VBQWtEO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQW5CQyxXQUFXO1lBV0oscUJBQXFCO1lBTjVCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFSbEIsb0JBQW9CO1lBY2IsWUFBWTtZQWJuQixpQ0FBaUM7Ozs7SUFzQmpDLDBEQUEwQzs7SUFDMUMsbURBQW1DOztJQUNuQyxpREFBaUM7O0lBQ2pDLDhEQUE4Qzs7SUFDOUMsK0NBQWlCOzs7OztJQUVqQixrREFBb0Q7Ozs7O0lBQ3BELGlEQUE0Qjs7Ozs7SUFDNUIsdURBQStDOzs7OztJQUMvQyxtREFBMkM7Ozs7O0lBR3pDLGlEQUFnQzs7Ozs7SUFDaEMsMkRBQW9EOzs7OztJQUNwRCwwREFBa0Q7Ozs7O0lBQ2xELHdEQUE4Qzs7Ozs7SUFDOUMsc0RBQThDOzs7OztJQUM5QyxrREFBa0M7Ozs7O0lBQ2xDLDZEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE5vdGlmaWNhdGlvblByZWZlcmVuY2UsXG4gIE5vdGlmaWNhdGlvblR5cGUsXG4gIFByb2R1Y3QsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cvc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9jay1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBoYXNQcm9kdWN0SW50ZXJlc3RzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJlZnNFbmFibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgb3V0T2ZTdG9jayQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGlzUmVtb3ZlSW50ZXJlc3RMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgYW5vbnltb3VzID0gdHJ1ZTtcblxuICBwcml2YXRlIGVuYWJsZWRQcmVmczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdID0gW107XG4gIHByaXZhdGUgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWJzY3JpYmVTdWNjZXNzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGludGVyZXN0c1NlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25QcmVmU2VydmljZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm91dE9mU3RvY2skID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCkucGlwZShmaWx0ZXIoQm9vbGVhbikpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICBdKS5waXBlKFxuICAgICAgdGFwKChbcHJvZHVjdCwgdXNlcklkXTogW1Byb2R1Y3QsIFN0cmluZ10pID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0Q29kZSA9IHByb2R1Y3QuY29kZTtcbiAgICAgICAgaWYgKHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZTZXJ2aWNlLmxvYWRQcmVmZXJlbmNlcygpO1xuICAgICAgICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb2R1Y3QuY29kZSxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblR5cGUuQkFDS19JTl9TVE9DS1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKFxuICAgICAgICAoW3Byb2R1Y3RdOiBbUHJvZHVjdCwgU3RyaW5nXSkgPT5cbiAgICAgICAgICAhIXByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnb3V0T2ZTdG9jaydcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5oYXNQcm9kdWN0SW50ZXJlc3RzJCA9IHRoaXMuaW50ZXJlc3RzU2VydmljZVxuICAgICAgLmdldFByb2R1Y3RJbnRlcmVzdHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChpbnRlcmVzdHMgPT4gISFpbnRlcmVzdHMucmVzdWx0cyAmJiBpbnRlcmVzdHMucmVzdWx0cy5sZW5ndGggPT09IDEpXG4gICAgICApO1xuICAgIHRoaXMuc3Vic2NyaWJlU3VjY2VzcyQgPSB0aGlzLmludGVyZXN0c1NlcnZpY2UuZ2V0QWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcygpO1xuICAgIHRoaXMuaXNSZW1vdmVJbnRlcmVzdExvYWRpbmckID0gdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLmdldFJlbW92ZVByb2R1dEludGVyZXN0TG9hZGluZygpO1xuICAgIHRoaXMucHJlZnNFbmFibGVkJCA9IHRoaXMubm90aWZpY2F0aW9uUHJlZlNlcnZpY2VcbiAgICAgIC5nZXRFbmFibGVkUHJlZmVyZW5jZXMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChwcmVmcyA9PiAodGhpcy5lbmFibGVkUHJlZnMgPSBwcmVmcykpLFxuICAgICAgICBtYXAocHJlZnMgPT4gcHJlZnMubGVuZ3RoID4gMClcbiAgICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLmdldEFkZFByb2R1Y3RJbnRlcmVzdEVycm9yKCkuc3Vic2NyaWJlKGVycm9yID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5vbkludGVyZXN0QWRkaW5nRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmludGVyZXN0c1NlcnZpY2VcbiAgICAgICAgLmdldFJlbW92ZVByb2R1dEludGVyZXN0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMub25JbnRlcmVzdFJlbW92aW5nU3VjY2VzcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc3Vic2NyaWJlKCkge1xuICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5hZGRQcm9kdWN0SW50ZXJlc3QoXG4gICAgICB0aGlzLnByb2R1Y3RDb2RlLFxuICAgICAgTm90aWZpY2F0aW9uVHlwZS5CQUNLX0lOX1NUT0NLXG4gICAgKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5yZW1vdmVQcm9kdXRJbnRlcmVzdChcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdDoge1xuICAgICAgICAgIGNvZGU6IHRoaXMucHJvZHVjdENvZGUsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3RJbnRlcmVzdEVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW50ZXJlc3RUeXBlOiBOb3RpZmljYXRpb25UeXBlLkJBQ0tfSU5fU1RPQ0ssXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnRlcmVzdFJlbW92aW5nU3VjY2VzcygpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgICAgLnRyYW5zbGF0ZSgnc3RvY2tOb3RpZmljYXRpb24udW5zdWJzY3JpYmVTdWNjZXNzJylcbiAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgLnN1YnNjcmliZSh0ZXh0ID0+XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQodGV4dCwgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfSU5GTylcbiAgICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLnJlc2V0UmVtb3ZlSW50ZXJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkludGVyZXN0QWRkaW5nRXJyb3IoKSB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuZGlzbWlzc0FjdGl2ZU1vZGFsKCk7XG4gICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLnJlc2V0QWRkSW50ZXJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IG1vZGFsSW5zdGFuY2UgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFxuICAgICAgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnQsXG4gICAgICB7XG4gICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICBzaXplOiAnbGcnLFxuICAgICAgfVxuICAgICkuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgbW9kYWxJbnN0YW5jZS5zdWJzY3JpYmVTdWNjZXNzJCA9IHRoaXMuc3Vic2NyaWJlU3VjY2VzcyQ7XG4gICAgbW9kYWxJbnN0YW5jZS5lbmFibGVkUHJlZnMgPSB0aGlzLmVuYWJsZWRQcmVmcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5jbGVhclByb2R1Y3RJbnRlcmVzdHMoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZTZXJ2aWNlLmNsZWFyUHJlZmVyZW5jZXMoKTtcbiAgfVxufVxuIl19