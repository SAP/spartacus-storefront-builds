import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, } from '@angular/core';
import { Config, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { OutletPosition } from '../../../cms-structure/outlet/outlet.model';
import { SkipLinkComponent } from './component/skip-link.component';
import { defaultSkipLinkConfig } from './config/default-skip-link.config';
import { SkipLinkConfig } from './config/skip-link.config';
import { SkipLinkDirective } from './directive/skip-link.directive';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
let SkipLinkModule = class SkipLinkModule {
};
SkipLinkModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule],
        declarations: [SkipLinkComponent, SkipLinkDirective],
        exports: [SkipLinkDirective],
        entryComponents: [SkipLinkComponent],
        providers: [
            provideDefaultConfig(defaultSkipLinkConfig),
            { provide: SkipLinkConfig, useExisting: Config },
            {
                provide: APP_INITIALIZER,
                useFactory: skipLinkFactory,
                deps: [ComponentFactoryResolver, OutletService],
                multi: true,
            },
        ],
    })
], SkipLinkModule);
export { SkipLinkModule };
/**
 * Adds the skip link component before the cx-storefront.
 */
export function skipLinkFactory(componentFactoryResolver, outletService) {
    const isReady = () => {
        const factory = componentFactoryResolver.resolveComponentFactory(SkipLinkComponent);
        outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
    };
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFtQjdFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUFqQjFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7UUFDbkMsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7UUFDcEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDNUIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFFcEMsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUMscUJBQXFCLENBQUM7WUFDM0MsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7WUFDaEQ7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxlQUFlO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUM7Z0JBQy9DLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtLQUNGLENBQUM7R0FDVyxjQUFjLENBQUc7U0FBakIsY0FBYztBQUUzQjs7R0FFRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQzdCLHdCQUFrRCxFQUNsRCxhQUE0QjtJQUU1QixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDbkIsTUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUMsdUJBQXVCLENBQzlELGlCQUFpQixDQUNsQixDQUFDO1FBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQU8sT0FBTyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFQUF9JTklUSUFMSVpFUixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IFNraXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0U2tpcExpbmtDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXNraXAtbGluay5jb25maWcnO1xuaW1wb3J0IHsgU2tpcExpbmtDb25maWcgfSBmcm9tICcuL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJMThuTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2tpcExpbmtDb21wb25lbnQsIFNraXBMaW5rRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1NraXBMaW5rRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2tpcExpbmtDb21wb25lbnRdLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRTa2lwTGlua0NvbmZpZyksXG4gICAgeyBwcm92aWRlOiBTa2lwTGlua0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHNraXBMaW5rRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE91dGxldFNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtNb2R1bGUge31cblxuLyoqXG4gKiBBZGRzIHRoZSBza2lwIGxpbmsgY29tcG9uZW50IGJlZm9yZSB0aGUgY3gtc3RvcmVmcm9udC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNraXBMaW5rRmFjdG9yeShcbiAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2Vcbikge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBTa2lwTGlua0NvbXBvbmVudFxuICAgICk7XG4gICAgb3V0bGV0U2VydmljZS5hZGQoJ2N4LXN0b3JlZnJvbnQnLCA8YW55PmZhY3RvcnksIE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gIH07XG4gIHJldHVybiBpc1JlYWR5O1xufVxuIl19