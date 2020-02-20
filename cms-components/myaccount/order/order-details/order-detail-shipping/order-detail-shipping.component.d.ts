import { OnInit } from '@angular/core';
import { Address, DeliveryMode, Order, PaymentDetails, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailShippingComponent implements OnInit {
    private orderDetailsService;
    private translation;
    constructor(orderDetailsService: OrderDetailsService, translation: TranslationService);
    order$: Observable<Order>;
    ngOnInit(): void;
    getAddressCardContent(address: Address): Observable<Card>;
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    getPaymentCardContent(payment: PaymentDetails): Observable<Card>;
    getShippingMethodCardContent(shipping: DeliveryMode): Observable<Card>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailShippingComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailShippingComponent, "cx-order-details-shipping", never, {}, {}, never>;
}

//# sourceMappingURL=order-detail-shipping.component.d.ts.map