import { CanActivate } from '@angular/router';
import { CartService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartNotEmptyGuard implements CanActivate {
    private cartService;
    private routingService;
    constructor(cartService: CartService, routingService: RoutingService);
    canActivate(): Observable<boolean>;
    private isEmpty;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartNotEmptyGuard>;
}

//# sourceMappingURL=cart-not-empty.guard.d.ts.map