import { ActiveCartService, CheckoutService, OrderEntry, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class PromotionService {
    protected orderDetailsService: OrderDetailsService;
    protected checkoutService: CheckoutService;
    protected activeCartService: ActiveCartService;
    constructor(orderDetailsService: OrderDetailsService, checkoutService: CheckoutService, activeCartService: ActiveCartService);
    getOrderPromotions(promotionLocation: PromotionLocation): Observable<PromotionResult[]>;
    getOrderPromotionsFromCart(): Observable<PromotionResult[]>;
    private getOrderPromotionsFromCartHelper;
    getOrderPromotionsFromCheckout(): Observable<PromotionResult[]>;
    getOrderPromotionsFromOrder(): Observable<PromotionResult[]>;
    private getOrderPromotionsFromOrderHelper;
    getProductPromotionForEntry(item: OrderEntry, promotionLocation: PromotionLocation): Observable<PromotionResult[]>;
    private getProductPromotion;
    private isConsumedByEntry;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PromotionService, never>;
}

//# sourceMappingURL=promotion.service.d.ts.map