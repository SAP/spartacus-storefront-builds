/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { StarRatingModule } from '../../../../shared/index';
import { ProductReviewsComponent } from './product-reviews.component';
var ProductReviewsModule = /** @class */ (function () {
    function ProductReviewsModule() {
    }
    ProductReviewsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        I18nModule,
                        StarRatingModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ProductReviewsTabComponent: {
                                    component: ProductReviewsComponent,
                                },
                            },
                        }))),
                    ],
                    declarations: [ProductReviewsComponent],
                    entryComponents: [ProductReviewsComponent],
                    exports: [ProductReviewsComponent],
                },] }
    ];
    return ProductReviewsModule;
}());
export { ProductReviewsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFlBQVksRUFBYSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RTtJQUFBO0lBbUJtQyxDQUFDOztnQkFuQm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixnQkFBZ0I7d0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYiwwQkFBMEIsRUFBRTtvQ0FDMUIsU0FBUyxFQUFFLHVCQUF1QjtpQ0FDbkM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDMUMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DOztJQUNrQywyQkFBQztDQUFBLEFBbkJwQyxJQW1Cb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDbXNDb25maWcsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3RhclJhdGluZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFN0YXJSYXRpbmdNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RSZXZpZXdzVGFiQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RSZXZpZXdzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFJldmlld3NDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdFJldmlld3NDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c01vZHVsZSB7fVxuIl19