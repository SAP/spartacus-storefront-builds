import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, DaysOfWeek, ORDER_TYPE, recurrencePeriod, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
import { CheckoutReplenishmentFormService } from '../../services/checkout-replenishment-form-service';
export class ScheduleReplenishmentOrderComponent {
    constructor(checkoutService, checkoutReplenishmentFormService) {
        this.checkoutService = checkoutService;
        this.checkoutReplenishmentFormService = checkoutReplenishmentFormService;
        this.subscription = new Subscription();
        this.iconTypes = ICON_TYPE;
        this.orderTypes = ORDER_TYPE;
        this.daysOfWeek = Object.keys(DaysOfWeek).map((key) => DaysOfWeek[key]);
        this.recurrencePeriodType = Object.keys(recurrencePeriod).map((key) => recurrencePeriod[key]);
        this.selectedOrderType$ = this.checkoutService.getCurrentOrderType();
        this.isMonthly = false;
        this.isWeekly = false;
        this.currentDaysOfWeek = [];
    }
    ngOnInit() {
        this.subscription.add(this.checkoutReplenishmentFormService
            .getScheduleReplenishmentFormData()
            .subscribe((data) => {
            this.scheduleReplenishmentFormData = data;
        }));
        this.initConfig();
    }
    changeOrderType(orderType) {
        this.checkoutService.setOrderType(orderType);
    }
    changeNumberOfDays(nDays) {
        this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(Object.assign(Object.assign({}, this.scheduleReplenishmentFormData), { numberOfDays: nDays }));
    }
    changeNumberOfWeeks(nWeeks) {
        this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(Object.assign(Object.assign({}, this.scheduleReplenishmentFormData), { numberOfWeeks: nWeeks }));
    }
    changeRecurrencePeriodType(type) {
        this.isWeekly = type === recurrencePeriod.WEEKLY;
        this.isMonthly = type === recurrencePeriod.MONTHLY;
        this.numberOfDays = this.isMonthly
            ? this.createNumberStringArray(31)
            : this.createNumberStringArray(30);
        this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(Object.assign(Object.assign({}, this.scheduleReplenishmentFormData), { recurrencePeriod: type }));
    }
    changeDayOfTheMonth(dayOfMonth) {
        this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(Object.assign(Object.assign({}, this.scheduleReplenishmentFormData), { nthDayOfMonth: dayOfMonth }));
    }
    changeReplenishmentStartDate(date) {
        if (Boolean(date)) {
            this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(Object.assign(Object.assign({}, this.scheduleReplenishmentFormData), { replenishmentStartDate: date }));
        }
    }
    changeRepeatDays(day, isChecked) {
        if (isChecked) {
            this.currentDaysOfWeek = [...this.currentDaysOfWeek];
            this.currentDaysOfWeek.push(day);
            this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(Object.assign(Object.assign({}, this.scheduleReplenishmentFormData), { daysOfWeek: this.currentDaysOfWeek }));
        }
        else {
            const foundDay = this.currentDaysOfWeek.find((data) => day === data);
            if (!foundDay)
                return;
            const index = this.currentDaysOfWeek.indexOf(foundDay);
            this.currentDaysOfWeek.splice(index, 1);
            this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(Object.assign(Object.assign({}, this.scheduleReplenishmentFormData), { daysOfWeek: this.currentDaysOfWeek }));
        }
    }
    hasDaysOfWeekChecked(day) {
        return this.currentDaysOfWeek.includes(day);
    }
    currentISODate(date) {
        return date.split('T')[0];
    }
    initConfig() {
        this.isMonthly =
            this.scheduleReplenishmentFormData.recurrencePeriod ===
                recurrencePeriod.MONTHLY;
        this.isWeekly =
            this.scheduleReplenishmentFormData.recurrencePeriod ===
                recurrencePeriod.WEEKLY;
        this.currentDaysOfWeek = [...this.scheduleReplenishmentFormData.daysOfWeek];
        this.numberOfDays = this.isMonthly
            ? this.createNumberStringArray(31)
            : this.createNumberStringArray(30);
        this.numberOfWeeks = this.createNumberStringArray(12);
        this.currentDate = this.scheduleReplenishmentFormData.replenishmentStartDate;
    }
    createNumberStringArray(n) {
        return Array(n)
            .fill(0)
            .map((_, y) => (y + 1).toString());
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ScheduleReplenishmentOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-schedule-replenishment-order',
                template: "<div class=\"cx-order-type-card\">\n  <div class=\"cx-label-container\">\n    <h5 class=\"cx-order-replenishment-header\">\n      {{ 'checkoutReview.autoReplenishOrder' | cxTranslate }}\n    </h5>\n    <cx-icon [type]=\"iconTypes.CLOCK\"></cx-icon>\n  </div>\n  <div\n    class=\"cx-order-type-container form-check\"\n    *ngFor=\"let type of orderTypes | keyvalue\"\n  >\n    <input\n      id=\"orderType-{{ type.value }}\"\n      class=\"scaled-input form-check-input\"\n      role=\"radio\"\n      type=\"radio\"\n      formControlName=\"orderType\"\n      aria-checked=\"true\"\n      (change)=\"changeOrderType(type.value)\"\n      [value]=\"type.value\"\n      [checked]=\"type.value == (selectedOrderType$ | async)\"\n    />\n    <label\n      class=\"order-type-label form-check-label form-radio-label\"\n      for=\"orderType-{{ type.value }}\"\n    >\n      <div class=\"order-type\">\n        {{ 'checkoutReview.orderType' | cxTranslate: { context: type.value } }}\n      </div>\n    </label>\n  </div>\n  <ng-container\n    *ngIf=\"\n      scheduleReplenishmentFormData &&\n      (selectedOrderType$ | async) === orderTypes.SCHEDULE_REPLENISHMENT_ORDER\n    \"\n  >\n    <div class=\"cx-replenishment-form-data-container\">\n      <div *ngIf=\"!isMonthly\" class=\"cx-days\">\n        <span class=\"form-data-label\">{{\n          'checkoutReview.every' | cxTranslate\n        }}</span>\n        <ng-container *ngIf=\"isWeekly; else isDaily\">\n          <select\n            class=\"form-control\"\n            (change)=\"changeNumberOfWeeks($event.target.value)\"\n          >\n            <option\n              *ngFor=\"let nWeeks of numberOfWeeks\"\n              [value]=\"nWeeks\"\n              [selected]=\"\n                nWeeks === scheduleReplenishmentFormData.numberOfWeeks\n              \"\n            >\n              {{ nWeeks }}\n            </option>\n          </select>\n        </ng-container>\n        <ng-template #isDaily>\n          <select\n            class=\"form-control\"\n            (change)=\"changeNumberOfDays($event.target.value)\"\n          >\n            <option\n              *ngFor=\"let nDays of numberOfDays\"\n              [value]=\"nDays\"\n              [selected]=\"nDays === scheduleReplenishmentFormData.numberOfDays\"\n            >\n              {{ nDays }}\n            </option>\n          </select>\n        </ng-template>\n      </div>\n      <div class=\"cx-month\">\n        <span *ngIf=\"isMonthly\" class=\"form-data-label\">{{\n          'checkoutReview.every' | cxTranslate\n        }}</span>\n        <select\n          class=\"form-control\"\n          (change)=\"changeRecurrencePeriodType($event.target.value)\"\n        >\n          <option\n            *ngFor=\"let type of recurrencePeriodType\"\n            [value]=\"type\"\n            [selected]=\"type === scheduleReplenishmentFormData.recurrencePeriod\"\n          >\n            {{\n              'checkoutReview.recurrencePeriodType'\n                | cxTranslate: { context: type }\n            }}\n          </option>\n        </select>\n      </div>\n      <div *ngIf=\"isMonthly\" class=\"cx-dayMonth\">\n        <span class=\"form-data-label\">{{\n          'checkoutReview.dayOfMonth' | cxTranslate\n        }}</span>\n        <div class=\"cx-day-of-month\">\n          <select\n            class=\"form-control\"\n            (change)=\"changeDayOfTheMonth($event.target.value)\"\n          >\n            <option\n              *ngFor=\"let nDays of numberOfDays\"\n              [value]=\"nDays\"\n              [selected]=\"nDays === scheduleReplenishmentFormData.nthDayOfMonth\"\n            >\n              {{ nDays }}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-replenishment-form-data-container\">\n      <span class=\"form-data-label\">{{\n        'checkoutReview.startOn' | cxTranslate\n      }}</span>\n      <div class=\"cx-replenishment-date\">\n        <input\n          type=\"date\"\n          placeholder=\"yyyy-mm-dd\"\n          [value]=\"currentISODate(currentDate)\"\n          (change)=\"changeReplenishmentStartDate($event.target.value)\"\n        />\n      </div>\n    </div>\n\n    <div\n      *ngIf=\"isWeekly\"\n      class=\"cx-replenishment-form-data-container cx-repeat-days-container\"\n    >\n      <span class=\"cx-repeat-days form-data-label\">{{\n        'checkoutReview.repeatOnDays' | cxTranslate\n      }}</span>\n      <div *ngFor=\"let day of daysOfWeek\" class=\"form-check\">\n        <label for=\"day-{{ day }}\" class=\"cx-week-day\">{{\n          day | titlecase\n        }}</label\n        ><input\n          id=\"day-{{ day }}\"\n          type=\"checkbox\"\n          class=\"form-check-input\"\n          [checked]=\"hasDaysOfWeekChecked(day)\"\n          (change)=\"changeRepeatDays(day, $event.target.checked)\"\n        />\n      </div>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ScheduleReplenishmentOrderComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: CheckoutReplenishmentFormService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtcmVwbGVuaXNobWVudC1vcmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NjaGVkdWxlLXJlcGxlbmlzaG1lbnQtb3JkZXIvc2NoZWR1bGUtcmVwbGVuaXNobWVudC1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGVBQWUsRUFDZixVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixHQUVqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBT3RHLE1BQU0sT0FBTyxtQ0FBbUM7SUFzQjlDLFlBQ1ksZUFBZ0MsRUFDaEMsZ0NBQWtFO1FBRGxFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBdkJ0RSxpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25FLHlCQUFvQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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Q0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLHNCQUFzQixDQUFDO0lBQy9FLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxDQUFTO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNaLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUF6SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLCsxSkFBNEQ7Z0JBQzVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFkQyxlQUFlO1lBUVIsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBEYXlzT2ZXZWVrLFxuICBPUkRFUl9UWVBFLFxuICByZWN1cnJlbmNlUGVyaW9kLFxuICBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXJlcGxlbmlzaG1lbnQtZm9ybS1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2NoZWR1bGUtcmVwbGVuaXNobWVudC1vcmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS1yZXBsZW5pc2htZW50LW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlUmVwbGVuaXNobWVudE9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgb3JkZXJUeXBlcyA9IE9SREVSX1RZUEU7XG4gIGRheXNPZldlZWsgPSBPYmplY3Qua2V5cyhEYXlzT2ZXZWVrKS5tYXAoKGtleSkgPT4gRGF5c09mV2Vla1trZXldKTtcbiAgcmVjdXJyZW5jZVBlcmlvZFR5cGUgPSBPYmplY3Qua2V5cyhyZWN1cnJlbmNlUGVyaW9kKS5tYXAoXG4gICAgKGtleSkgPT4gcmVjdXJyZW5jZVBlcmlvZFtrZXldXG4gICk7XG5cbiAgc2VsZWN0ZWRPcmRlclR5cGUkOiBPYnNlcnZhYmxlPFxuICAgIE9SREVSX1RZUEVcbiAgPiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldEN1cnJlbnRPcmRlclR5cGUoKTtcblxuICBpc01vbnRobHk6IEJvb2xlYW4gPSBmYWxzZTtcbiAgaXNXZWVrbHk6IEJvb2xlYW4gPSBmYWxzZTtcbiAgY3VycmVudERheXNPZldlZWs6IERheXNPZldlZWtbXSA9IFtdO1xuICBudW1iZXJPZkRheXM6IHN0cmluZ1tdO1xuICBudW1iZXJPZldlZWtzOiBzdHJpbmdbXTtcbiAgY3VycmVudERhdGU6IHN0cmluZztcbiAgc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGE6IFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZTogQ2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2VcbiAgICAgICAgLmdldFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhKClcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEgPSBkYXRhO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmluaXRDb25maWcoKTtcbiAgfVxuXG4gIGNoYW5nZU9yZGVyVHlwZShvcmRlclR5cGU6IE9SREVSX1RZUEUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5zZXRPcmRlclR5cGUob3JkZXJUeXBlKTtcbiAgfVxuXG4gIGNoYW5nZU51bWJlck9mRGF5cyhuRGF5czogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZS5zZXRTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSh7XG4gICAgICAuLi50aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLFxuICAgICAgbnVtYmVyT2ZEYXlzOiBuRGF5cyxcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZU51bWJlck9mV2Vla3MobldlZWtzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0UmVwbGVuaXNobWVudEZvcm1TZXJ2aWNlLnNldFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhKHtcbiAgICAgIC4uLnRoaXMuc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEsXG4gICAgICBudW1iZXJPZldlZWtzOiBuV2Vla3MsXG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VSZWN1cnJlbmNlUGVyaW9kVHlwZSh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlzV2Vla2x5ID0gdHlwZSA9PT0gcmVjdXJyZW5jZVBlcmlvZC5XRUVLTFk7XG4gICAgdGhpcy5pc01vbnRobHkgPSB0eXBlID09PSByZWN1cnJlbmNlUGVyaW9kLk1PTlRITFk7XG5cbiAgICB0aGlzLm51bWJlck9mRGF5cyA9IHRoaXMuaXNNb250aGx5XG4gICAgICA/IHRoaXMuY3JlYXRlTnVtYmVyU3RyaW5nQXJyYXkoMzEpXG4gICAgICA6IHRoaXMuY3JlYXRlTnVtYmVyU3RyaW5nQXJyYXkoMzApO1xuXG4gICAgdGhpcy5jaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZS5zZXRTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSh7XG4gICAgICAuLi50aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLFxuICAgICAgcmVjdXJyZW5jZVBlcmlvZDogdHlwZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZURheU9mVGhlTW9udGgoZGF5T2ZNb250aDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZS5zZXRTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSh7XG4gICAgICAuLi50aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLFxuICAgICAgbnRoRGF5T2ZNb250aDogZGF5T2ZNb250aCxcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZVJlcGxlbmlzaG1lbnRTdGFydERhdGUoZGF0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKEJvb2xlYW4oZGF0ZSkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2Uuc2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoe1xuICAgICAgICAuLi50aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLFxuICAgICAgICByZXBsZW5pc2htZW50U3RhcnREYXRlOiBkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlUmVwZWF0RGF5cyhkYXk6IERheXNPZldlZWssIGlzQ2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuY3VycmVudERheXNPZldlZWsgPSBbLi4udGhpcy5jdXJyZW50RGF5c09mV2Vla107XG5cbiAgICAgIHRoaXMuY3VycmVudERheXNPZldlZWsucHVzaChkYXkpO1xuXG4gICAgICB0aGlzLmNoZWNrb3V0UmVwbGVuaXNobWVudEZvcm1TZXJ2aWNlLnNldFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhKHtcbiAgICAgICAgLi4udGhpcy5zY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSxcbiAgICAgICAgZGF5c09mV2VlazogdGhpcy5jdXJyZW50RGF5c09mV2VlayxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmb3VuZERheSA9IHRoaXMuY3VycmVudERheXNPZldlZWsuZmluZCgoZGF0YSkgPT4gZGF5ID09PSBkYXRhKTtcblxuICAgICAgaWYgKCFmb3VuZERheSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuY3VycmVudERheXNPZldlZWsuaW5kZXhPZihmb3VuZERheSk7XG4gICAgICB0aGlzLmN1cnJlbnREYXlzT2ZXZWVrLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIHRoaXMuY2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2Uuc2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoe1xuICAgICAgICAuLi50aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLFxuICAgICAgICBkYXlzT2ZXZWVrOiB0aGlzLmN1cnJlbnREYXlzT2ZXZWVrLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFzRGF5c09mV2Vla0NoZWNrZWQoZGF5OiBEYXlzT2ZXZWVrKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERheXNPZldlZWsuaW5jbHVkZXMoZGF5KTtcbiAgfVxuXG4gIGN1cnJlbnRJU09EYXRlKGRhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhdGUuc3BsaXQoJ1QnKVswXTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmlzTW9udGhseSA9XG4gICAgICB0aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLnJlY3VycmVuY2VQZXJpb2QgPT09XG4gICAgICByZWN1cnJlbmNlUGVyaW9kLk1PTlRITFk7XG5cbiAgICB0aGlzLmlzV2Vla2x5ID1cbiAgICAgIHRoaXMuc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEucmVjdXJyZW5jZVBlcmlvZCA9PT1cbiAgICAgIHJlY3VycmVuY2VQZXJpb2QuV0VFS0xZO1xuXG4gICAgdGhpcy5jdXJyZW50RGF5c09mV2VlayA9IFsuLi50aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLmRheXNPZldlZWtdO1xuXG4gICAgdGhpcy5udW1iZXJPZkRheXMgPSB0aGlzLmlzTW9udGhseVxuICAgICAgPyB0aGlzLmNyZWF0ZU51bWJlclN0cmluZ0FycmF5KDMxKVxuICAgICAgOiB0aGlzLmNyZWF0ZU51bWJlclN0cmluZ0FycmF5KDMwKTtcblxuICAgIHRoaXMubnVtYmVyT2ZXZWVrcyA9IHRoaXMuY3JlYXRlTnVtYmVyU3RyaW5nQXJyYXkoMTIpO1xuXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRoaXMuc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEucmVwbGVuaXNobWVudFN0YXJ0RGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTnVtYmVyU3RyaW5nQXJyYXkobjogbnVtYmVyKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBBcnJheShuKVxuICAgICAgLmZpbGwoMClcbiAgICAgIC5tYXAoKF8sIHkpID0+ICh5ICsgMSkudG9TdHJpbmcoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=