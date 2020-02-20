import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaginationComponent, PaginationModule } from './pagination/index';
import { SortingComponent } from './sorting/sorting.component';
var ListNavigationModule = /** @class */ (function () {
    function ListNavigationModule() {
    }
    ListNavigationModule = __decorate([
        NgModule({
            imports: [CommonModule, NgSelectModule, FormsModule, PaginationModule],
            declarations: [SortingComponent],
            exports: [SortingComponent, PaginationComponent],
        })
    ], ListNavigationModule);
    return ListNavigationModule;
}());
export { ListNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1uYXZpZ2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2xpc3QtbmF2aWdhdGlvbi9saXN0LW5hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTy9EO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixvQkFBb0I7UUFMaEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7WUFDdEUsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7U0FDakQsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50LCBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi9wYWdpbmF0aW9uL2luZGV4JztcbmltcG9ydCB7IFNvcnRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NvcnRpbmcvc29ydGluZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ1NlbGVjdE1vZHVsZSwgRm9ybXNNb2R1bGUsIFBhZ2luYXRpb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTb3J0aW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NvcnRpbmdDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0TmF2aWdhdGlvbk1vZHVsZSB7fVxuIl19