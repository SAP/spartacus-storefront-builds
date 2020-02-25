export var ICON_TYPE;
(function (ICON_TYPE) {
    ICON_TYPE["STAR"] = "STAR";
    ICON_TYPE["SEARCH"] = "SEARCH";
    ICON_TYPE["CART"] = "CART";
    ICON_TYPE["INFO"] = "INFO";
    ICON_TYPE["GRID"] = "GRID";
    ICON_TYPE["LIST"] = "LIST";
    ICON_TYPE["CARET_DOWN"] = "CARET_DOWN";
    ICON_TYPE["CARET_LEFT"] = "CARET_LEFT";
    ICON_TYPE["CARET_RIGHT"] = "CARET_RIGHT";
    ICON_TYPE["CLOSE"] = "CLOSE";
    ICON_TYPE["ERROR"] = "ERROR";
    ICON_TYPE["WARNING"] = "WARNING";
    ICON_TYPE["SUCCESS"] = "SUCCESS";
    ICON_TYPE["VISA"] = "VISA";
    ICON_TYPE["MASTER_CARD"] = "MASTER_CARD";
    ICON_TYPE["AMEX"] = "AMEX";
    ICON_TYPE["DINERS_CLUB"] = "DINERS_CLUB";
    ICON_TYPE["CREDIT_CARD"] = "CREDIT_CARD";
    ICON_TYPE["EXPAND"] = "EXPAND";
    ICON_TYPE["COLLAPSE"] = "COLLAPSE";
    ICON_TYPE["RESET"] = "RESET";
    ICON_TYPE["CIRCLE"] = "CIRCLE";
    ICON_TYPE["HEART"] = "HEART";
    ICON_TYPE["EMPTY_HEART"] = "EMPTY_HEART";
})(ICON_TYPE || (ICON_TYPE = {}));
export class IconConfig {
}
/**
 * Each ICON type can have an companied resource type, such as SVG, LINK (font) or just TEXT.
 * The resources will be automitacally loaded in case they're required for the `ICON_TYPE`.
 */
