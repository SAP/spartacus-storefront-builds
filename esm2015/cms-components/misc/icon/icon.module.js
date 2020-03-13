import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '@spartacus/core';
import { fontawesomeIconConfig } from './fontawesome-icon.config';
import { IconComponent } from './icon.component';
import { IconConfig } from './icon.model';
let IconModule = class IconModule {
};
IconModule = __decorate([
    NgModule({
        declarations: [IconComponent],
        imports: [CommonModule],
        providers: [
            provideDefaultConfig(fontawesomeIconConfig),
            { provide: IconConfig, useExisting: Config },
        ],
        exports: [IconComponent],
    })
], IconModule);
export { IconModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVcxQyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUcsQ0FBQTtBQUFiLFVBQVU7SUFUdEIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztZQUMzQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtTQUM3QztRQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUN6QixDQUFDO0dBQ1csVUFBVSxDQUFHO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmb250YXdlc29tZUljb25Db25maWcgfSBmcm9tICcuL2ZvbnRhd2Vzb21lLWljb24uY29uZmlnJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Db25maWcgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJY29uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGZvbnRhd2Vzb21lSWNvbkNvbmZpZyksXG4gICAgeyBwcm92aWRlOiBJY29uQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG4gIGV4cG9ydHM6IFtJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbk1vZHVsZSB7fVxuIl19