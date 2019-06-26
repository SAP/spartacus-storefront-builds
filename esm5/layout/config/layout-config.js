/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var BREAKPOINT = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};
export { BREAKPOINT };
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
var /**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
LayoutConfig = /** @class */ (function () {
    function LayoutConfig() {
    }
    return LayoutConfig;
}());
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
export { LayoutConfig };
if (false) {
    /**
     * The breakpoint configuration is used when the DOM is (re)rendered in specific view.
     * This allows for adaptive rendering, so that the DOM is rendered for specific breakpoints.
     * @type {?}
     */
    LayoutConfig.prototype.breakpoints;
    /** @type {?} */
    LayoutConfig.prototype.layoutSlots;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDRSxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7Ozs7Ozs7Ozs7QUFtQ1g7Ozs7Ozs7O0lBQUE7SUFVQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7Ozs7Ozs7Ozs7Ozs7O0lBUEMsbUNBS0U7O0lBQ0YsbUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQlJFQUtQT0lOVCB7XG4gIHhzID0gJ3hzJyxcbiAgc20gPSAnc20nLFxuICBtZCA9ICdtZCcsXG4gIGxnID0gJ2xnJyxcbiAgeGwgPSAneGwnLFxufVxuXG5leHBvcnQgdHlwZSBMYXlvdXRTZWN0aW9ucyA9XG4gIHwgJ2hlYWRlcidcbiAgfCAnZm9vdGVyJ1xuICB8ICdMYW5kaW5nUGFnZTJUZW1wbGF0ZSdcbiAgfCBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIFNsb3RDb25maWcgPSB7XG4gIC8qKiBUaGUgY21zIHBhZ2Ugc2xvdHMgYXJlIG1hcHBlZCBieSB0aGUgYHNsb3QucG9zaXRpb25gLiAqL1xuICBzbG90cz86IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IHR5cGUgU2xvdEdyb3VwID0ge1xuICAvKiogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9uIGZvciBsYXJnZSBzY3JlZW5zICovXG4gIFtCUkVBS1BPSU5ULmxnXT86IFNsb3RDb25maWc7XG4gIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIG1lZGl1bSBzY3JlZW5zICovXG4gIFtCUkVBS1BPSU5ULm1kXT86IFNsb3RDb25maWc7XG4gIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgW0JSRUFLUE9JTlQuc21dPzogU2xvdENvbmZpZztcbiAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICBbQlJFQUtQT0lOVC54c10/OiBTbG90Q29uZmlnO1xufTtcblxuZXhwb3J0IHR5cGUgTGF5b3V0U2xvdENvbmZpZyA9IHtcbiAgW3NlY3Rpb24gaW4gTGF5b3V0U2VjdGlvbnNdOiBTbG90Q29uZmlnIHwgU2xvdEdyb3VwIHwgTGF5b3V0U2xvdENvbmZpZ1xufTtcblxuLyoqXG4gKiBUaGUgTGF5b3V0Q29uZmlnIHN1cHBvcnRzIHRoZSBjb25maWd1cmF0aW9uIG9mIHBhZ2Ugc2xvdHMgYnkgcGFnZSB0ZW1wbGF0ZXNcbiAqIG9yIHBhZ2Ugc2VjdGlvbnMsIHN1Y2ggYXMgaGVhZGVycyBhbmQgZm9vdGVycy4gVGhlIGNvbmZpZ3VyYXRpb24gYWxzbyBzdXBwb3J0c1xuICogYWRhcHRpdmUgZGVzaWduIHBlciBicmVhZHBvaW50IChub3QgcGVyIGRldmljZSB0eXBlKSwgc28gdGhhdCB0aGUgRE9NIGlzIChyZSlyZW5kZXJlZFxuICogcG9yIGEgZ2l2ZW4gYnJlYWtwb2ludC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheW91dENvbmZpZyB7XG4gIC8qKiBUaGUgYnJlYWtwb2ludCBjb25maWd1cmF0aW9uIGlzIHVzZWQgd2hlbiB0aGUgRE9NIGlzIChyZSlyZW5kZXJlZCBpbiBzcGVjaWZpYyB2aWV3LlxuICAgKiBUaGlzIGFsbG93cyBmb3IgYWRhcHRpdmUgcmVuZGVyaW5nLCBzbyB0aGF0IHRoZSBET00gaXMgcmVuZGVyZWQgZm9yIHNwZWNpZmljIGJyZWFrcG9pbnRzLiAqL1xuICBicmVha3BvaW50cz86IHtcbiAgICBbQlJFQUtQT0lOVC54c10/OiBudW1iZXI7XG4gICAgW0JSRUFLUE9JTlQuc21dPzogbnVtYmVyO1xuICAgIFtCUkVBS1BPSU5ULm1kXT86IG51bWJlcjtcbiAgICBbQlJFQUtQT0lOVC5sZ10/OiBudW1iZXI7XG4gIH07XG4gIGxheW91dFNsb3RzPzogTGF5b3V0U2xvdENvbmZpZztcbn1cbiJdfQ==