export var IconResourceType;
(function (IconResourceType) {
    /**
     * An svg based icon requires an SVG resource that must be loaded,
     * this is typically a sprite svg file.
     */
    IconResourceType["SVG"] = "svg";
    /**
     * A font based ICON might require an additional CSS file to be loaded.
     */
    IconResourceType["LINK"] = "link";
    /**
     * Text based icons will simply add the ICON string to the DOM. Text icons do not need an image
     * or CSS pseudo class (i.e. :before), as the text itself is the icon (i.e. +)
     */
    IconResourceType["TEXT"] = "text";
})(IconResourceType || (IconResourceType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLFNBeUJYO0FBekJELFdBQVksU0FBUztJQUNuQiwwQkFBYSxDQUFBO0lBQ2IsOEJBQWlCLENBQUE7SUFDakIsMEJBQWEsQ0FBQTtJQUNiLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsMEJBQWEsQ0FBQTtJQUNiLHNDQUF5QixDQUFBO0lBQ3pCLHNDQUF5QixDQUFBO0lBQ3pCLHdDQUEyQixDQUFBO0lBQzNCLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2YsZ0NBQW1CLENBQUE7SUFDbkIsZ0NBQW1CLENBQUE7SUFDbkIsMEJBQWEsQ0FBQTtJQUNiLHdDQUEyQixDQUFBO0lBQzNCLDBCQUFhLENBQUE7SUFDYix3Q0FBMkIsQ0FBQTtJQUMzQix3Q0FBMkIsQ0FBQTtJQUMzQiw4QkFBaUIsQ0FBQTtJQUNqQixrQ0FBcUIsQ0FBQTtJQUNyQiw0QkFBZSxDQUFBO0lBQ2YsOEJBQWlCLENBQUE7SUFDakIsNEJBQWUsQ0FBQTtJQUNmLHdDQUEyQixDQUFBO0FBQzdCLENBQUMsRUF6QlcsU0FBUyxLQUFULFNBQVMsUUF5QnBCO0FBRUQsTUFBTSxPQUFnQixVQUFVO0NBRS9CO0FBaUNEOzs7R0FHRztBQUNILE1BQU0sQ0FBTixJQUFZLGdCQWdCWDtBQWhCRCxXQUFZLGdCQUFnQjtJQUMxQjs7O09BR0c7SUFDSCwrQkFBVyxDQUFBO0lBRVg7O09BRUc7SUFDSCxpQ0FBYSxDQUFBO0lBQ2I7OztPQUdHO0lBQ0gsaUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFoQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWdCM0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBJQ09OX1RZUEUge1xuICBTVEFSID0gJ1NUQVInLFxuICBTRUFSQ0ggPSAnU0VBUkNIJyxcbiAgQ0FSVCA9ICdDQVJUJyxcbiAgSU5GTyA9ICdJTkZPJyxcbiAgR1JJRCA9ICdHUklEJyxcbiAgTElTVCA9ICdMSVNUJyxcbiAgQ0FSRVRfRE9XTiA9ICdDQVJFVF9ET1dOJyxcbiAgQ0FSRVRfTEVGVCA9ICdDQVJFVF9MRUZUJyxcbiAgQ0FSRVRfUklHSFQgPSAnQ0FSRVRfUklHSFQnLFxuICBDTE9TRSA9ICdDTE9TRScsXG4gIEVSUk9SID0gJ0VSUk9SJyxcbiAgV0FSTklORyA9ICdXQVJOSU5HJyxcbiAgU1VDQ0VTUyA9ICdTVUNDRVNTJyxcbiAgVklTQSA9ICdWSVNBJyxcbiAgTUFTVEVSX0NBUkQgPSAnTUFTVEVSX0NBUkQnLFxuICBBTUVYID0gJ0FNRVgnLFxuICBESU5FUlNfQ0xVQiA9ICdESU5FUlNfQ0xVQicsXG4gIENSRURJVF9DQVJEID0gJ0NSRURJVF9DQVJEJyxcbiAgRVhQQU5EID0gJ0VYUEFORCcsXG4gIENPTExBUFNFID0gJ0NPTExBUFNFJyxcbiAgUkVTRVQgPSAnUkVTRVQnLFxuICBDSVJDTEUgPSAnQ0lSQ0xFJyxcbiAgSEVBUlQgPSAnSEVBUlQnLFxuICBFTVBUWV9IRUFSVCA9ICdFTVBUWV9IRUFSVCcsXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJY29uQ29uZmlnIHtcbiAgaWNvbj86IEljb25PcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIEVhY2ggaWNvbiB0eXBlIGNhbiBiZSBjb25maWd1cmVkIHdpdGggYSBzby1jYWxsZWQgc3ltYm9sLiBUaGUgc3ltYm9sIHdpbGxcbiAgICogYmUgdXNlZCB0byBtYXAgdGhlIGljb24gdG8gYW4gU1ZHIGBzeW1ib2xgIChpZCkgb3IgdG8gdGhlIHN0eWxlIGNsYXNzZXMgb2ZcbiAgICogYSBmb250IGJhc2VkIGljb24uIFRoZSBmb2xsb3dpbmcgY29uZmlndXJhdGlvbiB3b3VsZCBtYXAgdG8gYSBmb250YXdlc29tZVxuICAgKiBpY29uOlxuICAgKlxuICAgKiBpY29uOiB7XG4gICAqICAgc3ltYm9sczoge1xuICAgKiAgICAgQ0FSVDogJ2ZhcyBmYS1zaG9wcGluZy1jYXJ0J1xuICAgKiAgIH1cbiAgICogfVxuICAgKi9cbiAgc3ltYm9scz86IHtcbiAgICBbSUNPTl9UWVBFOiBzdHJpbmddOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc291cmNlcyBhcmUgdXNlZCB0byBtYXAgaWNvbiB0eXBlcyB0byBjZXJ0YWluIGFzc2V0LCBzdWNoIGFzIGFuIFNWRyAoc3ByaXRlKSBpbWFnZS5cbiAgICogVGhlIHJlc291cmNlIHR5cGUgKGBJY29uUmVzb3VyY2VUeXBlYCkgZGljdGF0ZXMgd2hldGhlciBhbiBTVkcgaW1hZ2UgaXMgdXNlZC4gVGhlIFVSTFxuICAgKiBpcyB1c2VkIGZvciB0aGUgU1ZHIHhsaW5rIHJlZmVyZW5jZS5cbiAgICovXG4gIHJlc291cmNlcz86IEljb25Db25maWdSZXNvdXJjZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWdSZXNvdXJjZSB7XG4gIHR5cGU6IEljb25SZXNvdXJjZVR5cGUgfCBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgdHlwZXM/OiAoSUNPTl9UWVBFIHwgc3RyaW5nKVtdO1xufVxuXG4vKipcbiAqIEVhY2ggSUNPTiB0eXBlIGNhbiBoYXZlIGFuIGNvbXBhbmllZCByZXNvdXJjZSB0eXBlLCBzdWNoIGFzIFNWRywgTElOSyAoZm9udCkgb3IganVzdCBURVhULlxuICogVGhlIHJlc291cmNlcyB3aWxsIGJlIGF1dG9taXRhY2FsbHkgbG9hZGVkIGluIGNhc2UgdGhleSdyZSByZXF1aXJlZCBmb3IgdGhlIGBJQ09OX1RZUEVgLlxuICovXG5leHBvcnQgZW51bSBJY29uUmVzb3VyY2VUeXBlIHtcbiAgLyoqXG4gICAqIEFuIHN2ZyBiYXNlZCBpY29uIHJlcXVpcmVzIGFuIFNWRyByZXNvdXJjZSB0aGF0IG11c3QgYmUgbG9hZGVkLFxuICAgKiB0aGlzIGlzIHR5cGljYWxseSBhIHNwcml0ZSBzdmcgZmlsZS5cbiAgICovXG4gIFNWRyA9ICdzdmcnLFxuXG4gIC8qKlxuICAgKiBBIGZvbnQgYmFzZWQgSUNPTiBtaWdodCByZXF1aXJlIGFuIGFkZGl0aW9uYWwgQ1NTIGZpbGUgdG8gYmUgbG9hZGVkLlxuICAgKi9cbiAgTElOSyA9ICdsaW5rJyxcbiAgLyoqXG4gICAqIFRleHQgYmFzZWQgaWNvbnMgd2lsbCBzaW1wbHkgYWRkIHRoZSBJQ09OIHN0cmluZyB0byB0aGUgRE9NLiBUZXh0IGljb25zIGRvIG5vdCBuZWVkIGFuIGltYWdlXG4gICAqIG9yIENTUyBwc2V1ZG8gY2xhc3MgKGkuZS4gOmJlZm9yZSksIGFzIHRoZSB0ZXh0IGl0c2VsZiBpcyB0aGUgaWNvbiAoaS5lLiArKVxuICAgKi9cbiAgVEVYVCA9ICd0ZXh0Jyxcbn1cbiJdfQ==