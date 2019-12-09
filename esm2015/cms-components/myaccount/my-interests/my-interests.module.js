/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListNavigationModule } from '../../../shared/components/list-navigation/list-navigation.module';
import { MyInterestsComponent } from './my-interests.component';
import { MediaModule } from '../../../shared/components/media/media.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { ConfigModule, I18nModule, UrlModule, AuthGuard, } from '@spartacus/core';
export class MyInterestsModule {
}
MyInterestsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyInterestsComponent],
                imports: [
                    CommonModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MyInterestsComponent: {
                                component: MyInterestsComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    RouterModule,
                    ListNavigationModule,
                    I18nModule,
                    UrlModule,
                    MediaModule,
                    SpinnerModule,
                ],
                exports: [MyInterestsComponent],
                entryComponents: [MyInterestsComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9teS1pbnRlcmVzdHMvbXktaW50ZXJlc3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUNMLFlBQVksRUFFWixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBeUJ6QixNQUFNLE9BQU8saUJBQWlCOzs7WUF2QjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2Isb0JBQW9CLEVBQUU7Z0NBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7Z0NBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQzs2QkFDcEI7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixVQUFVO29CQUNWLFNBQVM7b0JBQ1QsV0FBVztvQkFDWCxhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExpc3ROYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL2xpc3QtbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTXlJbnRlcmVzdHNDb21wb25lbnQgfSBmcm9tICcuL215LWludGVyZXN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgQ29uZmlnTW9kdWxlLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbiAgQXV0aEd1YXJkLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNeUludGVyZXN0c0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgTXlJbnRlcmVzdHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE15SW50ZXJlc3RzQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTXlJbnRlcmVzdHNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNeUludGVyZXN0c0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE15SW50ZXJlc3RzTW9kdWxlIHt9XG4iXX0=