import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Address, CheckoutDeliveryService, UserAddressService, } from '@spartacus/core';
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
AddressBookComponentService = __decorate([
    Injectable()
], AddressBookComponentService);
export { AddressBookComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFJekIsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFDdEMsWUFDWSxrQkFBc0MsRUFDdEMsdUJBQWdEO1FBRGhELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUN6RCxDQUFDO0lBRUosWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQWdCO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsT0FBZ0I7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0NBQ0YsQ0FBQTs7WUF4QmlDLGtCQUFrQjtZQUNiLHVCQUF1Qjs7QUFIakQsMkJBQTJCO0lBRHZDLFVBQVUsRUFBRTtHQUNBLDJCQUEyQixDQTBCdkM7U0ExQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICkge31cblxuICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG5cbiAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgdXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQsIGFkZHJlc3MpO1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpO1xuICB9XG59XG4iXX0=