import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart, CartService, CartVoucherService, AuthService, CustomerCouponService, CustomerCoupon, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
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
}
