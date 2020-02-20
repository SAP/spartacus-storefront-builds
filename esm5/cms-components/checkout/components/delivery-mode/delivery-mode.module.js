import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { DeliveryModeComponent } from './delivery-mode.component';
var DeliveryModeModule = /** @class */ (function () {
    function DeliveryModeModule() {
    }
    DeliveryModeModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                I18nModule,
                SpinnerModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutDeliveryMode: {
                            component: DeliveryModeComponent,
                            guards: [
                                CheckoutAuthGuard,
                                CartNotEmptyGuard,
                                ShippingAddressSetGuard,
                            ],
                        },
                    },
                }),
            ],
            declarations: [DeliveryModeComponent],
            entryComponents: [DeliveryModeComponent],
            exports: [DeliveryModeComponent],
        })
    ], DeliveryModeModule);
    return DeliveryModeModule;
}());
export { DeliveryModeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBeUJsRTtJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBdkI5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2Isb0JBQW9CLEVBQUU7NEJBQ3BCLFNBQVMsRUFBRSxxQkFBcUI7NEJBQ2hDLE1BQU0sRUFBRTtnQ0FDTixpQkFBaUI7Z0NBQ2pCLGlCQUFpQjtnQ0FDakIsdUJBQXVCOzZCQUN4Qjt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csa0JBQWtCLENBQUc7SUFBRCx5QkFBQztDQUFBLEFBQWxDLElBQWtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzU2V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvc2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9kZWxpdmVyeS1tb2RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0RGVsaXZlcnlNb2RlOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBEZWxpdmVyeU1vZGVDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbXG4gICAgICAgICAgICBDaGVja291dEF1dGhHdWFyZCxcbiAgICAgICAgICAgIENhcnROb3RFbXB0eUd1YXJkLFxuICAgICAgICAgICAgU2hpcHBpbmdBZGRyZXNzU2V0R3VhcmQsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEZWxpdmVyeU1vZGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeU1vZGVNb2R1bGUge31cbiJdfQ==