import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService, Order, PromotionResult, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationItemsComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected promotionService?: PromotionService;
    promotionLocation: PromotionLocation;
    order$: Observable<Order>;
    orderPromotions$: Observable<PromotionResult[]>;
    constructor(checkoutService: CheckoutService, promotionService: PromotionService);
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationItemsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationItemsComponent, "cx-order-confirmation-items", never, {}, {}, never>;
}

//# sourceMappingURL=order-confirmation-items.component.d.ts.map