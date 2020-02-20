import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/cart/cart-shared/cart-shared.module';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
var CheckoutOrderSummaryModule = /** @class */ (function () {
    function CheckoutOrderSummaryModule() {
    }
    CheckoutOrderSummaryModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CartSharedModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutOrderSummary: {
                            component: CheckoutOrderSummaryComponent,
                        },
                    },
                }),
            ],
            declarations: [CheckoutOrderSummaryComponent],
            entryComponents: [CheckoutOrderSummaryComponent],
            exports: [CheckoutOrderSummaryComponent],
        })
    ], CheckoutOrderSummaryModule);
    return CheckoutOrderSummaryModule;
}());
export { CheckoutOrderSummaryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQWtCbkY7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLDBCQUEwQjtRQWhCdEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2Isb0JBQW9CLEVBQUU7NEJBQ3BCLFNBQVMsRUFBRSw2QkFBNkI7eUJBQ3pDO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQzdDLGVBQWUsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQ2hELE9BQU8sRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQ3pDLENBQUM7T0FDVywwQkFBMEIsQ0FBRztJQUFELGlDQUFDO0NBQUEsQUFBMUMsSUFBMEM7U0FBN0IsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmRlclN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dE9yZGVyU3VtbWFyeToge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2hlY2tvdXRPcmRlclN1bW1hcnlDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDaGVja291dE9yZGVyU3VtbWFyeUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NoZWNrb3V0T3JkZXJTdW1tYXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0T3JkZXJTdW1tYXJ5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUge31cbiJdfQ==