import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { StoreDataService, PointOfService } from '@spartacus/core';
import { ICON_TYPE } from './../../../../misc/icon/icon.model';
let StoreFinderListComponent = class StoreFinderListComponent {
    constructor(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.iconTypes = ICON_TYPE;
        this.isDetailsModeVisible = false;
    }
    centerStoreOnMapByIndex(index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    }
    selectStoreItemList(index) {
        this.selectedStoreIndex = index;
        const storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
    showStoreDetails(location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    }
    hideStoreDetails() {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    }
};
StoreFinderListComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input()
], StoreFinderListComponent.prototype, "locations", void 0);
__decorate([
    Input()
], StoreFinderListComponent.prototype, "useMylocation", void 0);
__decorate([
    ViewChild('storeMap')
], StoreFinderListComponent.prototype, "storeMap", void 0);
StoreFinderListComponent = __decorate([
    Component({
        selector: 'cx-store-finder-list',
        template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              [useClickEvent]=\"true\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    [useClickEvent]=\"true\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
    }),
    __param(1, Inject(DOCUMENT))
], StoreFinderListComponent);
export { StoreFinderListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItbGlzdC9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNL0QsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFjbkMsWUFDVSxnQkFBa0MsRUFDaEIsUUFBYTtRQUQvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFKekMsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQU1wQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxLQUFhLEVBQUUsUUFBd0I7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUNwRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLGFBQWEsQ0FBQyxjQUFjLENBQUM7WUFDM0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQXdCO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FDRixDQUFBOztZQXBDNkIsZ0JBQWdCOzRDQUN6QyxNQUFNLFNBQUMsUUFBUTs7QUFkbEI7SUFEQyxLQUFLLEVBQUU7MkRBQ087QUFFZjtJQURDLEtBQUssRUFBRTsrREFDZTtBQUV2QjtJQURDLFNBQVMsQ0FBQyxVQUFVLENBQUM7MERBQ1k7QUFOdkIsd0JBQXdCO0lBSnBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsaXZKQUFpRDtLQUNsRCxDQUFDO0lBaUJHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBaEJSLHdCQUF3QixDQW1EcEM7U0FuRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UsIFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3RvcmUtZmluZGVyLW1hcC9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckxpc3RDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhdGlvbnM6IGFueTtcbiAgQElucHV0KClcbiAgdXNlTXlsb2NhdGlvbjogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgnc3RvcmVNYXAnKVxuICBzdG9yZU1hcDogU3RvcmVGaW5kZXJNYXBDb21wb25lbnQ7XG5cbiAgc2VsZWN0ZWRTdG9yZTogUG9pbnRPZlNlcnZpY2U7XG4gIHNlbGVjdGVkU3RvcmVJbmRleDogbnVtYmVyO1xuICBpc0RldGFpbHNNb2RlVmlzaWJsZTogYm9vbGVhbjtcbiAgc3RvcmVEZXRhaWxzOiBQb2ludE9mU2VydmljZTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5pc0RldGFpbHNNb2RlVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2VudGVyU3RvcmVPbk1hcEJ5SW5kZXgoaW5kZXg6IG51bWJlciwgbG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5zaG93U3RvcmVEZXRhaWxzKGxvY2F0aW9uKTtcbiAgICB0aGlzLnNlbGVjdGVkU3RvcmVJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc2VsZWN0ZWRTdG9yZSA9IGxvY2F0aW9uO1xuICAgIHRoaXMuc3RvcmVNYXAuY2VudGVyTWFwKFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUodGhpcy5sb2NhdGlvbnMuc3RvcmVzW2luZGV4XSksXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUodGhpcy5sb2NhdGlvbnMuc3RvcmVzW2luZGV4XSlcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0U3RvcmVJdGVtTGlzdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlSW5kZXggPSBpbmRleDtcbiAgICBjb25zdCBzdG9yZUxpc3RJdGVtID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS0nICsgaW5kZXgpO1xuICAgIHN0b3JlTGlzdEl0ZW0uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgYmxvY2s6ICdjZW50ZXInLFxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1N0b3JlRGV0YWlscyhsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpIHtcbiAgICB0aGlzLmlzRGV0YWlsc01vZGVWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3JlRGV0YWlscyA9IGxvY2F0aW9uO1xuICB9XG5cbiAgaGlkZVN0b3JlRGV0YWlscygpIHtcbiAgICB0aGlzLmlzRGV0YWlsc01vZGVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZFN0b3JlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RvcmVNYXAucmVuZGVyTWFwKCk7XG4gIH1cbn1cbiJdfQ==