import { NgModule } from '@angular/core';
import { provideDefaultConfig, RoutingModule as CoreRoutingModule, } from '@spartacus/core';
import { CmsRouteModule } from './cms-route/cms-route.module';
import { defaultRoutingConfig } from './default-routing-config';
export class RoutingModule {
    static forRoot() {
        return {
            ngModule: RoutingModule,
            providers: [provideDefaultConfig(defaultRoutingConfig)],
        };
    }
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CoreRoutingModule.forRoot(), CmsRouteModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixhQUFhLElBQUksaUJBQWlCLEdBQ25DLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS2hFLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDeEQsQ0FBQztJQUNKLENBQUM7OztZQVRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLENBQUM7YUFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFJvdXRpbmdNb2R1bGUgYXMgQ29yZVJvdXRpbmdNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY21zLXJvdXRlL2Ntcy1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtcm91dGluZy1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29yZVJvdXRpbmdNb2R1bGUuZm9yUm9vdCgpLCBDbXNSb3V0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvdXRpbmdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJvdXRpbmdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0Um91dGluZ0NvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==