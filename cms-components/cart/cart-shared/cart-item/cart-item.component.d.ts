import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeatureConfigService, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import * as ɵngcc0 from '@angular/core';
export interface Item {
    product?: any;
    quantity?: any;
    basePrice?: any;
    totalPrice?: any;
    updateable?: boolean;
}
export interface CartItemComponentOptions {
    isSaveForLater?: boolean;
    optionalBtn?: any;
}
export declare class CartItemComponent implements OnInit {
    protected promotionService: PromotionService;
    private featureConfig?;
    compact: boolean;
    item: Item;
    potentialProductPromotions: any[];
    readonly: boolean;
    quantityControl: FormControl;
    view: EventEmitter<any>;
    promotionLocation: PromotionLocation;
    options: CartItemComponentOptions;
    appliedProductPromotions$: Observable<PromotionResult[]>;
    constructor(promotionService: PromotionService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add featureConfig for save for later.
     * Remove issue: #5958
     */
    constructor(promotionService: PromotionService);
    ngOnInit(): void;
    isSaveForLaterEnabled(): boolean;
    isProductOutOfStock(product: any): boolean;
    removeItem(): void;
    viewItem(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemComponent, "cx-cart-item", never, {
    "compact": "compact";
    "readonly": "readonly";
    "promotionLocation": "promotionLocation";
    "options": "options";
    "item": "item";
    "potentialProductPromotions": "potentialProductPromotions";
    "quantityControl": "quantityControl";
}, {
    "view": "view";
}, never>;
}

//# sourceMappingURL=cart-item.component.d.ts.map