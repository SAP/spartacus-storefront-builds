import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { ActionsSubject } from '@ngrx/store';
import { createFrom, EventService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { HomePageEvent, PageEvent } from './page.events';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@spartacus/core";
export class PageEventBuilder {
    constructor(actions, eventService) {
        this.actions = actions;
        this.eventService = eventService;
        this.register();
    }
    register() {
        this.eventService.register(PageEvent, this.buildPageEvent());
        this.eventService.register(HomePageEvent, this.buildHomePageEvent());
    }
    buildPageEvent() {
        return this.getNavigatedEvent().pipe(map((state) => createFrom(PageEvent, {
            context: state.context,
            semanticRoute: state.semanticRoute,
            url: state.url,
            params: state.params,
        })));
    }
    buildHomePageEvent() {
        return this.buildPageEvent().pipe(filter((pageEvent) => pageEvent.semanticRoute === 'home'), map((pageEvent) => createFrom(HomePageEvent, pageEvent)));
    }
    getNavigatedEvent() {
        return this.actions.pipe(ofType(ROUTER_NAVIGATED), map((event) => event.payload.routerState));
    }
}
PageEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageEventBuilder_Factory() { return new PageEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: PageEventBuilder, providedIn: "root" });
PageEventBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PageEventBuilder.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvZXZlbnRzL3BhZ2UvcGFnZS1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQXlCLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBRUwsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLekQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUNZLE9BQXVCLEVBQ3ZCLFlBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRXBDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsUUFBUTtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVTLGNBQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1osVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztZQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUNyQixDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLGtCQUFrQjtRQUMxQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQy9CLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxNQUFNLENBQUMsRUFDekQsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLE1BQU0sQ0FDSixnQkFBZ0IsQ0FDakIsRUFDRCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDOzs7O1lBM0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWlEsY0FBYztZQUlyQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBSb3V0ZXJOYXZpZ2F0ZWRBY3Rpb24sIFJPVVRFUl9OQVZJR0FURUQgfSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBjcmVhdGVGcm9tLFxuICBFdmVudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEhvbWVQYWdlRXZlbnQsIFBhZ2VFdmVudCB9IGZyb20gJy4vcGFnZS5ldmVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3Rpb25zOiBBY3Rpb25zU3ViamVjdCxcbiAgICBwcm90ZWN0ZWQgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJlZ2lzdGVyKFBhZ2VFdmVudCwgdGhpcy5idWlsZFBhZ2VFdmVudCgpKTtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihIb21lUGFnZUV2ZW50LCB0aGlzLmJ1aWxkSG9tZVBhZ2VFdmVudCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFBhZ2VFdmVudCgpOiBPYnNlcnZhYmxlPFBhZ2VFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLmdldE5hdmlnYXRlZEV2ZW50KCkucGlwZShcbiAgICAgIG1hcCgoc3RhdGUpID0+XG4gICAgICAgIGNyZWF0ZUZyb20oUGFnZUV2ZW50LCB7XG4gICAgICAgICAgY29udGV4dDogc3RhdGUuY29udGV4dCxcbiAgICAgICAgICBzZW1hbnRpY1JvdXRlOiBzdGF0ZS5zZW1hbnRpY1JvdXRlLFxuICAgICAgICAgIHVybDogc3RhdGUudXJsLFxuICAgICAgICAgIHBhcmFtczogc3RhdGUucGFyYW1zLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRIb21lUGFnZUV2ZW50KCk6IE9ic2VydmFibGU8SG9tZVBhZ2VFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkUGFnZUV2ZW50KCkucGlwZShcbiAgICAgIGZpbHRlcigocGFnZUV2ZW50KSA9PiBwYWdlRXZlbnQuc2VtYW50aWNSb3V0ZSA9PT0gJ2hvbWUnKSxcbiAgICAgIG1hcCgocGFnZUV2ZW50KSA9PiBjcmVhdGVGcm9tKEhvbWVQYWdlRXZlbnQsIHBhZ2VFdmVudCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGVkRXZlbnQoKTogT2JzZXJ2YWJsZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5waXBlKFxuICAgICAgb2ZUeXBlPFJvdXRlck5hdmlnYXRlZEFjdGlvbjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90Pj4oXG4gICAgICAgIFJPVVRFUl9OQVZJR0FURURcbiAgICAgICksXG4gICAgICBtYXAoKGV2ZW50KSA9PiBldmVudC5wYXlsb2FkLnJvdXRlclN0YXRlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==