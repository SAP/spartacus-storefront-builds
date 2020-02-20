import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { PageComponentModule } from '../../../cms-structure/page/component/page-component.module';
import { TabParagraphContainerComponent } from './tab-paragraph-container.component';
var TabParagraphContainerModule = /** @class */ (function () {
    function TabParagraphContainerModule() {
    }
    TabParagraphContainerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSTabParagraphContainer: {
                            component: TabParagraphContainerComponent,
                        },
                    },
                }),
                PageComponentModule,
                OutletModule,
                I18nModule,
            ],
            declarations: [TabParagraphContainerComponent],
            entryComponents: [TabParagraphContainerComponent],
            exports: [TabParagraphContainerComponent],
        })
    ], TabParagraphContainerModule);
    return TabParagraphContainerModule;
}());
export { TabParagraphContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBb0JyRjtJQUFBO0lBQTBDLENBQUM7SUFBOUIsMkJBQTJCO1FBbEJ2QyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2Isd0JBQXdCLEVBQUU7NEJBQ3hCLFNBQVMsRUFBRSw4QkFBOEI7eUJBQzFDO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0YsbUJBQW1CO2dCQUNuQixZQUFZO2dCQUNaLFVBQVU7YUFDWDtZQUNELFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzlDLGVBQWUsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzFDLENBQUM7T0FDVywyQkFBMkIsQ0FBRztJQUFELGtDQUFDO0NBQUEsQUFBM0MsSUFBMkM7U0FBOUIsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3BhZ2UtY29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1RhYlBhcmFncmFwaENvbnRhaW5lcjoge1xuICAgICAgICAgIGNvbXBvbmVudDogVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBQYWdlQ29tcG9uZW50TW9kdWxlLFxuICAgIE91dGxldE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlIHt9XG4iXX0=