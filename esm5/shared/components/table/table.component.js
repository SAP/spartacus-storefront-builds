import { __assign, __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, isDevMode, Output, } from '@angular/core';
/**
 * The table component provides a generic DOM structure based on the `dataset` input.
 * The `Table` dataset contains both a type, table structure, table data and controls
 * for pagination and sorting.
 *
 * The table component only supports horizontal table structure.
 *
 * The implementation is fairly "dumb" and only provides the following features:
 * - Use outlet for table headers (`<th>`) and cells (`<td>`).
 * - Localizing table headers, using the `I18nModule`.
 * - Sorting table columns.
 * - Add CSS classes on each cell to
 *
 * Al features are optional.
 *
 * By default, the headers and columns are rendered with an outlet template. The template
 * reference is generated by concatenating the table _type_ and table _label key_.
 * The following snippet shows an outlet generated for the table type "cost-center" with
 * a label "name":
 *
 * ```
 * <th>
 *   <template cxOutlet="tbl.cost-center.header.name">
 *     [localized label is generated here]
 *   </template>
 * </th>
 * ```
 *
 * Similarly, the `<td>` is generated with the outlet template reference `tbl.cost-center.data.name`.
 *
 * This allows container components (and customers) to further customize the table rendering.
 *
 *
 */
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        /**
         * The paginateEvent is triggered when a new page is required. This includes sorting.
         */
        this.paginateEvent = new EventEmitter();
    }
    Object.defineProperty(TableComponent.prototype, "dataset", {
        get: function () {
            return this._dataset;
        },
        set: function (dataset) {
            this._dataset = dataset;
            this.addTableDebugInfo();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the configured data value by the label key.
     * If there's no headerKey available, or no corresponding value, the
     * first value in the data row is returned.
     */
    TableComponent.prototype.getDataValue = function (dataRow, headerKey, index) {
        return dataRow[headerKey] || Object.values(dataRow)[index];
    };
    /**
     * Sorts the table by emitting the pagination to the container/host component.
     */
    TableComponent.prototype.sort = function (header) {
        if (header.sortCode) {
            this.paginateEvent.emit(__assign(__assign({}, this.dataset.pagination), { sort: header.sortCode }));
        }
    };
    /**
     * Generates the table type into the UI in devMode, so that developers
     * can easily get the notion of the table type.
     */
    TableComponent.prototype.addTableDebugInfo = function () {
        var _a, _b;
        if (isDevMode) {
            this.tableType = (_b = (_a = this.dataset) === null || _a === void 0 ? void 0 : _a.structure) === null || _b === void 0 ? void 0 : _b.type;
        }
    };
    __decorate([
        HostBinding('attr.cx-table-type')
    ], TableComponent.prototype, "tableType", void 0);
    __decorate([
        Input()
    ], TableComponent.prototype, "dataset", null);
    __decorate([
        Output()
    ], TableComponent.prototype, "paginateEvent", void 0);
    TableComponent = __decorate([
        Component({
            selector: 'cx-table',
            template: "<table *ngIf=\"dataset?.structure as structure\">\n  <thead *ngIf=\"!structure.hideHeader\">\n    <tr>\n      <th\n        scope=\"col\"\n        *ngFor=\"let header of structure.headers; let i = index\"\n        (click)=\"sort(header)\"\n        [class.sortable]=\"!!header.sortCode\"\n        [class]=\"header.key\"\n      >\n        <!-- render an outlet for each column header -->\n        <ng-template\n          [cxOutlet]=\"\n            'table.' + structure.type + '.header.' + (header.key || i)\n          \"\n          [cxOutletContext]=\"header\"\n        >\n          <!-- Render the label by default, fallback to localize the label by it's key -->\n          {{\n            header.label || (structure.type + '.' + header.key | cxTranslate)\n          }}\n        </ng-template>\n      </th>\n    </tr>\n  </thead>\n\n  <tr *ngFor=\"let row of dataset.data$ | async\">\n    <td *ngFor=\"let col of structure.headers; let i = index\" [class]=\"col.key\">\n      <!-- render an outlet for each cell -->\n      <ng-template\n        [cxOutlet]=\"'table.' + structure.type + '.data.' + (col.key || i)\"\n        [cxOutletContext]=\"row\"\n      >\n        {{ getDataValue(row, col.key, i) }}\n      </ng-template>\n    </td>\n  </tr>\n</table>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBSXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFNSDtJQUFBO1FBYUU7O1dBRUc7UUFDTyxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBZ0M5RSxDQUFDO0lBM0NDLHNCQUFJLG1DQUFPO2FBSVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQU5ELFVBQVksT0FBYztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQVVEOzs7O09BSUc7SUFDSCxxQ0FBWSxHQUFaLFVBQWEsT0FBWSxFQUFFLFNBQWlCLEVBQUUsS0FBYTtRQUN6RCxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFJLEdBQUosVUFBSyxNQUFtQjtRQUN0QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHVCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FDMUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQ3JCLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDTywwQ0FBaUIsR0FBM0I7O1FBQ0UsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsU0FBUyxlQUFHLElBQUksQ0FBQyxPQUFPLDBDQUFFLFNBQVMsMENBQUUsSUFBSSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQTlDa0M7UUFBbEMsV0FBVyxDQUFDLG9CQUFvQixDQUFDO3FEQUFtQjtJQUlyRDtRQURDLEtBQUssRUFBRTtpREFJUDtJQVFTO1FBQVQsTUFBTSxFQUFFO3lEQUFtRTtJQWhCakUsY0FBYztRQUwxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixrdkNBQXFDO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxjQUFjLENBZ0QxQjtJQUFELHFCQUFDO0NBQUEsQUFoREQsSUFnREM7U0FoRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlSGVhZGVyIH0gZnJvbSAnLi90YWJsZS5tb2RlbCc7XG5cbi8qKlxuICogVGhlIHRhYmxlIGNvbXBvbmVudCBwcm92aWRlcyBhIGdlbmVyaWMgRE9NIHN0cnVjdHVyZSBiYXNlZCBvbiB0aGUgYGRhdGFzZXRgIGlucHV0LlxuICogVGhlIGBUYWJsZWAgZGF0YXNldCBjb250YWlucyBib3RoIGEgdHlwZSwgdGFibGUgc3RydWN0dXJlLCB0YWJsZSBkYXRhIGFuZCBjb250cm9sc1xuICogZm9yIHBhZ2luYXRpb24gYW5kIHNvcnRpbmcuXG4gKlxuICogVGhlIHRhYmxlIGNvbXBvbmVudCBvbmx5IHN1cHBvcnRzIGhvcml6b250YWwgdGFibGUgc3RydWN0dXJlLlxuICpcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBpcyBmYWlybHkgXCJkdW1iXCIgYW5kIG9ubHkgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBmZWF0dXJlczpcbiAqIC0gVXNlIG91dGxldCBmb3IgdGFibGUgaGVhZGVycyAoYDx0aD5gKSBhbmQgY2VsbHMgKGA8dGQ+YCkuXG4gKiAtIExvY2FsaXppbmcgdGFibGUgaGVhZGVycywgdXNpbmcgdGhlIGBJMThuTW9kdWxlYC5cbiAqIC0gU29ydGluZyB0YWJsZSBjb2x1bW5zLlxuICogLSBBZGQgQ1NTIGNsYXNzZXMgb24gZWFjaCBjZWxsIHRvXG4gKlxuICogQWwgZmVhdHVyZXMgYXJlIG9wdGlvbmFsLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoZSBoZWFkZXJzIGFuZCBjb2x1bW5zIGFyZSByZW5kZXJlZCB3aXRoIGFuIG91dGxldCB0ZW1wbGF0ZS4gVGhlIHRlbXBsYXRlXG4gKiByZWZlcmVuY2UgaXMgZ2VuZXJhdGVkIGJ5IGNvbmNhdGVuYXRpbmcgdGhlIHRhYmxlIF90eXBlXyBhbmQgdGFibGUgX2xhYmVsIGtleV8uXG4gKiBUaGUgZm9sbG93aW5nIHNuaXBwZXQgc2hvd3MgYW4gb3V0bGV0IGdlbmVyYXRlZCBmb3IgdGhlIHRhYmxlIHR5cGUgXCJjb3N0LWNlbnRlclwiIHdpdGhcbiAqIGEgbGFiZWwgXCJuYW1lXCI6XG4gKlxuICogYGBgXG4gKiA8dGg+XG4gKiAgIDx0ZW1wbGF0ZSBjeE91dGxldD1cInRibC5jb3N0LWNlbnRlci5oZWFkZXIubmFtZVwiPlxuICogICAgIFtsb2NhbGl6ZWQgbGFiZWwgaXMgZ2VuZXJhdGVkIGhlcmVdXG4gKiAgIDwvdGVtcGxhdGU+XG4gKiA8L3RoPlxuICogYGBgXG4gKlxuICogU2ltaWxhcmx5LCB0aGUgYDx0ZD5gIGlzIGdlbmVyYXRlZCB3aXRoIHRoZSBvdXRsZXQgdGVtcGxhdGUgcmVmZXJlbmNlIGB0YmwuY29zdC1jZW50ZXIuZGF0YS5uYW1lYC5cbiAqXG4gKiBUaGlzIGFsbG93cyBjb250YWluZXIgY29tcG9uZW50cyAoYW5kIGN1c3RvbWVycykgdG8gZnVydGhlciBjdXN0b21pemUgdGhlIHRhYmxlIHJlbmRlcmluZy5cbiAqXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5jeC10YWJsZS10eXBlJykgdGFibGVUeXBlOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIF9kYXRhc2V0OiBUYWJsZTtcbiAgQElucHV0KClcbiAgc2V0IGRhdGFzZXQoZGF0YXNldDogVGFibGUpIHtcbiAgICB0aGlzLl9kYXRhc2V0ID0gZGF0YXNldDtcbiAgICB0aGlzLmFkZFRhYmxlRGVidWdJbmZvKCk7XG4gIH1cbiAgZ2V0IGRhdGFzZXQoKTogVGFibGUge1xuICAgIHJldHVybiB0aGlzLl9kYXRhc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYWdpbmF0ZUV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbmV3IHBhZ2UgaXMgcmVxdWlyZWQuIFRoaXMgaW5jbHVkZXMgc29ydGluZy5cbiAgICovXG4gIEBPdXRwdXQoKSBwYWdpbmF0ZUV2ZW50OiBFdmVudEVtaXR0ZXI8UGFnaW5hdGlvbk1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uZmlndXJlZCBkYXRhIHZhbHVlIGJ5IHRoZSBsYWJlbCBrZXkuXG4gICAqIElmIHRoZXJlJ3Mgbm8gaGVhZGVyS2V5IGF2YWlsYWJsZSwgb3Igbm8gY29ycmVzcG9uZGluZyB2YWx1ZSwgdGhlXG4gICAqIGZpcnN0IHZhbHVlIGluIHRoZSBkYXRhIHJvdyBpcyByZXR1cm5lZC5cbiAgICovXG4gIGdldERhdGFWYWx1ZShkYXRhUm93OiBhbnksIGhlYWRlcktleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0YVJvd1toZWFkZXJLZXldIHx8IE9iamVjdC52YWx1ZXMoZGF0YVJvdylbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSB0YWJsZSBieSBlbWl0dGluZyB0aGUgcGFnaW5hdGlvbiB0byB0aGUgY29udGFpbmVyL2hvc3QgY29tcG9uZW50LlxuICAgKi9cbiAgc29ydChoZWFkZXI6IFRhYmxlSGVhZGVyKSB7XG4gICAgaWYgKGhlYWRlci5zb3J0Q29kZSkge1xuICAgICAgdGhpcy5wYWdpbmF0ZUV2ZW50LmVtaXQoe1xuICAgICAgICAuLi50aGlzLmRhdGFzZXQucGFnaW5hdGlvbixcbiAgICAgICAgc29ydDogaGVhZGVyLnNvcnRDb2RlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgdGFibGUgdHlwZSBpbnRvIHRoZSBVSSBpbiBkZXZNb2RlLCBzbyB0aGF0IGRldmVsb3BlcnNcbiAgICogY2FuIGVhc2lseSBnZXQgdGhlIG5vdGlvbiBvZiB0aGUgdGFibGUgdHlwZS5cbiAgICovXG4gIHByb3RlY3RlZCBhZGRUYWJsZURlYnVnSW5mbygpIHtcbiAgICBpZiAoaXNEZXZNb2RlKSB7XG4gICAgICB0aGlzLnRhYmxlVHlwZSA9IHRoaXMuZGF0YXNldD8uc3RydWN0dXJlPy50eXBlO1xuICAgIH1cbiAgfVxufVxuIl19