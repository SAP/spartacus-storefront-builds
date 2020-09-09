import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthRedirectService, AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { CheckoutConfigService } from '../../checkout/services/checkout-config.service';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    protected auth: AuthService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected winRef: WindowRef;
    protected activatedRoute: ActivatedRoute;
    protected checkoutConfigService: CheckoutConfigService;
    sub: Subscription;
    loginForm: FormGroup;
    loginAsGuest: boolean;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService, winRef: WindowRef, activatedRoute: ActivatedRoute, checkoutConfigService: CheckoutConfigService);
    ngOnInit(): void;
    submitForm(): void;
    ngOnDestroy(): void;
    protected loginUser(): void;
}
