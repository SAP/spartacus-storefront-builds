import { ComponentRef, ElementRef, Injector, ViewContainerRef } from '@angular/core';
import { ComponentHandler } from './component-handler';
import { Observable } from 'rxjs';
import { CmsComponentMapping, Priority } from '@spartacus/core';
/**
 * Default component handler used for dynamically launching cms components implemented
 * as native Angular components.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DefaultComponentHandler implements ComponentHandler {
    hasMatch(componentMapping: CmsComponentMapping): boolean;
    getPriority(): Priority;
    launcher(componentMapping: CmsComponentMapping, viewContainerRef: ViewContainerRef, elementInjector?: Injector): Observable<{
        elementRef: ElementRef;
        componentRef?: ComponentRef<any>;
    }>;
    protected getComponentFactory(injector: Injector, component: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultComponentHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb21wb25lbnQuaGFuZGxlci5kLnRzIiwic291cmNlcyI6WyJkZWZhdWx0LWNvbXBvbmVudC5oYW5kbGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2NvbXBvbmVudC1oYW5kbGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbi8qKlxuICogRGVmYXVsdCBjb21wb25lbnQgaGFuZGxlciB1c2VkIGZvciBkeW5hbWljYWxseSBsYXVuY2hpbmcgY21zIGNvbXBvbmVudHMgaW1wbGVtZW50ZWRcbiAqIGFzIG5hdGl2ZSBBbmd1bGFyIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERlZmF1bHRDb21wb25lbnRIYW5kbGVyIGltcGxlbWVudHMgQ29tcG9uZW50SGFuZGxlciB7XG4gICAgaGFzTWF0Y2goY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyk6IGJvb2xlYW47XG4gICAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHk7XG4gICAgbGF1bmNoZXIoY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZywgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgZWxlbWVudEluamVjdG9yPzogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICAgICAgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT47XG4gICAgfT47XG4gICAgcHJvdGVjdGVkIGdldENvbXBvbmVudEZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yLCBjb21wb25lbnQ6IGFueSk6IGFueTtcbn1cbiJdfQ==