import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService, Order } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationThankYouMessageComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    order$: Observable<Order>;
    isGuestCustomer: boolean;
    orderGuid: string;
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationThankYouMessageComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationThankYouMessageComponent, "cx-order-confirmation-thank-you-message", never, {}, {}, never>;
}

//# sourceMappingURL=order-confirmation-thank-you-message.component.d.ts.map