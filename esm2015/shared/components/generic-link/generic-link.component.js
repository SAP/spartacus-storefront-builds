/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
export class GenericLinkComponent {
    constructor() {
        this.protocolRegex = /^https?:\/\//i;
    }
    /**
     * @return {?}
     */
    get rel() {
        return this.target === '_blank' ? 'noopener' : null;
    }
    /**
     * @return {?}
     */
    get routerUrl() {
        if (typeof this.url === 'string') {
            return [this.getAbsoluteUrl(this.url)];
        }
        return this.url;
    }
    /**
     * @return {?}
     */
    isExternalUrl() {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getAbsoluteUrl(url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    }
}
GenericLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-generic-link',
                template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
            }] }
];
GenericLinkComponent.propDecorators = {
    url: [{ type: Input }],
    target: [{ type: Input }],
    class: [{ type: Input }],
    id: [{ type: Input }],
    style: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    GenericLinkComponent.prototype.protocolRegex;
    /** @type {?} */
    GenericLinkComponent.prototype.url;
    /** @type {?} */
    GenericLinkComponent.prototype.target;
    /** @type {?} */
    GenericLinkComponent.prototype.class;
    /** @type {?} */
    GenericLinkComponent.prototype.id;
    /** @type {?} */
    GenericLinkComponent.prototype.style;
    /** @type {?} */
    GenericLinkComponent.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVNqRCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBS21CLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0lBMkIzRCxDQUFDOzs7O0lBbEJDLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxHQUFXO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixrekJBQTRDO2FBQzdDOzs7a0JBSUUsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7aUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7Ozs7SUFQTiw2Q0FBeUQ7O0lBRXpELG1DQUE2Qjs7SUFDN0Isc0NBQXdCOztJQUN4QixxQ0FBdUI7O0lBQ3ZCLGtDQUFvQjs7SUFDcEIscUNBQXVCOztJQUN2QixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgbmF2aWdhdGVzIHVzaW5nIFtyb3V0ZXJMaW5rXSBhdHRyaWJ1dGUgd2hlbiBpbnB1dCAndXJsJyBpcyBhIHJlbGF0aXZlIHVybC4gT3RoZXJ3aXNlICh3aGVuIGl0J3MgYWJzb2x1dGUpLCBbaHJlZl0gaXMgdXNlZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZ2VuZXJpYy1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dlbmVyaWMtbGluay5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEdlbmVyaWNMaW5rQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwcm90b2NvbFJlZ2V4OiBSZWdFeHAgPSAvXmh0dHBzPzpcXC9cXC8vaTtcblxuICBASW5wdXQoKSB1cmw6IHN0cmluZyB8IGFueVtdO1xuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICBnZXQgcmVsKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCA9PT0gJ19ibGFuaycgPyAnbm9vcGVuZXInIDogbnVsbDtcbiAgfVxuXG4gIGdldCByb3V0ZXJVcmwoKTogYW55W10ge1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gW3RoaXMuZ2V0QWJzb2x1dGVVcmwodGhpcy51cmwpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsO1xuICB9XG5cbiAgaXNFeHRlcm5hbFVybCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMudXJsID09PSAnc3RyaW5nJyAmJiB0aGlzLnByb3RvY29sUmVnZXgudGVzdCh0aGlzLnVybCk7XG4gIH1cblxuICBwcml2YXRlIGdldEFic29sdXRlVXJsKHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCcvJykgPyB0aGlzLnVybCA6ICcvJyArIHRoaXMudXJsO1xuICB9XG59XG4iXX0=