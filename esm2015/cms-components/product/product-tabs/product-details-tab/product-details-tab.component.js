import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentProductService } from '../../current-product.service';
let ProductDetailsTabComponent = class ProductDetailsTabComponent {
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
    }
    ngOnInit() {
        this.product$ = this.currentProductService.getProduct();
    }
};
ProductDetailsTabComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductDetailsTabComponent = __decorate([
    Component({
        selector: 'cx-product-details-tab',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductDetailsTabComponent);
export { ProductDetailsTabComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdGFicy9wcm9kdWN0LWRldGFpbHMtdGFiL3Byb2R1Y3QtZGV0YWlscy10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBT3RFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBR3JDLFlBQXNCLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUcsQ0FBQztJQUV0RSxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUE7O1lBTDhDLHFCQUFxQjs7QUFIdkQsMEJBQTBCO0lBTHRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsMkpBQW1EO1FBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVywwQkFBMEIsQ0FRdEM7U0FSWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWRldGFpbHMtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZGV0YWlscy10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgfVxufVxuIl19