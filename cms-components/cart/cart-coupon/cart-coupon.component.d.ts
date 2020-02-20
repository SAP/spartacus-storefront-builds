import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, Cart, CartService, CartVoucherService, CustomerCoupon, CustomerCouponService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartCouponComponent implements OnInit, OnDestroy {
    private cartService;
    private authService;
    private cartVoucherService;
    private formBuilder;
    protected customerCouponService?: CustomerCouponService;
    protected featureConfig?: FeatureConfigService;
    MAX_CUSTOMER_COUPON_PAGE: number;
    form: FormGroup;
    cartIsLoading$: Observable<boolean>;
    submitDisabled$: Observable<boolean>;
    cart$: Observable<Cart>;
    cartId: string;
    applicableCoupons: CustomerCoupon[];
    filteredCoupons: CustomerCoupon[];
    private ignoreCloseEvent;
    private subscription;
    couponBoxIsActive: boolean;
    constructor(cartService: CartService, authService: AuthService, cartVoucherService: CartVoucherService, formBuilder: FormBuilder, customerCouponService: CustomerCouponService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add customerCouponService,featureConfig for customer coupon feature.
     * Remove issue: #5971
     */
    constructor(cartService: CartService, authService: AuthService, cartVoucherService: CartVoucherService, formBuilder: FormBuilder);
    ngOnInit(): void;
    protected onError(error: boolean): void;
    onSuccess(success: boolean): void;
    protected getApplicableCustomerCoupons(cart: Cart, coupons: CustomerCoupon[]): void;
    applyVoucher(): void;
    applyCustomerCoupon(couponId: string): void;
    filter(query: string): void;
    open(): void;
    close(event: UIEvent): void;
    disableClose(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartCouponComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartCouponComponent, "cx-cart-coupon", never, {}, {}, never>;
}

//# sourceMappingURL=cart-coupon.component.d.ts.map