import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
import * as i0 from "@angular/core";
import * as i1 from "../pwa.module-config";
import * as i2 from "@spartacus/core";
var AddToHomeScreenService = /** @class */ (function () {
    function AddToHomeScreenService(config, globalMessageService, winRef) {
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.winRef = winRef;
        this.canPrompt = new BehaviorSubject(false);
        this.canPrompt$ = this.canPrompt.asObservable();
        if (this.config.pwa.addToHomeScreen) {
            this.init();
        }
    }
    AddToHomeScreenService.prototype.init = function () {
        var _this = this;
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', function (event) {
                event.preventDefault();
                _this.deferredEvent = event;
                _this.enableAddToHomeScreen();
            });
            this.winRef.nativeWindow.addEventListener('appinstalled', function () {
                _this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                _this.disableAddToHomeScreen();
                _this.deferredEvent = null;
            });
        }
    };
    AddToHomeScreenService.prototype.enableAddToHomeScreen = function () {
        this.canPrompt.next(true);
    };
    AddToHomeScreenService.prototype.disableAddToHomeScreen = function () {
        this.canPrompt.next(false);
    };
    AddToHomeScreenService.prototype.firePrompt = function () {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    };
    AddToHomeScreenService.ctorParameters = function () { return [
        { type: PWAModuleConfig },
        { type: GlobalMessageService },
        { type: WindowRef }
    ]; };
    AddToHomeScreenService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AddToHomeScreenService_Factory() { return new AddToHomeScreenService(i0.ɵɵinject(i1.PWAModuleConfig), i0.ɵɵinject(i2.GlobalMessageService), i0.ɵɵinject(i2.WindowRef)); }, token: AddToHomeScreenService, providedIn: "root" });
    AddToHomeScreenService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AddToHomeScreenService);
    return AddToHomeScreenService;
}());
export { AddToHomeScreenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUt2RDtJQU9FLGdDQUNVLE1BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxNQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQbkIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXhELGVBQVUsR0FBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU85RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxxQ0FBSSxHQUFKO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ3ZDLHFCQUFxQixFQUNyQixVQUFDLEtBQUs7Z0JBQ0osS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUNGLENBQUM7WUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hELEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEVBQ2hDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO2dCQUVGLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHNEQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBNUNpQixlQUFlO2dCQUNELG9CQUFvQjtnQkFDbEMsU0FBUzs7O0lBVmhCLHNCQUFzQjtRQUhsQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csc0JBQXNCLENBcURsQztpQ0FqRUQ7Q0FpRUMsQUFyREQsSUFxREM7U0FyRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL3B3YS5tb2R1bGUtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvSG9tZVNjcmVlblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmVycmVkRXZlbnQ6IGFueTtcblxuICBwcml2YXRlIGNhblByb21wdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNhblByb21wdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNhblByb21wdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogUFdBTW9kdWxlQ29uZmlnLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnB3YS5hZGRUb0hvbWVTY3JlZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdiZWZvcmVpbnN0YWxscHJvbXB0JyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmRlZmVycmVkRXZlbnQgPSBldmVudDtcbiAgICAgICAgICB0aGlzLmVuYWJsZUFkZFRvSG9tZVNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYXBwaW5zdGFsbGVkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7IGtleTogJ3B3YS5hZGRlZFRvSG9tZVNjcmVlbicgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRpc2FibGVBZGRUb0hvbWVTY3JlZW4oKTtcbiAgICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZUFkZFRvSG9tZVNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNhblByb21wdC5uZXh0KHRydWUpO1xuICB9XG5cbiAgZGlzYWJsZUFkZFRvSG9tZVNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNhblByb21wdC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIGZpcmVQcm9tcHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVmZXJyZWRFdmVudCkge1xuICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50LnByb21wdCgpO1xuICAgIH1cbiAgfVxufVxuIl19