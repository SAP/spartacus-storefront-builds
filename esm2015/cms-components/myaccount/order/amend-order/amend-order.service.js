import { __decorate } from "tslib";
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs/operators';
import { OrderDetailsService } from '../order-details/order-details.service';
import { AmendOrderType } from './amend-order.model';
function ValidateQuantity(control) {
    let q = 0;
    Object.keys(control.value).forEach(key => (q += control.value[key]));
    return q > 0 ? null : { required: true };
}
let OrderAmendService = class OrderAmendService {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * Returns entries with an amended quantity.
     */
    getAmendedEntries() {
        return this.getForm().pipe(switchMap(form => {
            return this.getEntries().pipe(map(entries => entries.filter(entry => this.getFormControl(form, entry).value > 0)));
        }));
    }
    getOrder() {
        return this.orderDetailsService.getOrderDetails();
    }
    /**
     * returns the form with form data at runtime
     */
    getForm() {
        return this.getOrder().pipe(tap(order => {
            if (!this.form || this.form.get('orderCode').value !== order.code) {
                this.buildForm(order);
            }
        }), map(() => this.form));
    }
    buildForm(order) {
        this.form = new FormGroup({});
        this.form.addControl('orderCode', new FormControl(order.code));
        const entryGroup = new FormGroup({}, { validators: [ValidateQuantity] });
        this.form.addControl('entries', entryGroup);
        (order.entries || []).forEach(entry => {
            const key = entry.entryNumber.toString();
            entryGroup.addControl(key, new FormControl(0, {
                validators: [
                    Validators.min(0),
                    Validators.max(this.getMaxAmendQuantity(entry)),
                ],
            }));
        });
    }
    getFormControl(form, entry) {
        return form.get('entries').get(entry.entryNumber.toString());
    }
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    getAmendedPrice(entry) {
        const amendedQuantity = this.getFormControl(this.form, entry).value;
        const amendedPrice = Object.assign({}, entry.basePrice);
        amendedPrice.value =
            Math.round(entry.basePrice.value * amendedQuantity * 100) / 100;
        amendedPrice.formattedValue = formatCurrency(amendedPrice.value, 
        // TODO: user current language
        'en', getCurrencySymbol(amendedPrice.currencyIso, 'narrow'), amendedPrice.currencyIso);
        return amendedPrice;
    }
    getMaxAmendQuantity(entry) {
        return ((this.isCancellation()
            ? entry.cancellableQuantity
            : entry.returnableQuantity) || entry.quantity);
    }
    isCancellation() {
        return this.amendType === AmendOrderType.CANCEL;
    }
};
OrderAmendService.ctorParameters = () => [
    { type: OrderDetailsService }
];
OrderAmendService = __decorate([
    Injectable()
], OrderAmendService);
export { OrderAmendService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9hbWVuZC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsU0FBUyxnQkFBZ0IsQ0FBQyxPQUFvQjtJQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQUdELElBQXNCLGlCQUFpQixHQUF2QyxNQUFzQixpQkFBaUI7SUFJckMsWUFBc0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFBRyxDQUFD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SyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVsRSxZQUFZLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FDMUMsWUFBWSxDQUFDLEtBQUs7UUFDbEIsOEJBQThCO1FBQzlCLElBQUksRUFDSixpQkFBaUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUNyRCxZQUFZLENBQUMsV0FBVyxDQUN6QixDQUFDO1FBRUYsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQWlCO1FBQ25DLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQ2hELENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7Q0FDRixDQUFBOztZQXRHNEMsbUJBQW1COztBQUoxQyxpQkFBaUI7SUFEdEMsVUFBVSxFQUFFO0dBQ1MsaUJBQWlCLENBMEd0QztTQTFHcUIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3ksIGdldEN1cnJlbmN5U3ltYm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJFbnRyeSwgUHJpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyVHlwZSB9IGZyb20gJy4vYW1lbmQtb3JkZXIubW9kZWwnO1xuXG5mdW5jdGlvbiBWYWxpZGF0ZVF1YW50aXR5KGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG4gIGxldCBxID0gMDtcbiAgT2JqZWN0LmtleXMoY29udHJvbC52YWx1ZSkuZm9yRWFjaChrZXkgPT4gKHEgKz0gY29udHJvbC52YWx1ZVtrZXldKSk7XG5cbiAgcmV0dXJuIHEgPiAwID8gbnVsbCA6IHsgcmVxdWlyZWQ6IHRydWUgfTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGFtZW5kVHlwZTogQW1lbmRPcmRlclR5cGU7XG4gIHByb3RlY3RlZCBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW50cmllcyBmb3IgdGhlIGdpdmVuIG9yZGVyLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW50cmllcyB3aXRoIGFuIGFtZW5kZWQgcXVhbnRpdHkuXG4gICAqL1xuICBnZXRBbWVuZGVkRW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldEZvcm0oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGZvcm0gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbnRyaWVzKCkucGlwZShcbiAgICAgICAgICBtYXAoZW50cmllcyA9PlxuICAgICAgICAgICAgZW50cmllcy5maWx0ZXIoZW50cnkgPT4gdGhpcy5nZXRGb3JtQ29udHJvbChmb3JtLCBlbnRyeSkudmFsdWUgPiAwKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIHRoZSBhbWVuZGVkIG9yZGVyLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2F2ZSgpOiB2b2lkO1xuXG4gIGdldE9yZGVyKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZvcm0gd2l0aCBmb3JtIGRhdGEgYXQgcnVudGltZVxuICAgKi9cbiAgZ2V0Rm9ybSgpOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4ge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVyKCkucGlwZShcbiAgICAgIHRhcChvcmRlciA9PiB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtIHx8IHRoaXMuZm9ybS5nZXQoJ29yZGVyQ29kZScpLnZhbHVlICE9PSBvcmRlci5jb2RlKSB7XG4gICAgICAgICAgdGhpcy5idWlsZEZvcm0ob3JkZXIpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiB0aGlzLmZvcm0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdvcmRlckNvZGUnLCBuZXcgRm9ybUNvbnRyb2wob3JkZXIuY29kZSkpO1xuXG4gICAgY29uc3QgZW50cnlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe30sIHsgdmFsaWRhdG9yczogW1ZhbGlkYXRlUXVhbnRpdHldIH0pO1xuICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdlbnRyaWVzJywgZW50cnlHcm91cCk7XG5cbiAgICAob3JkZXIuZW50cmllcyB8fCBbXSkuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyeS5lbnRyeU51bWJlci50b1N0cmluZygpO1xuICAgICAgZW50cnlHcm91cC5hZGRDb250cm9sKFxuICAgICAgICBrZXksXG4gICAgICAgIG5ldyBGb3JtQ29udHJvbCgwLCB7XG4gICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW4oMCksXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heCh0aGlzLmdldE1heEFtZW5kUXVhbnRpdHkoZW50cnkpKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGb3JtQ29udHJvbChmb3JtOiBGb3JtR3JvdXAsIGVudHJ5OiBPcmRlckVudHJ5KTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiA8Rm9ybUNvbnRyb2w+Zm9ybS5nZXQoJ2VudHJpZXMnKS5nZXQoZW50cnkuZW50cnlOdW1iZXIudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXMgZGlzY3Vzc2VkLCB0aGlzIGNhbGN1bGF0aW9uIGlzIG1vdmVkIHRvIFNQQSBzaWRlLlxuICAgKiBUaGUgY2FsY3VsYXRpb24gYW5kIHZhbGlkYXRpb24gc2hvdWxkIGJlIGluIGJhY2tlbmQgZmFjYWRlIGxheWVyLlxuICAgKi9cbiAgZ2V0QW1lbmRlZFByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2Uge1xuICAgIGNvbnN0IGFtZW5kZWRRdWFudGl0eSA9IHRoaXMuZ2V0Rm9ybUNvbnRyb2wodGhpcy5mb3JtLCBlbnRyeSkudmFsdWU7XG4gICAgY29uc3QgYW1lbmRlZFByaWNlID0gT2JqZWN0LmFzc2lnbih7fSwgZW50cnkuYmFzZVByaWNlKTtcbiAgICBhbWVuZGVkUHJpY2UudmFsdWUgPVxuICAgICAgTWF0aC5yb3VuZChlbnRyeS5iYXNlUHJpY2UudmFsdWUgKiBhbWVuZGVkUXVhbnRpdHkgKiAxMDApIC8gMTAwO1xuXG4gICAgYW1lbmRlZFByaWNlLmZvcm1hdHRlZFZhbHVlID0gZm9ybWF0Q3VycmVuY3koXG4gICAgICBhbWVuZGVkUHJpY2UudmFsdWUsXG4gICAgICAvLyBUT0RPOiB1c2VyIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgICdlbicsXG4gICAgICBnZXRDdXJyZW5jeVN5bWJvbChhbWVuZGVkUHJpY2UuY3VycmVuY3lJc28sICduYXJyb3cnKSxcbiAgICAgIGFtZW5kZWRQcmljZS5jdXJyZW5jeUlzb1xuICAgICk7XG5cbiAgICByZXR1cm4gYW1lbmRlZFByaWNlO1xuICB9XG5cbiAgZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeTogT3JkZXJFbnRyeSkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0NhbmNlbGxhdGlvbigpXG4gICAgICAgID8gZW50cnkuY2FuY2VsbGFibGVRdWFudGl0eVxuICAgICAgICA6IGVudHJ5LnJldHVybmFibGVRdWFudGl0eSkgfHwgZW50cnkucXVhbnRpdHlcbiAgICApO1xuICB9XG5cbiAgaXNDYW5jZWxsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1lbmRUeXBlID09PSBBbWVuZE9yZGVyVHlwZS5DQU5DRUw7XG4gIH1cbn1cbiJdfQ==