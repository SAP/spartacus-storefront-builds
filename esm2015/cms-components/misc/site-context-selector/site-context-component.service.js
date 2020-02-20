import { __decorate, __param } from "tslib";
import { Injectable, Injector, Optional } from '@angular/core';
import { CmsSiteContextSelectorComponent, ContextServiceMap, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, SiteContext, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
const LABELS = {
    [LANGUAGE_CONTEXT_ID]: 'Language',
    [CURRENCY_CONTEXT_ID]: 'Currency',
};
let SiteContextComponentService = class SiteContextComponentService {
    constructor(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    getItems(context) {
        return this.getService(context).pipe(switchMap((service) => service.getAll()), switchMap(items => this.getContext(context).pipe(switchMap(ctx => {
            const itemsCopy = [];
            for (const item of items) {
                itemsCopy.push(Object.assign(Object.assign({}, item), { label: this.getOptionLabel(item, ctx) }));
            }
            return of(itemsCopy);
        }))));
    }
    getActiveItem(context) {
        return this.getService(context).pipe(switchMap((service) => service.getActive()));
    }
    getLabel(context) {
        return this.getContext(context).pipe(map(ctx => {
            return LABELS[ctx];
        }));
    }
    setActive(value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe(service => {
            service.setActive(value);
        });
    }
    getService(context) {
        return this.getContext(context).pipe(map((ctx) => this.getInjectedService(ctx)), filter(s => !!s));
    }
    getContext(context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map(data => data.context), map(ctx => {
                switch (ctx) {
                    case 'LANGUAGE':
                        return LANGUAGE_CONTEXT_ID;
                    case 'CURRENCY':
                        return CURRENCY_CONTEXT_ID;
                    default:
                        return ctx;
                }
            }));
        }
    }
    getInjectedService(context) {
        return this.injector.get(this.contextServiceMap[context], null);
    }
    getOptionLabel(item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
            default:
                return item.isocode;
        }
    }
};
SiteContextComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ContextServiceMap },
    { type: Injector }
];
SiteContextComponentService = __decorate([
    Injectable(),
    __param(0, Optional())
], SiteContextComponentService);
export { SiteContextComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUNMLCtCQUErQixFQUMvQixpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUd4RixNQUFNLE1BQU0sR0FBRztJQUNiLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0lBQ2pDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0NBQ2xDLENBQUM7QUFHRixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUN0QyxZQUVZLGFBQWdFLEVBQ2xFLGlCQUFvQyxFQUNsQyxRQUFrQjtRQUZsQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDbEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFFSixRQUFRLENBQUMsT0FBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsU0FBUyxDQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQzFELFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDM0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN4QixTQUFTLENBQUMsSUFBSSxpQ0FDVCxJQUFJLEtBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUNyQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBeUI7UUFDckMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsU0FBUyxDQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQXlCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNSLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxPQUF5QjtRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsVUFBVSxDQUNsQixPQUF5QjtRQUV6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNsRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRVMsVUFBVSxDQUFDLE9BQXlCO1FBQzVDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNSLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssVUFBVTt3QkFDYixPQUFPLG1CQUFtQixDQUFDO29CQUM3QixLQUFLLFVBQVU7d0JBQ2IsT0FBTyxtQkFBbUIsQ0FBQztvQkFDN0I7d0JBQ0UsT0FBTyxHQUFHLENBQUM7aUJBQ2Q7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRVMsa0JBQWtCLENBQUMsT0FBZTtRQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQy9CLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVTLGNBQWMsQ0FBQyxJQUFTLEVBQUUsT0FBZ0I7UUFDbEQsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLG1CQUFtQjtnQkFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssbUJBQW1CO2dCQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUM7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBN0Y0QixnQkFBZ0IsdUJBRHhDLFFBQVE7WUFFa0IsaUJBQWlCO1lBQ3hCLFFBQVE7O0FBTG5CLDJCQUEyQjtJQUR2QyxVQUFVLEVBQUU7SUFHUixXQUFBLFFBQVEsRUFBRSxDQUFBO0dBRkYsMkJBQTJCLENBZ0d2QztTQWhHWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsXG4gIENvbnRleHRTZXJ2aWNlTWFwLFxuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxuICBTaXRlQ29udGV4dCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRUeXBlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQubW9kZWwnO1xuXG5jb25zdCBMQUJFTFMgPSB7XG4gIFtMQU5HVUFHRV9DT05URVhUX0lEXTogJ0xhbmd1YWdlJyxcbiAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiAnQ3VycmVuY3knLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXAsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgZ2V0SXRlbXMoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+KSA9PiBzZXJ2aWNlLmdldEFsbCgpKSxcbiAgICAgIHN3aXRjaE1hcChpdGVtcyA9PlxuICAgICAgICB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoY3R4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQ29weSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgIGl0ZW1zQ29weS5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsKGl0ZW0sIGN0eCksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKGl0ZW1zQ29weSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRBY3RpdmVJdGVtKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc2VydmljZTogU2l0ZUNvbnRleHQ8YW55PikgPT4gc2VydmljZS5nZXRBY3RpdmUoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TGFiZWwoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKGN0eCA9PiB7XG4gICAgICAgIHJldHVybiBMQUJFTFNbY3R4XTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNldEFjdGl2ZSh2YWx1ZTogc3RyaW5nLCBjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShzZXJ2aWNlID0+IHtcbiAgICAgICAgc2VydmljZS5zZXRBY3RpdmUodmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VydmljZShcbiAgICBjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlXG4gICk6IE9ic2VydmFibGU8U2l0ZUNvbnRleHQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgIG1hcCgoY3R4OiBzdHJpbmcpID0+IHRoaXMuZ2V0SW5qZWN0ZWRTZXJ2aWNlKGN0eCkpLFxuICAgICAgZmlsdGVyKHMgPT4gISFzKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29udGV4dChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgcmV0dXJuIG9mKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wb25lbnREYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IGRhdGEuY29udGV4dCksXG4gICAgICAgIG1hcChjdHggPT4ge1xuICAgICAgICAgIHN3aXRjaCAoY3R4KSB7XG4gICAgICAgICAgICBjYXNlICdMQU5HVUFHRSc6XG4gICAgICAgICAgICAgIHJldHVybiBMQU5HVUFHRV9DT05URVhUX0lEO1xuICAgICAgICAgICAgY2FzZSAnQ1VSUkVOQ1knOlxuICAgICAgICAgICAgICByZXR1cm4gQ1VSUkVOQ1lfQ09OVEVYVF9JRDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBjdHg7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SW5qZWN0ZWRTZXJ2aWNlKGNvbnRleHQ6IHN0cmluZyk6IFNpdGVDb250ZXh0PGFueT4ge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxTaXRlQ29udGV4dDxhbnk+PihcbiAgICAgIHRoaXMuY29udGV4dFNlcnZpY2VNYXBbY29udGV4dF0sXG4gICAgICBudWxsXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRPcHRpb25MYWJlbChpdGVtOiBhbnksIGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgY2FzZSBMQU5HVUFHRV9DT05URVhUX0lEOlxuICAgICAgICByZXR1cm4gaXRlbS5uYXRpdmVOYW1lO1xuICAgICAgY2FzZSBDVVJSRU5DWV9DT05URVhUX0lEOlxuICAgICAgICByZXR1cm4gaXRlbS5zeW1ib2wgKyAnICcgKyBpdGVtLmlzb2NvZGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaXRlbS5pc29jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19