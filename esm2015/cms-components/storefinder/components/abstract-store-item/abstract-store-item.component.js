import { __decorate } from "tslib";
import { Input, Directive } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
// tslint:disable:directive-class-suffix
let AbstractStoreItemComponent = class AbstractStoreItemComponent {
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
    }
    getDirections(location) {
        const google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        const latitude = this.storeDataService.getStoreLatitude(location);
        const longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    }
    getFormattedStoreAddress(addressParts) {
        return addressParts.filter(Boolean).join(', ');
    }
};
AbstractStoreItemComponent.ctorParameters = () => [
    { type: StoreDataService }
];
__decorate([
    Input()
], AbstractStoreItemComponent.prototype, "location", void 0);
AbstractStoreItemComponent = __decorate([
    Directive()
], AbstractStoreItemComponent);
export { AbstractStoreItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELHdDQUF3QztBQUV4QyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUlyQyxZQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFNUQsYUFBYSxDQUFDLFFBQWE7UUFDekIsTUFBTSxjQUFjLEdBQUcsbURBQW1ELENBQUM7UUFDM0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxPQUFPLGNBQWMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsWUFBc0I7UUFDN0MsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUFaeUMsZ0JBQWdCOztBQUZ4RDtJQURDLEtBQUssRUFBRTs0REFDQztBQUZFLDBCQUEwQjtJQUR0QyxTQUFTLEVBQUU7R0FDQywwQkFBMEIsQ0FnQnRDO1NBaEJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxvY2F0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKSB7fVxuXG4gIGdldERpcmVjdGlvbnMobG9jYXRpb246IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgZ29vZ2xlX21hcF91cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci9DdXJyZW50K0xvY2F0aW9uLyc7XG4gICAgY29uc3QgbGF0aXR1ZGUgPSB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbik7XG4gICAgY29uc3QgbG9uZ2l0dWRlID0gdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uKTtcbiAgICByZXR1cm4gZ29vZ2xlX21hcF91cmwgKyBsYXRpdHVkZSArICcsJyArIGxvbmdpdHVkZTtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZFN0b3JlQWRkcmVzcyhhZGRyZXNzUGFydHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYWRkcmVzc1BhcnRzLmZpbHRlcihCb29sZWFuKS5qb2luKCcsICcpO1xuICB9XG59XG4iXX0=