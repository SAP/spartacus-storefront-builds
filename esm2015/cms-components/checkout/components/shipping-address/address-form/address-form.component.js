/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckoutDeliveryService, GlobalMessageService, GlobalMessageType, UserAddressService, UserService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ModalService, } from '../../../../../shared/components/modal/index';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
import { sortTitles } from '../../../../../shared/utils/forms/title-utils';
export class AddressFormComponent {
    /**
     * @param {?} fb
     * @param {?} checkoutDeliveryService
     * @param {?} userService
     * @param {?} userAddressService
     * @param {?} globalMessageService
     * @param {?} modalService
     */
    constructor(fb, checkoutDeliveryService, userService, userAddressService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userService = userService;
        this.userAddressService = userAddressService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
        this.selectedCountry$ = new BehaviorSubject('');
        this.showCancelBtn = true;
        this.submitAddress = new EventEmitter();
        this.backToAddress = new EventEmitter();
        this.address = this.fb.group({
            defaultAddress: [false],
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Fetching countries
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap((/**
         * @param {?} countries
         * @return {?}
         */
        countries => {
            if (Object.keys(countries).length === 0) {
                this.userAddressService.loadDeliveryCountries();
            }
        })));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        })), map((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            titles.sort(sortTitles);
            /** @type {?} */
            const noneTitle = { code: '', name: 'Title' };
            return [noneTitle, ...titles];
        })));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap((/**
         * @param {?} country
         * @return {?}
         */
        country => this.userAddressService.getRegions(country))), tap((/**
         * @param {?} regions
         * @return {?}
         */
        regions => {
            /** @type {?} */
            const regionControl = this.address.get('region.isocode');
            if (regions && regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        })));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        (results) => {
            if (results === 'FAIL') {
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.submitAddress.emit(this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => error.subject === 'titleCode'))) {
                    this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        }));
        if (this.addressData && Object.keys(this.addressData).length !== 0) {
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.address['controls'].titleCode.setValue(title.code);
    }
    /**
     * @param {?} country
     * @return {?}
     */
    countrySelected(country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    /**
     * @param {?} region
     * @return {?}
     */
    regionSelected(region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    }
    /**
     * @return {?}
     */
    toggleDefaultAddress() {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    }
    /**
     * @return {?}
     */
    back() {
        this.backToAddress.emit();
    }
    /**
     * @return {?}
     */
    verifyAddress() {
        if (this.address.controls['region'].value.isocode) {
            this.regionsSub = this.regions$.pipe(take(1)).subscribe((/**
             * @param {?} regions
             * @return {?}
             */
            regions => {
                /** @type {?} */
                const obj = regions.find((/**
                 * @param {?} region
                 * @return {?}
                 */
                region => region.isocode === this.address.controls['region'].value.isocode));
                Object.assign(this.address.value.region, {
                    isocodeShort: obj.isocodeShort,
                });
            }));
        }
        if (this.address.dirty) {
            this.checkoutDeliveryService.verifyAddress(this.address.value);
        }
        else {
            // address form value not changed
            // ignore duplicate address
            this.submitAddress.emit(undefined);
        }
    }
    /**
     * @param {?} results
     * @return {?}
     */
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then((/**
             * @param {?} address
             * @return {?}
             */
            address => {
                this.checkoutDeliveryService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: this.address.value.titleCode,
                        phone: this.address.value.phone,
                        selected: true,
                    }, address);
                    this.submitAddress.emit(address);
                }
                this.suggestedAddressModalRef = null;
            }))
                .catch((/**
             * @return {?}
             */
            () => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutDeliveryService.clearAddressVerificationResults();
                /** @type {?} */
                const address = Object.assign({
                    selected: true,
                }, this.address.value);
                this.submitAddress.emit(address);
                this.suggestedAddressModalRef = null;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutDeliveryService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
        if (this.regionsSub) {
            this.regionsSub.unsubscribe();
        }
    }
}
AddressFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-form',
                template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"regions$ | async as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                  (change)=\"regionSelected($event)\"\n                >\n                </ng-select>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AddressFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: UserService },
    { type: UserAddressService },
    { type: GlobalMessageService },
    { type: ModalService }
];
AddressFormComponent.propDecorators = {
    addressData: [{ type: Input }],
    actionBtnLabel: [{ type: Input }],
    cancelBtnLabel: [{ type: Input }],
    setAsDefaultField: [{ type: Input }],
    showTitleCode: [{ type: Input }],
    showCancelBtn: [{ type: Input }],
    submitAddress: [{ type: Output }],
    backToAddress: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AddressFormComponent.prototype.countries$;
    /** @type {?} */
    AddressFormComponent.prototype.titles$;
    /** @type {?} */
    AddressFormComponent.prototype.regions$;
    /** @type {?} */
    AddressFormComponent.prototype.selectedCountry$;
    /** @type {?} */
    AddressFormComponent.prototype.addressData;
    /** @type {?} */
    AddressFormComponent.prototype.actionBtnLabel;
    /** @type {?} */
    AddressFormComponent.prototype.cancelBtnLabel;
    /** @type {?} */
    AddressFormComponent.prototype.setAsDefaultField;
    /** @type {?} */
    AddressFormComponent.prototype.showTitleCode;
    /** @type {?} */
    AddressFormComponent.prototype.showCancelBtn;
    /** @type {?} */
    AddressFormComponent.prototype.submitAddress;
    /** @type {?} */
    AddressFormComponent.prototype.backToAddress;
    /** @type {?} */
    AddressFormComponent.prototype.addressVerifySub;
    /** @type {?} */
    AddressFormComponent.prototype.regionsSub;
    /** @type {?} */
    AddressFormComponent.prototype.suggestedAddressModalRef;
    /** @type {?} */
    AddressFormComponent.prototype.address;
    /**
     * @type {?}
     * @private
     */
    AddressFormComponent.prototype.fb;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    AddressFormComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBR0wsdUJBQXVCLEVBRXZCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFHakIsa0JBQWtCLEVBQ2xCLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBRUwsWUFBWSxHQUNiLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDcEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBTzNFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7OztJQW9EL0IsWUFDVSxFQUFlLEVBQ2IsdUJBQWdELEVBQ2hELFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDNUMsWUFBMEI7UUFMMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNiLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIs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RTNCLDZDQUN1Qjs7SUFFdkIsNkNBQ3FCOztJQUVyQiw2Q0FDd0M7O0lBRXhDLDZDQUN3Qzs7SUFFeEMsZ0RBQStCOztJQUMvQiwwQ0FBeUI7O0lBQ3pCLHdEQUFtQzs7SUFFbkMsdUNBZ0JHOzs7OztJQUdELGtDQUF1Qjs7Ozs7SUFDdkIsdURBQTBEOzs7OztJQUMxRCwyQ0FBa0M7Ozs7O0lBQ2xDLGtEQUFnRDs7Ozs7SUFDaEQsb0RBQW9EOzs7OztJQUNwRCw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIENvdW50cnksXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUmVnaW9uLFxuICBUaXRsZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTW9kYWxSZWYsXG4gIE1vZGFsU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IHNvcnRUaXRsZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvdGl0bGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gIHJlZ2lvbnMkOiBPYnNlcnZhYmxlPFJlZ2lvbltdPjtcbiAgc2VsZWN0ZWRDb3VudHJ5JDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuXG4gIEBJbnB1dCgpXG4gIGFkZHJlc3NEYXRhOiBBZGRyZXNzO1xuXG4gIEBJbnB1dCgpXG4gIGFjdGlvbkJ0bkxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY2FuY2VsQnRuTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXRBc0RlZmF1bHRGaWVsZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzaG93VGl0bGVDb2RlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dDYW5jZWxCdG4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRBZGRyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGJhY2tUb0FkZHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBhZGRyZXNzVmVyaWZ5U3ViOiBTdWJzY3JpcHRpb247XG4gIHJlZ2lvbnNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcblxuICBhZGRyZXNzOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWZhdWx0QWRkcmVzczogW2ZhbHNlXSxcbiAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUxOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUyOiBbJyddLFxuICAgIHRvd246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgcmVnaW9uOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHBob25lOiAnJyxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEZldGNoaW5nIGNvdW50cmllc1xuICAgIHRoaXMuY291bnRyaWVzJCA9IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldERlbGl2ZXJ5Q291bnRyaWVzKCkucGlwZShcbiAgICAgIHRhcChjb3VudHJpZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY291bnRyaWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkRGVsaXZlcnlDb3VudHJpZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gRmV0Y2hpbmcgdGl0bGVzXG4gICAgdGhpcy50aXRsZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgdGFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aXRsZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFRpdGxlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCh0aXRsZXMgPT4ge1xuICAgICAgICB0aXRsZXMuc29ydChzb3J0VGl0bGVzKTtcbiAgICAgICAgY29uc3Qgbm9uZVRpdGxlID0geyBjb2RlOiAnJywgbmFtZTogJ1RpdGxlJyB9O1xuICAgICAgICByZXR1cm4gW25vbmVUaXRsZSwgLi4udGl0bGVzXTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIEZldGNoaW5nIHJlZ2lvbnNcbiAgICB0aGlzLnJlZ2lvbnMkID0gdGhpcy5zZWxlY3RlZENvdW50cnkkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY291bnRyeSA9PiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRSZWdpb25zKGNvdW50cnkpKSxcbiAgICAgIHRhcChyZWdpb25zID0+IHtcbiAgICAgICAgY29uc3QgcmVnaW9uQ29udHJvbCA9IHRoaXMuYWRkcmVzcy5nZXQoJ3JlZ2lvbi5pc29jb2RlJyk7XG4gICAgICAgIGlmIChyZWdpb25zICYmIHJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnaW9uQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHZlcmlmeSB0aGUgbmV3IGFkZGVkIGFkZHJlc3NcbiAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdBQ0NFUFQnKSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQodGhpcy5hZGRyZXNzLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnUkVKRUNUJykge1xuICAgICAgICAgIC8vIFRPRE86IFdvcmthcm91bmQ6IGFsbG93IHNlcnZlciBmb3IgZGVjaWRlIGlzIHRpdGxlQ29kZSBtYW5kYXRvcnkgKGlmIHllcywgcHJvdmlkZSBwZXJzb25hbGl6ZWQgbWVzc2FnZSlcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXN1bHRzLmVycm9ycy5lcnJvcnMuc29tZShlcnJvciA9PiBlcnJvci5zdWJqZWN0ID09PSAndGl0bGVDb2RlJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICB7IGtleTogJ2FkZHJlc3NGb3JtLnRpdGxlUmVxdWlyZWQnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdhZGRyZXNzRm9ybS5pbnZhbGlkQWRkcmVzcycgfSxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRVZJRVcnKSB7XG4gICAgICAgICAgdGhpcy5vcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzRGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLmFkZHJlc3NEYXRhKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuYWRkcmVzcy5wYXRjaFZhbHVlKHRoaXMuYWRkcmVzc0RhdGEpO1xuXG4gICAgICB0aGlzLmNvdW50cnlTZWxlY3RlZCh0aGlzLmFkZHJlc3NEYXRhLmNvdW50cnkpO1xuICAgICAgaWYgKHRoaXMuYWRkcmVzc0RhdGEucmVnaW9uKSB7XG4gICAgICAgIHRoaXMucmVnaW9uU2VsZWN0ZWQodGhpcy5hZGRyZXNzRGF0YS5yZWdpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLnRpdGxlQ29kZS5zZXRWYWx1ZSh0aXRsZS5jb2RlKTtcbiAgfVxuXG4gIGNvdW50cnlTZWxlY3RlZChjb3VudHJ5OiBDb3VudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLmNvdW50cnlbJ2NvbnRyb2xzJ10uaXNvY29kZS5zZXRWYWx1ZShcbiAgICAgIGNvdW50cnkuaXNvY29kZVxuICAgICk7XG4gICAgdGhpcy5zZWxlY3RlZENvdW50cnkkLm5leHQoY291bnRyeS5pc29jb2RlKTtcbiAgfVxuXG4gIHJlZ2lvblNlbGVjdGVkKHJlZ2lvbjogUmVnaW9uKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLnJlZ2lvblsnY29udHJvbHMnXS5pc29jb2RlLnNldFZhbHVlKFxuICAgICAgcmVnaW9uLmlzb2NvZGVcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlRGVmYXVsdEFkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLmRlZmF1bHRBZGRyZXNzLnNldFZhbHVlKFxuICAgICAgdGhpcy5hZGRyZXNzLnZhbHVlLmRlZmF1bHRBZGRyZXNzXG4gICAgKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5iYWNrVG9BZGRyZXNzLmVtaXQoKTtcbiAgfVxuXG4gIHZlcmlmeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWRkcmVzcy5jb250cm9sc1sncmVnaW9uJ10udmFsdWUuaXNvY29kZSkge1xuICAgICAgdGhpcy5yZWdpb25zU3ViID0gdGhpcy5yZWdpb25zJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShyZWdpb25zID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gcmVnaW9ucy5maW5kKFxuICAgICAgICAgIHJlZ2lvbiA9PlxuICAgICAgICAgICAgcmVnaW9uLmlzb2NvZGUgPT09IHRoaXMuYWRkcmVzcy5jb250cm9sc1sncmVnaW9uJ10udmFsdWUuaXNvY29kZVxuICAgICAgICApO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuYWRkcmVzcy52YWx1ZS5yZWdpb24sIHtcbiAgICAgICAgICBpc29jb2RlU2hvcnQ6IG9iai5pc29jb2RlU2hvcnQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWRkcmVzcy5kaXJ0eSkge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS52ZXJpZnlBZGRyZXNzKHRoaXMuYWRkcmVzcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFkZHJlc3MgZm9ybSB2YWx1ZSBub3QgY2hhbmdlZFxuICAgICAgLy8gaWdub3JlIGR1cGxpY2F0ZSBhZGRyZXNzXG4gICAgICB0aGlzLnN1Ym1pdEFkZHJlc3MuZW1pdCh1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZikge1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFxuICAgICAgICBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICB7IGNlbnRlcmVkOiB0cnVlLCBzaXplOiAnbGcnIH1cbiAgICAgICk7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5lbnRlcmVkQWRkcmVzcyA9IHRoaXMuYWRkcmVzcy52YWx1ZTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnN1Z2dlc3RlZEFkZHJlc3NlcyA9XG4gICAgICAgIHJlc3VsdHMuc3VnZ2VzdGVkQWRkcmVzc2VzO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYucmVzdWx0XG4gICAgICAgIC50aGVuKGFkZHJlc3MgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIGlmIChhZGRyZXNzKSB7XG4gICAgICAgICAgICBhZGRyZXNzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlQ29kZTogdGhpcy5hZGRyZXNzLnZhbHVlLnRpdGxlQ29kZSxcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5hZGRyZXNzLnZhbHVlLnBob25lLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQoYWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyB0aGlzICBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBtb2RhbCBpcyBjbG9zZWQgd2l0aCBFc2Mga2V5IG9yIGNsaWNraW5nIGJhY2tkcm9wXG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgY29uc3QgYWRkcmVzcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzcy52YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQoYWRkcmVzcyk7XG4gICAgICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcblxuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlZ2lvbnNTdWIpIHtcbiAgICAgIHRoaXMucmVnaW9uc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19