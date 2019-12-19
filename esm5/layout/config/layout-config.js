/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * Deferrred loading is a technique to hold of with the loading / creation
     * of DOM elements which are not not in the initial view port.
     * This technique wil increase performance.
     * @type {?}
     */
    LayoutConfig.prototype.deferredLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHRSxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7SUFDVCxJQUFLLElBQUk7Ozs7Ozs7Ozs7QUEwQ1g7Ozs7Ozs7O0lBQUE7SUE4QkEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7Ozs7Ozs7Ozs7Ozs7O0lBM0JDLG1DQUtFOztJQUNGLG1DQUErQjs7Ozs7OztJQU8vQix1Q0FhRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmVyTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGVudW0gQlJFQUtQT0lOVCB7XG4gIHhzID0gJ3hzJyxcbiAgc20gPSAnc20nLFxuICBtZCA9ICdtZCcsXG4gIGxnID0gJ2xnJyxcbiAgeGwgPSAneGwnLFxufVxuXG5leHBvcnQgdHlwZSBMYXlvdXRTZWN0aW9ucyA9XG4gIHwgJ2hlYWRlcidcbiAgfCAnZm9vdGVyJ1xuICB8ICdMYW5kaW5nUGFnZTJUZW1wbGF0ZSdcbiAgfCBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIFNsb3RDb25maWcgPSB7XG4gIC8qKiBUaGUgY21zIHBhZ2Ugc2xvdHMgYXJlIG1hcHBlZCBieSB0aGUgYHNsb3QucG9zaXRpb25gLiAqL1xuICBzbG90cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgcGFnZSBmb2xkIGlkZW50aWZpZXMgdGhlIGxhc3QgZXhwZWN0ZWQgcGFnZSBzbG90IGFib3ZlLXRoZS1mb2xkLlxuICAgKiBJdCdzIHBlcmZlY3RseSBmaW5lIHRvIHNwZWNpZnkgdGhpcyBieSBpZGljYXRpb24sIGhvd2V2ZXIgYSBtb3JlXG4gICAqIHByZWNpc2UgaW5kaWNhdGlvbiB3aWxsIGhhdmUgYW4gcG9zaXRpdmUgaW1wYWN0IG9uIHBlcmZvcm1hbmNlLlxuICAgKi9cbiAgcGFnZUZvbGQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTbG90R3JvdXAgPSB7XG4gIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIGxhcmdlIHNjcmVlbnMgKi9cbiAgW0JSRUFLUE9JTlQubGddPzogU2xvdENvbmZpZztcbiAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgbWVkaXVtIHNjcmVlbnMgKi9cbiAgW0JSRUFLUE9JTlQubWRdPzogU2xvdENvbmZpZztcbiAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3Igc21hbGwgc2NyZWVucyAqL1xuICBbQlJFQUtQT0lOVC5zbV0/OiBTbG90Q29uZmlnO1xuICAvKiogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9uIGZvciBleHRyYSBzbWFsbCBzY3JlZW5zICovXG4gIFtCUkVBS1BPSU5ULnhzXT86IFNsb3RDb25maWc7XG59O1xuXG5leHBvcnQgdHlwZSBMYXlvdXRTbG90Q29uZmlnID0ge1xuICBbc2VjdGlvbiBpbiBMYXlvdXRTZWN0aW9uc106IFNsb3RDb25maWcgfCBTbG90R3JvdXAgfCBMYXlvdXRTbG90Q29uZmlnO1xufTtcblxuLyoqXG4gKiBUaGUgTGF5b3V0Q29uZmlnIHN1cHBvcnRzIHRoZSBjb25maWd1cmF0aW9uIG9mIHBhZ2Ugc2xvdHMgYnkgcGFnZSB0ZW1wbGF0ZXNcbiAqIG9yIHBhZ2Ugc2VjdGlvbnMsIHN1Y2ggYXMgaGVhZGVycyBhbmQgZm9vdGVycy4gVGhlIGNvbmZpZ3VyYXRpb24gYWxzbyBzdXBwb3J0c1xuICogYWRhcHRpdmUgZGVzaWduIHBlciBicmVhZHBvaW50IChub3QgcGVyIGRldmljZSB0eXBlKSwgc28gdGhhdCB0aGUgRE9NIGlzIChyZSlyZW5kZXJlZFxuICogcG9yIGEgZ2l2ZW4gYnJlYWtwb2ludC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheW91dENvbmZpZyB7XG4gIC8qKiBUaGUgYnJlYWtwb2ludCBjb25maWd1cmF0aW9uIGlzIHVzZWQgd2hlbiB0aGUgRE9NIGlzIChyZSlyZW5kZXJlZCBpbiBzcGVjaWZpYyB2aWV3LlxuICAgKiBUaGlzIGFsbG93cyBmb3IgYWRhcHRpdmUgcmVuZGVyaW5nLCBzbyB0aGF0IHRoZSBET00gaXMgcmVuZGVyZWQgZm9yIHNwZWNpZmljIGJyZWFrcG9pbnRzLiAqL1xuICBicmVha3BvaW50cz86IHtcbiAgICBbQlJFQUtQT0lOVC54c10/OiBudW1iZXI7XG4gICAgW0JSRUFLUE9JTlQuc21dPzogbnVtYmVyO1xuICAgIFtCUkVBS1BPSU5ULm1kXT86IG51bWJlcjtcbiAgICBbQlJFQUtQT0lOVC5sZ10/OiBudW1iZXI7XG4gIH07XG4gIGxheW91dFNsb3RzPzogTGF5b3V0U2xvdENvbmZpZztcblxuICAvKipcbiAgICogRGVmZXJycmVkIGxvYWRpbmcgaXMgYSB0ZWNobmlxdWUgdG8gaG9sZCBvZiB3aXRoIHRoZSBsb2FkaW5nIC8gY3JlYXRpb25cbiAgICogb2YgRE9NIGVsZW1lbnRzIHdoaWNoIGFyZSBub3Qgbm90IGluIHRoZSBpbml0aWFsIHZpZXcgcG9ydC5cbiAgICogVGhpcyB0ZWNobmlxdWUgd2lsIGluY3JlYXNlIHBlcmZvcm1hbmNlLlxuICAgKi9cbiAgZGVmZXJyZWRMb2FkaW5nPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBnbG9iYWwgc3RyYXRlZ3kgd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgc3RyYXRlZ3kgZm9yIGFsbCBET00gY3JlYXRpb24sXG4gICAgICogYnV0IGNhbiBiZSBvdmVycmlkZW4gYnkgbG9jYWwgY29uZmlndXJhdGlvbiwgaS5lLiBmb3IgY21zIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgc3RyYXRlZ3k/OiBEZWZlckxvYWRpbmdTdHJhdGVneTtcbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZXJzZWN0aW9uIG1hcmdpbiBjb250YWlucyB0aGUgb2Zmc2V0IHVzZWQgYnkgdGhlIEludGVyc2VjdGlvbiBPYnNlcnZlclxuICAgICAqIHRvIG9ic2VydmUgZWxlbWVudHMgb3V0c2lkZSB0aGUgdmlldyBwb3J0LlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnRlcnNlY3Rpb25PYnNlcnZlci9yb290TWFyZ2luXG4gICAgICovXG4gICAgaW50ZXJzZWN0aW9uTWFyZ2luPzogc3RyaW5nO1xuICB9O1xufVxuIl19