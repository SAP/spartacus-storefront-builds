/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/index';
import { CartSharedModule } from './../cart-shared/cart-shared.module';
import { AddToCartComponent } from './add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
import { IconModule } from '../../../../cms-components/misc/icon/index';
import { AutoFocusDirectiveModule } from '../../../../shared/directives/auto-focus/auto-focus.directive.module';
export class AddToCartModule {
}
AddToCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CommonModule,
                    RouterModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductAddToCartComponent: { selector: 'cx-add-to-cart' },
                        },
                    }))),
                    UrlModule,
                    IconModule,
                    I18nModule,
                    AutoFocusDirectiveModule,
                ],
                declarations: [AddToCartComponent, AddedToCartDialogComponent],
                entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
                exports: [AddToCartComponent, AddedToCartDialogComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBc0JoSCxNQUFNLE9BQU8sZUFBZTs7O1lBcEIzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHlCQUF5QixFQUFFLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO3lCQUMxRDtxQkFDRixFQUFBLENBQUM7b0JBQ0YsU0FBUztvQkFDVCxVQUFVO29CQUNWLFVBQVU7b0JBQ1Ysd0JBQXdCO2lCQUN6QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSwwQkFBMEIsQ0FBQztnQkFDOUQsZUFBZSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ2pFLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO2FBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFkZFRvQ2FydENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBBdXRvRm9jdXNEaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9hdXRvLWZvY3VzL2F1dG8tZm9jdXMuZGlyZWN0aXZlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUHJvZHVjdEFkZFRvQ2FydENvbXBvbmVudDogeyBzZWxlY3RvcjogJ2N4LWFkZC10by1jYXJ0JyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEF1dG9Gb2N1c0RpcmVjdGl2ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkVG9DYXJ0Q29tcG9uZW50LCBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZFRvQ2FydENvbXBvbmVudCwgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkVG9DYXJ0Q29tcG9uZW50LCBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvQ2FydE1vZHVsZSB7fVxuIl19