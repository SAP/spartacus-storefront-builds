import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { IconConfig, IconConfigResource, IconResourceType, ICON_TYPE, } from './icon.model';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./icon.model";
var IconLoaderService = /** @class */ (function () {
    function IconLoaderService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
        this.loadedResources = [];
    }
    /**
     * Indicates whether the given icon type is configured to use SVG.
     */
    IconLoaderService.prototype.useSvg = function (iconType) {
        return (this.config.icon.resources &&
            !!this.config.icon.resources.find(function (res) {
                return res.types &&
                    res.type === IconResourceType.SVG &&
                    res.types.includes(iconType);
            }));
    };
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    IconLoaderService.prototype.getSvgPath = function (iconType) {
        var svgResource = this.config.icon.resources.find(function (res) {
            return res.type === IconResourceType.SVG &&
                res.types &&
                res.types.includes(iconType);
        });
        if (svgResource) {
            return svgResource.url
                ? svgResource.url + "#" + this.getSymbol(iconType)
                : "#" + this.getSymbol(iconType);
        }
    };
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    IconLoaderService.prototype.getStyleClasses = function (iconType) {
        return this.getSymbol(iconType) || '';
    };
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    IconLoaderService.prototype.addLinkResource = function (iconType) {
        var resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource && resource.url) {
            if (!this.loadedResources.includes(resource.url)) {
                this.loadedResources.push(resource.url);
                var head = this.winRef.document.getElementsByTagName('head')[0];
                var link = this.winRef.document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = resource.url;
                head.appendChild(link);
            }
        }
    };
    IconLoaderService.prototype.findResource = function (iconType, resourceType) {
        if (!this.config.icon.resources) {
            return;
        }
        var resource = this.config.icon.resources.find(function (res) {
            return res.type === resourceType && res.types && res.types.includes(iconType);
        });
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.icon.resources.find(function (res) { return (res.type === resourceType && !res.types) || res.types === []; });
        }
        return resource;
    };
    IconLoaderService.prototype.getSymbol = function (iconType) {
        if (this.config.icon &&
            this.config.icon.symbols &&
            this.config.icon.symbols[iconType]) {
            return this.config.icon.symbols[iconType];
        }
    };
    IconLoaderService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: IconConfig }
    ]; };
    IconLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.IconConfig)); }, token: IconLoaderService, providedIn: "root" });
    IconLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], IconLoaderService);
    return IconLoaderService;
}());
export { IconLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsU0FBUyxHQUNWLE1BQU0sY0FBYyxDQUFDOzs7O0FBS3RCO0lBRUUsMkJBQXNCLE1BQWlCLEVBQVksTUFBa0I7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFZLFdBQU0sR0FBTixNQUFNLENBQVk7UUFEN0Qsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFDMkMsQ0FBQztJQUV6RTs7T0FFRztJQUNILGtDQUFNLEdBQU4sVUFBTyxRQUFtQjtRQUN4QixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUztZQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDL0IsVUFBQSxHQUFHO2dCQUNELE9BQUEsR0FBRyxDQUFDLEtBQUs7b0JBQ1QsR0FBRyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO29CQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFGNUIsQ0FFNEIsQ0FDL0IsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsc0NBQVUsR0FBVixVQUFXLFFBQW1CO1FBQzVCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pELFVBQUEs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QUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFDbEM7WUFDQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7O2dCQXBHNkIsU0FBUztnQkFBb0IsVUFBVTs7O0lBRjFELGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBdUc3Qjs0QkFuSEQ7Q0FtSEMsQUF2R0QsSUF1R0M7U0F2R1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEljb25Db25maWcsXG4gIEljb25Db25maWdSZXNvdXJjZSxcbiAgSWNvblJlc291cmNlVHlwZSxcbiAgSUNPTl9UWVBFLFxufSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkxvYWRlclNlcnZpY2Uge1xuICBwcml2YXRlIGxvYWRlZFJlc291cmNlcyA9IFtdO1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsIHByb3RlY3RlZCBjb25maWc6IEljb25Db25maWcpIHt9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBpY29uIHR5cGUgaXMgY29uZmlndXJlZCB0byB1c2UgU1ZHLlxuICAgKi9cbiAgdXNlU3ZnKGljb25UeXBlOiBJQ09OX1RZUEUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcuaWNvbi5yZXNvdXJjZXMgJiZcbiAgICAgICEhdGhpcy5jb25maWcuaWNvbi5yZXNvdXJjZXMuZmluZChcbiAgICAgICAgcmVzID0+XG4gICAgICAgICAgcmVzLnR5cGVzICYmXG4gICAgICAgICAgcmVzLnR5cGUgPT09IEljb25SZXNvdXJjZVR5cGUuU1ZHICYmXG4gICAgICAgICAgcmVzLnR5cGVzLmluY2x1ZGVzKGljb25UeXBlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGF0aCB0byB0aGUgc3ZnIGxpbmsuIFRoZSBsaW5rIHN1cHBvcnRzIHBhdGggbmFtZXNcbiAgICogYXMgd2VsbCwgaWYgdGhlIGNvbmZpZyBoYXMgYmVlbiBzZXR1cCB0byBzdXBwb3J0IGEgc3ZnIGZpbGUgcGF0aC5cbiAgICogQWRkaXRpb25hbGx5LCB0aGUgaWNvbiBwcmVmaXggd2lsbCBiZSB0YWtlbiBpbnRvIGFjY291bnQgdG8gcHJlZml4IHRoZVxuICAgKiBpY29uIElEcyBpbiB0aGUgU1ZHLlxuICAgKi9cbiAgZ2V0U3ZnUGF0aChpY29uVHlwZTogSUNPTl9UWVBFKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdmdSZXNvdXJjZSA9IHRoaXMuY29uZmlnLmljb24ucmVzb3VyY2VzLmZpbmQoXG4gICAgICByZXMgPT5cbiAgICAgICAgcmVzLnR5cGUgPT09IEljb25SZXNvdXJjZVR5cGUuU1ZHICYmXG4gICAgICAgIHJlcy50eXBlcyAmJlxuICAgICAgICByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgKTtcbiAgICBpZiAoc3ZnUmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiBzdmdSZXNvdXJjZS51cmxcbiAgICAgICAgPyBgJHtzdmdSZXNvdXJjZS51cmx9IyR7dGhpcy5nZXRTeW1ib2woaWNvblR5cGUpfWBcbiAgICAgICAgOiBgIyR7dGhpcy5nZXRTeW1ib2woaWNvblR5cGUpfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFJldHVybnMgdGhlIHN5bWJvbCBjbGFzcyhlcykgZm9yIHRoZSBpY29uIHR5cGUuXG4gICAqL1xuICBnZXRTdHlsZUNsYXNzZXMoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3ltYm9sKGljb25UeXBlKSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgcmVzb3VyY2UgdXJsIChpZiBhbnkpIGZvciB0aGUgZ2l2ZW4gaWNvbi5cbiAgICogVGhlIGljb24gd2lsbCBvbmx5IGJlIGxvYWRlZCBvbmNlLlxuICAgKlxuICAgKiBOT1RFOiB0aGlzIGlzIG5vdCB3b3JraW5nIHdoZW4gdGhlIHNoYWRvdyBpcyB1c2VkIGFzIHRoZXJlJ3NcbiAgICogbm8gaGVhZCBlbGVtZW50IGF2YWlsYWJsZSBhbmQgdGhlIGxpbmsgbXVzdCBiZSBsb2FkZWQgZm9yIGV2ZXJ5XG4gICAqIHdlYiBjb21wb25lbnQuXG4gICAqL1xuICBhZGRMaW5rUmVzb3VyY2UoaWNvblR5cGU6IElDT05fVFlQRSk6IHZvaWQge1xuICAgIGNvbnN0IHJlc291cmNlOiBJY29uQ29uZmlnUmVzb3VyY2UgPSB0aGlzLmZpbmRSZXNvdXJjZShcbiAgICAgIGljb25UeXBlLFxuICAgICAgSWNvblJlc291cmNlVHlwZS5MSU5LXG4gICAgKTtcbiAgICBpZiAocmVzb3VyY2UgJiYgcmVzb3VyY2UudXJsKSB7XG4gICAgICBpZiAoIXRoaXMubG9hZGVkUmVzb3VyY2VzLmluY2x1ZGVzKHJlc291cmNlLnVybCkpIHtcbiAgICAgICAgdGhpcy5sb2FkZWRSZXNvdXJjZXMucHVzaChyZXNvdXJjZS51cmwpO1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy53aW5SZWYuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgY29uc3QgbGluayA9IHRoaXMud2luUmVmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIGxpbmsuaHJlZiA9IHJlc291cmNlLnVybDtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRSZXNvdXJjZShcbiAgICBpY29uVHlwZTogSUNPTl9UWVBFLFxuICAgIHJlc291cmNlVHlwZTogSWNvblJlc291cmNlVHlwZVxuICApOiBJY29uQ29uZmlnUmVzb3VyY2Uge1xuICAgIGlmICghdGhpcy5jb25maWcuaWNvbi5yZXNvdXJjZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLmNvbmZpZy5pY29uLnJlc291cmNlcy5maW5kKFxuICAgICAgcmVzID0+XG4gICAgICAgIHJlcy50eXBlID09PSByZXNvdXJjZVR5cGUgJiYgcmVzLnR5cGVzICYmIHJlcy50eXBlcy5pbmNsdWRlcyhpY29uVHlwZSlcbiAgICApO1xuICAgIC8vIG5vIHNwZWNpZmljIHJlc291cmNlIGZvdW5kLCBsZXQncyB0cnkgdG8gZmluZCBhIG9uZS1zaXplLWZpdHMtYWxsIHJlc291cmNlXG4gICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgcmVzb3VyY2UgPSB0aGlzLmNvbmZpZy5pY29uLnJlc291cmNlcy5maW5kKFxuICAgICAgICByZXMgPT4gKHJlcy50eXBlID09PSByZXNvdXJjZVR5cGUgJiYgIXJlcy50eXBlcykgfHwgcmVzLnR5cGVzID09PSBbXVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTeW1ib2woaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmljb24gJiZcbiAgICAgIHRoaXMuY29uZmlnLmljb24uc3ltYm9scyAmJlxuICAgICAgdGhpcy5jb25maWcuaWNvbi5zeW1ib2xzW2ljb25UeXBlXVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmljb24uc3ltYm9sc1tpY29uVHlwZV07XG4gICAgfVxuICB9XG59XG4iXX0=