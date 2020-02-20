import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AVOID_STACKED_OUTLETS, OutletPosition } from './outlet.model';
import * as i0 from "@angular/core";
let OutletService = class OutletService {
    constructor() {
        this.templatesRefs = new Map();
        this.templatesRefsBefore = new Map();
        this.templatesRefsAfter = new Map();
    }
    /**
     * @param templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     */
    add(outlet, templateOrFactory, position = OutletPosition.REPLACE) {
        if (position === OutletPosition.BEFORE) {
            this.store(this.templatesRefsBefore, outlet, templateOrFactory);
        }
        if (position === OutletPosition.REPLACE) {
            this.store(this.templatesRefs, outlet, templateOrFactory);
        }
        if (position === OutletPosition.AFTER) {
            this.store(this.templatesRefsAfter, outlet, templateOrFactory);
        }
    }
    /**
     *
     * Returns a single object or multiple objects for the given outlet reference,
     * depending on the `stacked` argument.
     *
     * @param outlet The outlet reference
     * @param position the outlet position, `OutletPosition.before`, `OutletPosition.AFTER` or `OutletPosition.REPLACE`
     * @param stacked Indicates whether an array of outlet components is returned
     */
    get(outlet, position = OutletPosition.REPLACE, stacked = AVOID_STACKED_OUTLETS) {
        let templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore.get(outlet);
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter.get(outlet);
                break;
            default:
                templateRef = this.templatesRefs.get(outlet);
        }
        if (templateRef && !stacked) {
            return templateRef[0];
        }
        return templateRef;
    }
    store(store, outlet, value) {
        const existing = store.get(outlet) || [];
        const newValue = existing.concat([value]);
        store.set(outlet, newValue);
    }
};
OutletService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
OutletService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OutletService);
export { OutletService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3ZFLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFBMUI7UUFDVSxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO1FBQy9DLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO0tBNkV2RDtJQXZEQzs7T0FFRztJQUNILEdBQUcsQ0FDRCxNQUFjLEVBQ2QsaUJBQW9CLEVBQ3BCLFdBQTJCLGNBQWMsQ0FBQyxPQUFPO1FBRWpELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxHQUFHLENBQ0QsTUFBYyxFQUNkLFdBQTJCLGNBQWMsQ0FBQyxPQUFPLEVBQ2pELE9BQU8sR0FBRyxxQkFBcUI7UUFFL0IsSUFBSSxXQUFnQixDQUFDO1FBQ3JCLFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssY0FBYyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxNQUFNO1lBQ1IsS0FBSyxjQUFjLENBQUMsS0FBSztnQkFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDUjtnQkFDRSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLFdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQixPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBeUIsRUFBRSxNQUFjLEVBQUUsS0FBUTtRQUMvRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxNQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTs7QUFoRlksYUFBYTtJQUh6QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csYUFBYSxDQWdGekI7U0FoRlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBVk9JRF9TVEFDS0VEX09VVExFVFMsIE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0U2VydmljZTxUID0gVGVtcGxhdGVSZWY8YW55Pj4ge1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnMgPSBuZXcgTWFwPHN0cmluZywgKFQpW10+KCk7XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmc0JlZm9yZSA9IG5ldyBNYXA8c3RyaW5nLCAoVClbXT4oKTtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzQWZ0ZXIgPSBuZXcgTWFwPHN0cmluZywgKFQpW10+KCk7XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5LCBzbyB0aGF0IFVJIG91dGxldHMgY2FuIGJlIHJlcGxhY2VkIGR5bmFtaWNhbGx5LlxuICAgKiBUaGUgVUkgcG9zaXRpb24gd2hlcmUgdGhpcyB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5IGlzIGluc2VydGVkIGlzIGdpdmVuIGJ5IGFcbiAgICogc3RyaW5nIHJlZmVyZW5jZSAoY2FsbGVkIGBvdXRsZXRgKSBhbmQgb3B0aW9uYWwgYE91dGxldFBvc2l0aW9uYC4gVGhlIGBPdXRsZXRQb3NpdGlvbmBcbiAgICogaXMgZWl0aGVyIGJlZm9yZSBvciBhZnRlciwgb3IgcmVwbGFjZXMgdGhlIGVudGlyZSBVSS5cbiAgICpcbiAgICogQHBhcmFtIG91dGxldCB0aGUgVUkgbG9jYXRpb24gcmVwcmVzZW50ZWQgYnkgYSBzdHJpbmdcbiAgICogQHBhcmFtIHRlbXBsYXRlIHRoZSBgVGVtcGxhdGVSZWZgIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGluc2VydCBVSVxuICAgKiBAcGFyYW0gcG9zaXRpb24gdGhlIGBPdXRsZXRQb3NpdGlvbmAgaW4gdGhlIFVJXG4gICAqL1xuICBhZGQob3V0bGV0OiBzdHJpbmcsIHRlbXBsYXRlOiBULCBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uKTogdm9pZDtcbiAgLyoqXG4gICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBgQ29tcG9uZW50RmFjdG9yeWAgdGhhdCB3aWxsIGJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBvdXRsZXQgVUlcbiAgICovXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGZhY3Rvcnk6IFQsXG4gICAgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvblxuICApOiB2b2lkO1xuICAvKipcbiAgICogQHBhcmFtIHRlbXBsYXRlT3JGYWN0b3J5IEEgYENvbXBvbmVudEZhY3RvcnlgIHRoYXQgaW5zZXJ0cyBhIGNvbXBvbmVudCBkeW5hbWljYWxseS5cbiAgICovXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICB0ZW1wbGF0ZU9yRmFjdG9yeTogVCxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFXG4gICk6IHZvaWQge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uQkVGT1JFKSB7XG4gICAgICB0aGlzLnN0b3JlKHRoaXMudGVtcGxhdGVzUmVmc0JlZm9yZSwgb3V0bGV0LCB0ZW1wbGF0ZU9yRmFjdG9yeSk7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGhpcy5zdG9yZSh0aGlzLnRlbXBsYXRlc1JlZnMsIG91dGxldCwgdGVtcGxhdGVPckZhY3RvcnkpO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLkFGVEVSKSB7XG4gICAgICB0aGlzLnN0b3JlKHRoaXMudGVtcGxhdGVzUmVmc0FmdGVyLCBvdXRsZXQsIHRlbXBsYXRlT3JGYWN0b3J5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyBhIHNpbmdsZSBvYmplY3Qgb3IgbXVsdGlwbGUgb2JqZWN0cyBmb3IgdGhlIGdpdmVuIG91dGxldCByZWZlcmVuY2UsXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYHN0YWNrZWRgIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gb3V0bGV0IFRoZSBvdXRsZXQgcmVmZXJlbmNlXG4gICAqIEBwYXJhbSBwb3NpdGlvbiB0aGUgb3V0bGV0IHBvc2l0aW9uLCBgT3V0bGV0UG9zaXRpb24uYmVmb3JlYCwgYE91dGxldFBvc2l0aW9uLkFGVEVSYCBvciBgT3V0bGV0UG9zaXRpb24uUkVQTEFDRWBcbiAgICogQHBhcmFtIHN0YWNrZWQgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXJyYXkgb2Ygb3V0bGV0IGNvbXBvbmVudHMgaXMgcmV0dXJuZWRcbiAgICovXG4gIGdldChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLFxuICAgIHN0YWNrZWQgPSBBVk9JRF9TVEFDS0VEX09VVExFVFNcbiAgKTogVFtdIHwgVCB7XG4gICAgbGV0IHRlbXBsYXRlUmVmOiBUW107XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBPdXRsZXRQb3NpdGlvbi5CRUZPUkU6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzQmVmb3JlLmdldChvdXRsZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT3V0bGV0UG9zaXRpb24uQUZURVI6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzQWZ0ZXIuZ2V0KG91dGxldCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnMuZ2V0KG91dGxldCk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVJlZiAmJiAhc3RhY2tlZCkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlUmVmWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBwcml2YXRlIHN0b3JlKHN0b3JlOiBNYXA8c3RyaW5nLCAoVClbXT4sIG91dGxldDogc3RyaW5nLCB2YWx1ZTogVCkge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gc3RvcmUuZ2V0KG91dGxldCkgfHwgW107XG4gICAgY29uc3QgbmV3VmFsdWU6IFRbXSA9IGV4aXN0aW5nLmNvbmNhdChbdmFsdWVdKTtcbiAgICBzdG9yZS5zZXQob3V0bGV0LCBuZXdWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==