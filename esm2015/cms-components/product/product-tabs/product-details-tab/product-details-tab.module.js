import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideDefaultConfig } from '@spartacus/core';
import { ProductDetailsTabComponent } from './product-details-tab.component';
let ProductDetailsTabModule = class ProductDetailsTabModule {
};
ProductDetailsTabModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductDetailsTabComponent: {
                        component: ProductDetailsTabComponent,
                    },
                },
            }),
        ],
        declarations: [ProductDetailsTabComponent],
        entryComponents: [ProductDetailsTabComponent],
        exports: [ProductDetailsTabComponent],
    })
], ProductDetailsTabModule);
export { ProductDetailsTabModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdGFicy9wcm9kdWN0LWRldGFpbHMtdGFiL3Byb2R1Y3QtZGV0YWlscy10YWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWlCN0UsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7Q0FBRyxDQUFBO0FBQTFCLHVCQUF1QjtJQWZuQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYiwwQkFBMEIsRUFBRTt3QkFDMUIsU0FBUyxFQUFFLDBCQUEwQjtxQkFDdEM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUM3QyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUN0QyxDQUFDO0dBQ1csdUJBQXVCLENBQUc7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlscy10YWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNUYWJNb2R1bGUge31cbiJdfQ==