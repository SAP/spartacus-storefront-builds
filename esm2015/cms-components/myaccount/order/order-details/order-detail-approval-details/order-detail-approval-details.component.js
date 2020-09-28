import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
export class OrderDetailApprovalDetailsComponent {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
}
OrderDetailApprovalDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-approval-details',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <ng-container *ngIf=\"order.permissionResults?.length\">\n    <div class=\"cx-approval-header row\">\n      <div class=\"cx-approval-label col-sm-12\">\n        {{ 'orderDetails.approvalDetails.header' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"row\">\n      <table class=\"table table-striped cx-approval-table\">\n        <thead class=\"cx-approval-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'orderDetails.approvalDetails.permission' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'orderDetails.approvalDetails.approver' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'orderDetails.approvalDetails.status' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'orderDetails.approvalDetails.approverComments' | cxTranslate }}\n          </th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let permissionResult of order.permissionResults\">\n            <td class=\"cx-approval-permissionCode\">\n              <div class=\"d-md-none cx-approval-table-label\">\n                {{ 'orderDetails.approvalDetails.permission' | cxTranslate }}\n              </div>\n              {{\n                'orderDetails.approvalDetails.permissionType'\n                  | cxTranslate\n                    : { context: permissionResult.permissionType.code }\n              }}\n            </td>\n            <td class=\"cx-approval-approverName\">\n              <div class=\"d-md-none cx-approval-table-label\">\n                {{ 'orderDetails.approvalDetails.approver' | cxTranslate }}\n              </div>\n              {{ permissionResult.approverName }}\n            </td>\n            <td class=\"cx-approval-statusDisplay\">\n              <div class=\"d-md-none cx-approval-table-label\">\n                {{ 'orderDetails.approvalDetails.status' | cxTranslate }}\n              </div>\n              {{ permissionResult.statusDisplay }}\n            </td>\n            <td class=\"cx-approval-approvalNotes\">\n              <div class=\"d-md-none cx-approval-table-label\">\n                {{\n                  'orderDetails.approvalDetails.approverComments' | cxTranslate\n                }}\n              </div>\n              {{\n                permissionResult.approverNotes\n                  ? permissionResult.approverNotes\n                  : ('orderDetails.approvalDetails.noApprovalNotes'\n                    | cxTranslate)\n              }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OrderDetailApprovalDetailsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWFwcHJvdmFsLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWFwcHJvdmFsLWRldGFpbHMvb3JkZXItZGV0YWlsLWFwcHJvdmFsLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPL0QsTUFBTSxPQUFPLG1DQUFtQztJQUc5QyxZQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUY5RCxXQUFNLEdBQXNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUVOLENBQUM7OztZQVJuRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsZ29GQUE2RDtnQkFDN0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWFwcHJvdmFsLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItZGV0YWlsLWFwcHJvdmFsLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxBcHByb3ZhbERldGFpbHNDb21wb25lbnQge1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+ID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxufVxuIl19