import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let PromotionsComponent = class PromotionsComponent {
    constructor() { }
};
__decorate([
    Input()
], PromotionsComponent.prototype, "promotions", void 0);
PromotionsComponent = __decorate([
    Component({
        selector: 'cx-promotions',
        template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <ul *ngFor=\"let promotion of promotions\">\n    <li>{{ promotion.description }}</li>\n  </ul>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PromotionsComponent);
export { PromotionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSTlCLGdCQUFlLENBQUM7Q0FDakIsQ0FBQTtBQUhDO0lBREMsS0FBSyxFQUFFO3VEQUNnQjtBQUZiLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QiwwS0FBMEM7UUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQUsvQjtTQUxZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9tb3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb21vdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHByb21vdGlvbnM6IFByb21vdGlvbltdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==