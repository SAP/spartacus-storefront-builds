import { OnInit } from '@angular/core';
import { ActiveCartService, Cart, CmsParagraphComponent, CmsService, OrderEntry, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class SaveForLaterComponent implements OnInit {
    protected cmsService: CmsService;
    protected cartService: ActiveCartService;
    protected selectiveCartService: SelectiveCartService;
    saveForLater$: Observable<Cart>;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    data$: Observable<CmsParagraphComponent>;
    isCartEmpty$: Observable<boolean>;
    constructor(cmsService: CmsService, cartService: ActiveCartService, selectiveCartService: SelectiveCartService);
    ngOnInit(): void;
    moveToCart(item: OrderEntry): void;
}
