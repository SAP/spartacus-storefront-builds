import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsProductCarouselComponent as model, FeatureConfigService, Product, ProductScope, ProductService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
var ProductCarouselComponent = /** @class */ (function () {
    function ProductCarouselComponent(componentData, productService, features) {
        var _this = this;
        this.componentData = componentData;
        this.productService = productService;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ProductScope.LIST : '';
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map(function (data) { return data.title; }));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map(function (data) { return data.productCodes.trim().split(' '); }), map(function (codes) {
            return codes.map(function (code) { return _this.productService.get(code, _this.PRODUCT_SCOPE); });
        }));
    }
    ProductCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductService },
        { type: FeatureConfigService }
    ]; };
    ProductCarouselComponent = __decorate([
        Component({
            selector: 'cx-product-carousel',
            template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductCarouselComponent);
    return ProductCarouselComponent;
}());
export { ProductCarouselComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDJCQUEyQixJQUFJLEtBQUssRUFDcEMsb0JBQW9CLEVBQ3BCLE9BQU8sRUFDUCxZQUFZLEVBQ1osY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQU8zRjtJQTBDRSxrQ0FDWSxhQUFzQyxFQUN0QyxjQUE4QixFQUM5QixRQUErQjtRQUgzQyxpQkFJSTtRQUhRLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUE1Q3hCLGtCQUFhLEdBQzlCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVqRSxtQkFBYyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEIsQ0FBQztRQUVGOztXQUVHO1FBQ0gsV0FBTSxHQUF1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDbkQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FDeEIsQ0FBQztRQUVGOzs7O1dBSUc7UUFDSCxXQUFNLEdBQXNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNsRSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxFQUNoRCxHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBakQsQ0FBaUQsQ0FBQztRQUFwRSxDQUFvRSxDQUNyRSxDQUNGLENBQUM7SUFxQkMsQ0FBQzs7Z0JBSHVCLGdCQUFnQjtnQkFDZixjQUFjO2dCQUNuQixvQkFBb0I7O0lBN0NoQyx3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiw2aUJBQWdEO1lBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyx3QkFBd0IsQ0ErQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQS9DRCxJQStDQztTQS9DWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgYXMgbW9kZWwsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBQcm9kdWN0LFxuICBQcm9kdWN0U2NvcGUsXG4gIFByb2R1Y3RTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUFJPRFVDVF9TQ09QRSA9XG4gICAgdGhpcy5mZWF0dXJlcyAmJiB0aGlzLmZlYXR1cmVzLmlzTGV2ZWwoJzEuNCcpID8gUHJvZHVjdFNjb3BlLkxJU1QgOiAnJztcblxuICBwcml2YXRlIGNvbXBvbmVudERhdGEkOiBPYnNlcnZhYmxlPG1vZGVsPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9iZXJ2YWJsZSBzdHJpbmcgZm9yIHRoZSB0aXRsZS5cbiAgICovXG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jb21wb25lbnREYXRhJC5waXBlKFxuICAgIG1hcChkYXRhID0+IGRhdGEudGl0bGUpXG4gICk7XG5cbiAgLyoqXG4gICAqIE9iZXJ2YWJsZSB0aGF0IGhvbGRzIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAqIGluIHRoZSB2aWV3cG9pbnQuXG4gICAqL1xuICBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiA9IHRoaXMuY29tcG9uZW50RGF0YSQucGlwZShcbiAgICBtYXAoZGF0YSA9PiBkYXRhLnByb2R1Y3RDb2Rlcy50cmltKCkuc3BsaXQoJyAnKSksXG4gICAgbWFwKGNvZGVzID0+XG4gICAgICBjb2Rlcy5tYXAoY29kZSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlLCB0aGlzLlBST0RVQ1RfU0NPUEUpKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPG1vZGVsPixcbiAgICBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBmZWF0dXJlcz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxtb2RlbD4sXG4gICAgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+LFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19