import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, } from '@angular/core';
import { ConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { OutletPosition } from '../../../cms-structure/outlet/outlet.model';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
import { KeyboardFocusModule } from '../keyboard-focus/keyboard-focus.module';
import { SkipLinkComponent } from './component/skip-link.component';
import { defaultSkipLinkConfig } from './config/default-skip-link.config';
import { SkipLinkDirective } from './directive/skip-link.directive';
let SkipLinkModule = class SkipLinkModule {
};
SkipLinkModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            ConfigModule.withConfig(defaultSkipLinkConfig),
            KeyboardFocusModule,
        ],
        declarations: [SkipLinkComponent, SkipLinkDirective],
        exports: [SkipLinkDirective],
        entryComponents: [SkipLinkComponent],
        providers: [
            provideDefaultConfig(defaultSkipLinkConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxZQUFZLEVBQ1osVUFBVSxFQUNWLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUF1QnBFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUFyQjFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixVQUFVO1lBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztZQUM5QyxtQkFBbUI7U0FDcEI7UUFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztRQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QixlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUVwQyxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztZQUMzQztnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLGVBQWU7Z0JBQzNCLElBQUksRUFBRSxDQUFDLHdCQUF3QixFQUFFLGFBQWEsQ0FBQztnQkFDL0MsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FBRztTQUFqQixjQUFjO0FBRTNCOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FDN0Isd0JBQWtELEVBQ2xELGFBQTRCO0lBRTVCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNuQixNQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDOUQsaUJBQWlCLENBQ2xCLENBQUM7UUFDRixhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBTyxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQztJQUNGLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c01vZHVsZSB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzL2tleWJvYXJkLWZvY3VzLm1vZHVsZSc7XG5pbXBvcnQgeyBTa2lwTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NraXAtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0U2tpcExpbmtDb25maWcpLFxuICAgIEtleWJvYXJkRm9jdXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NraXBMaW5rQ29tcG9uZW50LCBTa2lwTGlua0RpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtTa2lwTGlua0RpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NraXBMaW5rQ29tcG9uZW50XSxcblxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0U2tpcExpbmtDb25maWcpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHNraXBMaW5rRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE91dGxldFNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtNb2R1bGUge31cblxuLyoqXG4gKiBBZGRzIHRoZSBza2lwIGxpbmsgY29tcG9uZW50IGJlZm9yZSB0aGUgY3gtc3RvcmVmcm9udC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNraXBMaW5rRmFjdG9yeShcbiAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2Vcbikge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBTa2lwTGlua0NvbXBvbmVudFxuICAgICk7XG4gICAgb3V0bGV0U2VydmljZS5hZGQoJ2N4LXN0b3JlZnJvbnQnLCA8YW55PmZhY3RvcnksIE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gIH07XG4gIHJldHVybiBpc1JlYWR5O1xufVxuIl19