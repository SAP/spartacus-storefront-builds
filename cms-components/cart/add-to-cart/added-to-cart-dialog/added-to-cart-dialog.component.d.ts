import { ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiveCartService, Cart, OrderEntry, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export declare class AddedToCartDialogComponent implements OnInit {
    protected modalService: ModalService;
    protected cartService: ActiveCartService;
    protected promotionService: PromotionService;
    iconTypes: typeof ICON_TYPE;
    entry$: Observable<OrderEntry>;
    cart$: Observable<Cart>;
    loaded$: Observable<boolean>;
    addedEntryWasMerged$: Observable<boolean>;
    /**
     * @deprecated since 3.0, set numberOfEntriesBeforeAdd instead
     */
    increment: boolean;
    numberOfEntriesBeforeAdd: number;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    quantity: number;
    modalIsOpen: boolean;
    dialog: ElementRef;
    form: FormGroup;
    private quantityControl$;
    constructor(modalService: ModalService, cartService: ActiveCartService, promotionService: PromotionService);
    /**
     * Returns an observable formControl with the quantity of the cartEntry,
     * but also updates the entry in case of a changed value.
     * The quantity can be set to zero in order to remove the entry.
     */
    getQuantityControl(): Observable<FormControl>;
    ngOnInit(): void;
    private getFormControl;
    dismissModal(reason?: any): void;
}
