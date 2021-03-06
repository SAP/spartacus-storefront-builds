import { Address, CostCenter, DeliveryMode, PaymentDetails, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../card/card.component';
export declare class OrderOverviewComponent {
    protected translation: TranslationService;
    order: any;
    set setOrder(order: any);
    constructor(translation: TranslationService);
    getReplenishmentCodeCardContent(orderCode: string): Observable<Card>;
    getReplenishmentActiveCardContent(active: boolean): Observable<Card>;
    getReplenishmentStartOnCardContent(isoDate: string): Observable<Card>;
    getReplenishmentFrequencyCardContent(frequency: string): Observable<Card>;
    getReplenishmentNextDateCardContent(isoDate: string): Observable<Card>;
    getOrderCodeCardContent(orderCode: string): Observable<Card>;
    getOrderCurrentDateCardContent(isoDate?: string): Observable<Card>;
    getOrderStatusCardContent(status: string): Observable<Card>;
    getPurchaseOrderNumber(poNumber: string): Observable<Card>;
    getMethodOfPaymentCardContent(hasPaymentInfo: PaymentDetails): Observable<Card>;
    getCostCenterCardContent(costCenter: CostCenter): Observable<Card>;
    getAddressCardContent(deliveryAddress: Address): Observable<Card>;
    getDeliveryModeCardContent(deliveryMode: DeliveryMode): Observable<Card>;
    getPaymentInfoCardContent(payment: PaymentDetails): Observable<Card>;
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    private getDate;
}
