import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Address, CheckoutDeliveryService, UserAddressService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let AddressBookComponentService = class AddressBookComponentService {
    constructor(userAddressService, checkoutDeliveryService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
    }
    getAddresses() {
        return this.userAddressService.getAddresses();
    }
    getAddressesStateLoading() {
        return this.userAddressService.getAddressesLoading();
    }
    loadAddresses() {
        this.userAddressService.loadAddresses();
    }
    addUserAddress(address) {
        this.userAddressService.addUserAddress(address);
    }
    updateUserAddress(addressId, address) {
        this.userAddressService.updateUserAddress(addressId, address);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    }
};
AddressBookComponentService.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService }
];
AddressBookComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AddressBookComponentService_Factory() { return new AddressBookComponentService(i0.ɵɵinject(i1.UserAddressService), i0.ɵɵinject(i1.CheckoutDeliveryService)); }, token: AddressBookComponentService, providedIn: "root" });
AddressBookComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AddressBookComponentService);
export { AddressBookComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7OztBQU16QixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUN0QyxZQUNZLGtCQUFzQyxFQUN0Qyx1QkFBZ0Q7UUFEaEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3pELENBQUM7SUFFSixZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBaUIsRUFBRSxPQUFnQjtRQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQzlELENBQUM7Q0FDRixDQUFBOztZQXhCaUMsa0JBQWtCO1lBQ2IsdUJBQXVCOzs7QUFIakQsMkJBQTJCO0lBSHZDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVywyQkFBMkIsQ0EwQnZDO1NBMUJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZVxuICApIHt9XG5cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gIH1cblxuICBsb2FkQWRkcmVzc2VzKCkge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgfVxuXG4gIGFkZFVzZXJBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5hZGRVc2VyQWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UudXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkLCBhZGRyZXNzKTtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTtcbiAgfVxufVxuIl19