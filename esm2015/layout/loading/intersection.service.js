import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, first, flatMap, map } from 'rxjs/operators';
import { LayoutConfig } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/layout-config";
/**
 * The IntersectionService uses the native IntersectionObserver (v2), which
 * can be used to implement pre-loading and deferred loading of DOM content.
 *
 */
export class IntersectionService {
    constructor(config) {
        this.config = config;
    }
    /**
     * Returns an Observable that emits only once a boolean value whenever
     * the given element has shown in the view port.
     *
     * The returned observable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
    isIntersected(element, options) {
        return this.intersects(element, options).pipe(first((v) => v === true));
    }
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
    intersects(element, options = {}) {
        const elementVisible$ = new Observable((observer) => {
            const rootMargin = this.getRootMargin(options);
            const intersectOptions = { rootMargin, threshold: options.threshold };
            const intersectionObserver = new IntersectionObserver((entries) => {
                observer.next(entries);
            }, intersectOptions);
            intersectionObserver.observe(element);
            return () => {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap((entries) => entries), map((entry) => entry.isIntersecting), distinctUntilChanged());
        return elementVisible$;
    }
    getRootMargin(options = {}) {
        if (options.rootMargin) {
            return options.rootMargin;
        }
        const layoutConfig = this.config;
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    }
}
IntersectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(i0.ɵɵinject(i1.LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
IntersectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IntersectionService.ctorParameters = () => [
    { type: LayoutConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFHdkQ7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBc0IsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7SUFFOUM7Ozs7Ozs7T0FPRztJQUNILGFBQWEsQ0FDWCxPQUFvQixFQUNwQixPQUE2QjtRQUU3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ssVUFBVSxDQUNoQixPQUFvQixFQUNwQixVQUErQixFQUFFO1FBRWpDLE1BQU0sZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxNQUFNLGdCQUFnQixHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdEUsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2hFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDTCxPQUFPLENBQUMsQ0FBQyxPQUFvQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFDMUQsR0FBRyxDQUFDLENBQUMsS0FBZ0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUMvRCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO1FBRUYsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxVQUErQixFQUFFO1FBQ3JELElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDM0I7UUFDRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBc0IsQ0FBQztRQUNqRCxJQUNFLFlBQVksQ0FBQyxlQUFlO1lBQzVCLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQy9DO1lBQ0EsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZRLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlyc3QsIGZsYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5cbi8qKlxuICogVGhlIEludGVyc2VjdGlvblNlcnZpY2UgdXNlcyB0aGUgbmF0aXZlIEludGVyc2VjdGlvbk9ic2VydmVyICh2MiksIHdoaWNoXG4gKiBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgcHJlLWxvYWRpbmcgYW5kIGRlZmVycmVkIGxvYWRpbmcgb2YgRE9NIGNvbnRlbnQuXG4gKlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IExheW91dENvbmZpZykge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSBvbmNlIGEgYm9vbGVhbiB2YWx1ZSB3aGVuZXZlclxuICAgKiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgc2hvd24gaW4gdGhlIHZpZXcgcG9ydC5cbiAgICpcbiAgICogVGhlIHJldHVybmVkIG9ic2VydmFibGUgd2lsbCBvbmx5IGVtaXQgdGhlIGZpcnN0IHZhbHVlLiBUaGVcbiAgICogb2JzZXJ2YWJsZSBtdXN0IGJlIGNsZWFuZWQgdXAgZWl0aGVyIHdheSwgc2luY2UgdGhlIHZhbHVlIG1pZ2h0IG5ldmVyIGVtaXQ7IGl0XG4gICAqICBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnQgYXBwZWFycyBpbiB0aGUgdmlldyBwb3J0LlxuICAgKi9cbiAgaXNJbnRlcnNlY3RlZChcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3RzKGVsZW1lbnQsIG9wdGlvbnMpLnBpcGUoZmlyc3QoKHYpID0+IHYgPT09IHRydWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cyB0aGUgdmlldyBwb3J0LiBBbiBvcHRpb25hbCBtYXJnaW5cbiAgICogaXMgdXNlZCB0byBpbnRlcnNlY3RzIGJlZm9yZSB0aGUgZWxlbWVudCBzaG93cyB1cCBpbiB0aGUgdmlld3BvcnQuXG4gICAqIEEgdmFsdWUgaXMgZW1pdHRlZCBlYWNoIHRpbWUgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cy5cbiAgICpcbiAgICogVGhpcyBpcyBwcml2YXRlIGZvciBub3csIGJ1dCBjb3VsZCBiZSBleHBvc2VkIGFzIGEgcHVibGljIEFQSVxuICAgKiB0byBpbnRyb2R1Y2UgYWRkaXRpb25hbCAoY3NzKSByZW5kZXIgZWZmZWN0cyB0byB0aGUgVUkuXG4gICAqL1xuICBwcml2YXRlIGludGVyc2VjdHMoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9uczogSW50ZXJzZWN0aW9uT3B0aW9ucyA9IHt9XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGVsZW1lbnRWaXNpYmxlJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IHRoaXMuZ2V0Um9vdE1hcmdpbihvcHRpb25zKTtcbiAgICAgIGNvbnN0IGludGVyc2VjdE9wdGlvbnMgPSB7IHJvb3RNYXJnaW4sIHRocmVzaG9sZDogb3B0aW9ucy50aHJlc2hvbGQgfTtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZW50cmllcyk7XG4gICAgICB9LCBpbnRlcnNlY3RPcHRpb25zKTtcbiAgICAgIGludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9O1xuICAgIH0pLnBpcGUoXG4gICAgICBmbGF0TWFwKChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pID0+IGVudHJpZXMpLFxuICAgICAgbWFwKChlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gZWxlbWVudFZpc2libGUkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb290TWFyZ2luKG9wdGlvbnM6IEludGVyc2VjdGlvbk9wdGlvbnMgPSB7fSk6IHN0cmluZyB7XG4gICAgaWYgKG9wdGlvbnMucm9vdE1hcmdpbikge1xuICAgICAgcmV0dXJuIG9wdGlvbnMucm9vdE1hcmdpbjtcbiAgICB9XG4gICAgY29uc3QgbGF5b3V0Q29uZmlnID0gdGhpcy5jb25maWcgYXMgTGF5b3V0Q29uZmlnO1xuICAgIGlmIChcbiAgICAgIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcgJiZcbiAgICAgIGxheW91dENvbmZpZy5kZWZlcnJlZExvYWRpbmcuaW50ZXJzZWN0aW9uTWFyZ2luXG4gICAgKSB7XG4gICAgICByZXR1cm4gbGF5b3V0Q29uZmlnLmRlZmVycmVkTG9hZGluZy5pbnRlcnNlY3Rpb25NYXJnaW47XG4gICAgfVxuICB9XG59XG4iXX0=