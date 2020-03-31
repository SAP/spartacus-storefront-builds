import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Renderer2, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * The rating component can be used in disabled mode,
         * so that the interation is not provided.
         */
        this.disabled = false;
        /**
         * Emits the given rating when the user clicks on a star.
         */
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.initialRate = 0;
        this.iconTypes = ICON_TYPE;
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        this.setRate(this.rating, true);
    };
    StarRatingComponent.prototype.setRate = function (value, force) {
        if (!this.disabled || force) {
            this.renderer.setAttribute(this.el.nativeElement, 'style', "--star-fill:" + (value || this.initialRate) + ";");
        }
    };
    StarRatingComponent.prototype.saveRate = function (rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    };
    StarRatingComponent.prototype.setRateOnEvent = function (event, rating) {
        if (event.code === 'Space') {
            event.preventDefault();
            this.setRate(rating);
        }
    };
    StarRatingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(), HostBinding('attr.disabled')
    ], StarRatingComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], StarRatingComponent.prototype, "rating", void 0);
    __decorate([
        Output()
    ], StarRatingComponent.prototype, "change", void 0);
    StarRatingComponent = __decorate([
        Component({
            selector: 'cx-star-rating',
            template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (keydown)=\"setRateOnEvent($event, i)\"\n  (click)=\"saveRate(i)\"\n  [attr.tabindex]=\"disabled ? null : 0\"\n></cx-icon>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], StarRatingComponent);
    return StarRatingComponent;
}());
export { StarRatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTy9EO0lBc0JFLDZCQUFzQixFQUFjLEVBQVksUUFBbUI7UUFBN0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVc7UUFyQm5FOzs7V0FHRztRQUNvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT3hEOztXQUVHO1FBQ0gsNENBQTRDO1FBQ2xDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXRDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLGNBQVMsR0FBRyxTQUFTLENBQUM7SUFFZ0QsQ0FBQztJQUV2RSxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLEtBQWU7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsT0FBTyxFQUNQLGtCQUFlLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxPQUFHLENBQzVDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLEtBQVUsRUFBRSxNQUFjO1FBQ3ZDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOztnQkE5QnlCLFVBQVU7Z0JBQXNCLFNBQVM7O0lBakI1QjtRQUF0QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDO3lEQUFrQjtJQUsvQztRQUFSLEtBQUssRUFBRTt1REFBZ0I7SUFNZDtRQUFULE1BQU0sRUFBRTt1REFBcUM7SUFoQm5DLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLHFTQUEyQztZQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csbUJBQW1CLENBcUQvQjtJQUFELDBCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0YXItcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHJhdGluZyBjb21wb25lbnQgY2FuIGJlIHVzZWQgaW4gZGlzYWJsZWQgbW9kZSxcbiAgICogc28gdGhhdCB0aGUgaW50ZXJhdGlvbiBpcyBub3QgcHJvdmlkZWQuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgc29tZSBjb2xvcmZ1bCBzdGFycyBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSByYXRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIGdpdmVuIHJhdGluZyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN0YXIuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBpbml0aWFsUmF0ZSA9IDA7XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRSYXRlKHRoaXMucmF0aW5nLCB0cnVlKTtcbiAgfVxuXG4gIHNldFJhdGUodmFsdWU6IG51bWJlciwgZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkIHx8IGZvcmNlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICBgLS1zdGFyLWZpbGw6JHt2YWx1ZSB8fCB0aGlzLmluaXRpYWxSYXRlfTtgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVSYXRlKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsUmF0ZSA9IHJhdGluZztcbiAgICB0aGlzLnNldFJhdGUocmF0aW5nKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJhdGluZyk7XG4gIH1cblxuICBzZXRSYXRlT25FdmVudChldmVudDogYW55LCByYXRpbmc6IG51bWJlcikge1xuICAgIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRSYXRlKHJhdGluZyk7XG4gICAgfVxuICB9XG59XG4iXX0=