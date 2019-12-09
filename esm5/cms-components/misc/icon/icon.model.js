/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ICON_TYPE = {
    STAR: 'STAR',
    SEARCH: 'SEARCH',
    CART: 'CART',
    INFO: 'INFO',
    GRID: 'GRID',
    LIST: 'LIST',
    CARET_DOWN: 'CARET_DOWN',
    CARET_LEFT: 'CARET_LEFT',
    CARET_RIGHT: 'CARET_RIGHT',
    CLOSE: 'CLOSE',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    SUCCESS: 'SUCCESS',
    VISA: 'VISA',
    MASTER_CARD: 'MASTER_CARD',
    AMEX: 'AMEX',
    DINERS_CLUB: 'DINERS_CLUB',
    CREDIT_CARD: 'CREDIT_CARD',
    EXPAND: 'EXPAND',
    COLLAPSE: 'COLLAPSE',
    RESET: 'RESET',
    CIRCLE: 'CIRCLE',
};
export { ICON_TYPE };
/**
 * @abstract
 */
var /**
 * @abstract
 */
IconConfig = /** @class */ (function () {
    function IconConfig() {
    }
    return IconConfig;
}());
/**
 * @abstract
 */
export { IconConfig };
if (false) {
    /** @type {?} */
    IconConfig.prototype.icon;
}
/**
 * @record
 */
export function IconConfigResource() { }
if (false) {
    /** @type {?} */
    IconConfigResource.prototype.type;
    /** @type {?|undefined} */
    IconConfigResource.prototype.url;
    /** @type {?|undefined} */
    IconConfigResource.prototype.types;
}
/** @enum {string} */
var IconResourceType = {
    SVG: 'svg',
    LINK: 'link',
};
export { IconResourceType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTtJQUNqQixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixZQUFhLFlBQVk7SUFDekIsWUFBYSxZQUFZO0lBQ3pCLGFBQWMsYUFBYTtJQUMzQixPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87SUFDZixTQUFVLFNBQVM7SUFDbkIsU0FBVSxTQUFTO0lBQ25CLE1BQU8sTUFBTTtJQUNiLGFBQWMsYUFBYTtJQUMzQixNQUFPLE1BQU07SUFDYixhQUFjLGFBQWE7SUFDM0IsYUFBYyxhQUFhO0lBQzNCLFFBQVMsUUFBUTtJQUNqQixVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7Ozs7QUFHbkI7Ozs7SUFBQTtJQXlCQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7Ozs7O0lBeEJDLDBCQXVCRTs7Ozs7QUFHSix3Q0FJQzs7O0lBSEMsa0NBQWdDOztJQUNoQyxpQ0FBYTs7SUFDYixtQ0FBb0I7Ozs7SUFJcEIsS0FBTSxLQUFLO0lBQ1gsTUFBTyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSUNPTl9UWVBFIHtcbiAgU1RBUiA9ICdTVEFSJyxcbiAgU0VBUkNIID0gJ1NFQVJDSCcsXG4gIENBUlQgPSAnQ0FSVCcsXG4gIElORk8gPSAnSU5GTycsXG4gIEdSSUQgPSAnR1JJRCcsXG4gIExJU1QgPSAnTElTVCcsXG4gIENBUkVUX0RPV04gPSAnQ0FSRVRfRE9XTicsXG4gIENBUkVUX0xFRlQgPSAnQ0FSRVRfTEVGVCcsXG4gIENBUkVUX1JJR0hUID0gJ0NBUkVUX1JJR0hUJyxcbiAgQ0xPU0UgPSAnQ0xPU0UnLFxuICBFUlJPUiA9ICdFUlJPUicsXG4gIFdBUk5JTkcgPSAnV0FSTklORycsXG4gIFNVQ0NFU1MgPSAnU1VDQ0VTUycsXG4gIFZJU0EgPSAnVklTQScsXG4gIE1BU1RFUl9DQVJEID0gJ01BU1RFUl9DQVJEJyxcbiAgQU1FWCA9ICdBTUVYJyxcbiAgRElORVJTX0NMVUIgPSAnRElORVJTX0NMVUInLFxuICBDUkVESVRfQ0FSRCA9ICdDUkVESVRfQ0FSRCcsXG4gIEVYUEFORCA9ICdFWFBBTkQnLFxuICBDT0xMQVBTRSA9ICdDT0xMQVBTRScsXG4gIFJFU0VUID0gJ1JFU0VUJyxcbiAgQ0lSQ0xFID0gJ0NJUkNMRScsXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJY29uQ29uZmlnIHtcbiAgaWNvbj86IHtcbiAgICAvKipcbiAgICAgKiBFYWNoIGljb24gdHlwZSBjYW4gYmUgY29uZmlndXJlZCB3aXRoIGEgc28tY2FsbGVkIHN5bWJvbC4gVGhlIHN5bWJvbCB3aWxsXG4gICAgICogYmUgdXNlZCB0byBtYXAgdGhlIGljb24gdG8gYW4gU1ZHIGBzeW1ib2xgIChpZCkgb3IgdG8gdGhlIHN0eWxlIGNsYXNzZXMgb2ZcbiAgICAgKiBhIGZvbnQgYmFzZWQgaWNvbi4gVGhlIGZvbGxvd2luZyBjb25maWd1cmF0aW9uIHdvdWxkIG1hcCB0byBhIGZvbnRhd2Vzb21lXG4gICAgICogaWNvbjpcbiAgICAgKlxuICAgICAqIGljb246IHtcbiAgICAgKiAgIHN5bWJvbHM6IHtcbiAgICAgKiAgICAgQ0FSVDogJ2ZhcyBmYS1zaG9wcGluZy1jYXJ0J1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKi9cbiAgICBzeW1ib2xzPzoge1xuICAgICAgW0lDT05fVFlQRTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNvdXJjZXMgYXJlIHVzZWQgdG8gbWFwIGljb24gdHlwZXMgdG8gY2VydGFpbiBhc3NldCwgc3VjaCBhcyBhbiBTVkcgKHNwcml0ZSkgaW1hZ2UuXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgKGBJY29uUmVzb3VyY2VUeXBlYCkgZGljdGF0ZXMgd2hldGhlciBhbiBTVkcgaW1hZ2UgaXMgdXNlZC4gVGhlIFVSTFxuICAgICAqIGlzIHVzZWQgZm9yIHRoZSBTVkcgeGxpbmsgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHJlc291cmNlcz86IEljb25Db25maWdSZXNvdXJjZVtdO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWdSZXNvdXJjZSB7XG4gIHR5cGU6IEljb25SZXNvdXJjZVR5cGUgfCBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgdHlwZXM/OiBJQ09OX1RZUEVbXTtcbn1cblxuZXhwb3J0IGVudW0gSWNvblJlc291cmNlVHlwZSB7XG4gIFNWRyA9ICdzdmcnLFxuICBMSU5LID0gJ2xpbmsnLFxufVxuIl19