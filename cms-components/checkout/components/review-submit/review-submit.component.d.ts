import { OnInit } from '@angular/core';
import { Address, Cart, ActiveCartService, CheckoutDeliveryService, CheckoutPaymentService, DeliveryMode, OrderEntry, PaymentDetails, TranslationService, UserAddressService, PromotionResult, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutStepType } from '../../model/index';
import { CheckoutConfigService } from '../../services/index';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReviewSubmitComponent implements OnInit {
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected userAddressService: UserAddressService;
    protected activeCartService: ActiveCartService;
    protected translation: TranslationService;
    protected checkoutConfigService: CheckoutConfigService;
    protected promotionService: PromotionService;
    checkoutStepType: typeof CheckoutStepType;
    entries$: Observable<OrderEntry[]>;
    cart$: Observable<Cart>;
    deliveryMode$: Observable<DeliveryMode>;
    countryName$: Observable<string>;
    deliveryAddress$: Observable<Address>;
    paymentDetails$: Observable<PaymentDetails>;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    constructor(checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, userAddressService: UserAddressService, activeCartService: ActiveCartService, translation: TranslationService, checkoutConfigService: CheckoutConfigService, promotionService: PromotionService);
    ngOnInit(): void;
    getShippingAddressCard(deliveryAddress: Address, countryName: string): Observable<Card>;
    getDeliveryModeCard(deliveryMode: DeliveryMode): Observable<Card>;
    getPaymentMethodCard(paymentDetails: PaymentDetails): Observable<Card>;
    getCheckoutStepUrl(stepType: CheckoutStepType): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReviewSubmitComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReviewSubmitComponent, "cx-review-submit", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgQ2FydCwgQWN0aXZlQ2FydFNlcnZpY2UsIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBEZWxpdmVyeU1vZGUsIE9yZGVyRW50cnksIFBheW1lbnREZXRhaWxzLCBUcmFuc2xhdGlvblNlcnZpY2UsIFVzZXJBZGRyZXNzU2VydmljZSwgUHJvbW90aW9uUmVzdWx0LCBQcm9tb3Rpb25Mb2NhdGlvbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmV2aWV3U3VibWl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZTtcbiAgICBjaGVja291dFN0ZXBUeXBlOiB0eXBlb2YgQ2hlY2tvdXRTdGVwVHlwZTtcbiAgICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGRlbGl2ZXJ5TW9kZSQ6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcbiAgICBjb3VudHJ5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBkZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICAgIHBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz47XG4gICAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSwgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSwgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgZ2V0U2hpcHBpbmdBZGRyZXNzQ2FyZChkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MsIGNvdW50cnlOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcmQ+O1xuICAgIGdldERlbGl2ZXJ5TW9kZUNhcmQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+O1xuICAgIGdldFBheW1lbnRNZXRob2RDYXJkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD47XG4gICAgZ2V0Q2hlY2tvdXRTdGVwVXJsKHN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogc3RyaW5nO1xufVxuIl19