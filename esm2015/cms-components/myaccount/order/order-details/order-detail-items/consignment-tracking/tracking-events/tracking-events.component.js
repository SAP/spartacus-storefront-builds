import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsignmentTracking, UserOrderService } from '@spartacus/core';
let TrackingEventsComponent = class TrackingEventsComponent {
    constructor(activeModal, userOrderService) {
        this.activeModal = activeModal;
        this.userOrderService = userOrderService;
    }
    ngOnDestroy() {
        this.userOrderService.clearConsignmentTracking();
    }
};
TrackingEventsComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: UserOrderService }
];
TrackingEventsComponent = __decorate([
    Component({
        selector: 'cx-tracking-events',
        template: "<div class=\"cx-consignment-tracking-dialog\">\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"tracking$ | async as consignmentTracking; else loading\">\n    <div class=\"header modal-header\">\n      <div class=\"title modal-title\">\n        {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <!-- shipment header -->\n    <ng-container\n      *ngIf=\"\n        consignmentTracking?.carrierDetails && consignmentTracking?.trackingID;\n        else noTracking\n      \"\n    >\n      <div class=\"shipment-heading\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.shipped' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ shipDate | cxDate: 'medium' }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.carrier' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.carrierDetails?.name }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.trackingId'\n                  | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              <ng-container *ngIf=\"consignmentTracking?.trackingUrl\">\n                <a target=\"_blank\" [href]=\"consignmentTracking.trackingUrl\">{{\n                  consignmentTracking?.trackingID\n                }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!consignmentTracking?.trackingUrl\">\n                <label>\n                  {{ consignmentTracking?.trackingID }}\n                </label>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- tracking events -->\n    <div class=\"events modal-body\">\n      <ng-container\n        *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n      >\n        <div class=\"event-body\">\n          <div class=\"event-content\">\n            {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n          </div>\n          <div class=\"event-title\">\n            {{ consignmentEvent.referenceCode }}\n          </div>\n          <div class=\"event-content\">{{ consignmentEvent.detail }}</div>\n          <div class=\"event-city\">\n            location: {{ consignmentEvent.location }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #noTracking>\n    <div class=\"no-tracking-heading\">\n      <div class=\"shipment-content\">\n        {{ 'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #loading>\n    <div class=\"tracking-loading\">\n      <div class=\"header modal-header\">\n        <div class=\"title modal-title\">\n          {{\n            'orderDetails.consignmentTracking.dialog.loadingHeader'\n              | cxTranslate\n          }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close btn-dismiss\"\n          aria-label=\"Close\"\n          (click)=\"activeModal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"body modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <cx-spinner></cx-spinner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
    })
], TrackingEventsComponent);
export { TrackingEventsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9jb25zaWdubWVudC10cmFja2luZy90cmFja2luZy1ldmVudHMvdHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPeEUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFLbEMsWUFDUyxXQUEyQixFQUMxQixnQkFBa0M7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQztJQUVKLFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQTs7WUFQdUIsY0FBYztZQUNSLGdCQUFnQjs7QUFQakMsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsbWpKQUErQztLQUNoRCxDQUFDO0dBQ1csdUJBQXVCLENBYW5DO1NBYlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZywgVXNlck9yZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXRyYWNraW5nLWV2ZW50cycsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmFja2luZy1ldmVudHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHRyYWNraW5nJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcbiAgc2hpcERhdGU6IERhdGU7XG4gIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UuY2xlYXJDb25zaWdubWVudFRyYWNraW5nKCk7XG4gIH1cbn1cbiJdfQ==