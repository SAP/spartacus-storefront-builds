import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CheckoutLoginComponent } from './checkout-login.component';
import { NotCheckoutAuthGuard } from '../../checkout/guards/not-checkout-auth.guard';
let CheckoutLoginModule = class CheckoutLoginModule {
};
CheckoutLoginModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            FormsModule,
            ReactiveFormsModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    GuestCheckoutLoginComponent: {
                        component: CheckoutLoginComponent,
                        guards: [NotCheckoutAuthGuard],
                    },
                },
            }),
            FormsModule,
            ReactiveFormsModule,
        ],
        declarations: [CheckoutLoginComponent],
        exports: [CheckoutLoginComponent],
        entryComponents: [CheckoutLoginComponent],
    })
], CheckoutLoginModule);
export { CheckoutLoginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBdUJyRixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUFHLENBQUE7QUFBdEIsbUJBQW1CO0lBckIvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLDJCQUEyQixFQUFFO3dCQUMzQixTQUFTLEVBQUUsc0JBQXNCO3dCQUNqQyxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDL0I7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsV0FBVztZQUNYLG1CQUFtQjtTQUNwQjtRQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ2pDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQzFDLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tvdXQtbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IE5vdENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvZ3VhcmRzL25vdC1jaGVja291dC1hdXRoLmd1YXJkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEd1ZXN0Q2hlY2tvdXRMb2dpbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2hlY2tvdXRMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtOb3RDaGVja291dEF1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0TG9naW5Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hlY2tvdXRMb2dpbkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NoZWNrb3V0TG9naW5Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dExvZ2luTW9kdWxlIHt9XG4iXX0=