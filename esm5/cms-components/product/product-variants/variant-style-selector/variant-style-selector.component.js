/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OccConfig, VariantQualifier, } from '@spartacus/core';
var VariantStyleSelectorComponent = /** @class */ (function () {
    function VariantStyleSelectorComponent(config) {
        this.config = config;
        this.variantQualifier = VariantQualifier;
    }
    /**
     * @param {?} qualifiers
     * @return {?}
     */
    VariantStyleSelectorComponent.prototype.getVariantOptionValue = /**
     * @param {?} qualifiers
     * @return {?}
     */
    function (qualifiers) {
        /** @type {?} */
        var obj = qualifiers.find((/**
         * @param {?} q
         * @return {?}
         */
        function (q) { return q.qualifier === VariantQualifier.STYLE; }));
        return obj ? obj.value : '';
    };
    /**
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    VariantStyleSelectorComponent.prototype.getVariantThumbnailUrl = /**
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    function (variantOptionQualifiers) {
        /** @type {?} */
        var qualifier = variantOptionQualifiers.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.image; }));
        return qualifier
            ? "" + this.config.backend.occ.baseUrl + qualifier.image.url
            : '';
    };
    VariantStyleSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-variant-style-selector',
                    template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'variant.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{\n          'selected-variant': v.code === variants?.selected.code\n        }\"\n      >\n        <a\n          [routerLink]=\"\n            {\n              cxRoute: 'product',\n              params: { code: v.code, name: product.name }\n            } | cxUrl\n          \"\n          class=\"colorVariant\"\n        >\n          <img\n            src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n            title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n            alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          />\n        </a>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    VariantStyleSelectorComponent.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    VariantStyleSelectorComponent.propDecorators = {
        product: [{ type: Input }],
        variants: [{ type: Input }]
    };
    return VariantStyleSelectorComponent;
}());
export { VariantStyleSelectorComponent };
if (false) {
    /** @type {?} */
    VariantStyleSelectorComponent.prototype.variantQualifier;
    /** @type {?} */
    VariantStyleSelectorComponent.prototype.product;
    /** @type {?} */
    VariantStyleSelectorComponent.prototype.variants;
    /**
     * @type {?}
     * @private
     */
    VariantStyleSelectorComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLFNBQVMsRUFFVCxnQkFBZ0IsR0FHakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQU1FLHVDQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBRXJDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBRkksQ0FBQzs7Ozs7SUFVekMsNkRBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW9DOztZQUNsRCxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxFQUF0QyxDQUFzQyxFQUFDO1FBQ3hFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCw4REFBc0I7Ozs7SUFBdEIsVUFDRSx1QkFBaUQ7O1lBRTNDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQztRQUNsRSxPQUFPLFNBQVM7WUFDZCxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBSztZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw4aUNBQXNEO29CQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWEMsU0FBUzs7OzBCQWlCUixLQUFLOzJCQUdMLEtBQUs7O0lBZ0JSLG9DQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F4QlksNkJBQTZCOzs7SUFHeEMseURBQW9DOztJQUVwQyxnREFDaUI7O0lBRWpCLGlEQUNxQjs7Ozs7SUFSVCwrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT2NjQ29uZmlnLFxuICBCYXNlT3B0aW9uLFxuICBWYXJpYW50UXVhbGlmaWVyLFxuICBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLFxuICBQcm9kdWN0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC12YXJpYW50LXN0eWxlLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhbnQtc3R5bGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudFN0eWxlU2VsZWN0b3JDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIHZhcmlhbnRRdWFsaWZpZXIgPSBWYXJpYW50UXVhbGlmaWVyO1xuXG4gIEBJbnB1dCgpXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IEJhc2VPcHRpb247XG5cbiAgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSkge1xuICAgIGNvbnN0IG9iaiA9IHF1YWxpZmllcnMuZmluZChxID0+IHEucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlNUWUxFKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cblxuICBnZXRWYXJpYW50VGh1bWJuYWlsVXJsKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBxdWFsaWZpZXIgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSk7XG4gICAgcmV0dXJuIHF1YWxpZmllclxuICAgICAgPyBgJHt0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsfSR7cXVhbGlmaWVyLmltYWdlLnVybH1gXG4gICAgICA6ICcnO1xuICB9XG59XG4iXX0=