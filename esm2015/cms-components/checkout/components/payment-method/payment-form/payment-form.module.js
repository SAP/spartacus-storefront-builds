import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { CardModule } from '../../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../../shared/components/spinner/spinner.module';
import { IconModule } from '../../../../misc/icon/icon.module';
import { BillingAddressFormModule } from '../billing-address-form/billing-address-form.module';
import { PaymentFormComponent } from './payment-form.component';
let PaymentFormModule = class PaymentFormModule {
};
PaymentFormModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            NgSelectModule,
            CardModule,
            BillingAddressFormModule,
            I18nModule,
            IconModule,
            SpinnerModule,
        ],
        declarations: [PaymentFormComponent],
        entryComponents: [PaymentFormComponent],
        exports: [PaymentFormComponent],
    })
], PaymentFormModule);
export { PaymentFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFpQmhFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBQUcsQ0FBQTtBQUFwQixpQkFBaUI7SUFmN0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsVUFBVTtZQUNWLHdCQUF3QjtZQUN4QixVQUFVO1lBQ1YsVUFBVTtZQUNWLGFBQWE7U0FDZDtRQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BDLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2hDLENBQUM7R0FDVyxpQkFBaUIsQ0FBRztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBCaWxsaW5nQWRkcmVzc0Zvcm1Nb2R1bGUgfSBmcm9tICcuLi9iaWxsaW5nLWFkZHJlc3MtZm9ybS9iaWxsaW5nLWFkZHJlc3MtZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgUGF5bWVudEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZm9ybS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBCaWxsaW5nQWRkcmVzc0Zvcm1Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BheW1lbnRGb3JtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudEZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUGF5bWVudEZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Rm9ybU1vZHVsZSB7fVxuIl19