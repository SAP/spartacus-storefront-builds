import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { ConsentManagementModule } from '../../../cms-components/myaccount/consent-management/consent-management.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { AnonymousConsentDialogComponent } from './dialog/anonymous-consent-dialog.component';
var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    AnonymousConsentsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                IconModule,
                SpinnerModule,
                ConsentManagementModule,
            ],
            declarations: [AnonymousConsentDialogComponent],
            entryComponents: [AnonymousConsentDialogComponent],
            exports: [AnonymousConsentDialogComponent],
        })
    ], AnonymousConsentsModule);
    return AnonymousConsentsModule;
}());
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9hbm9ueW1vdXMtY29uc2VudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3pILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQWM5RjtJQUFBO0lBQXNDLENBQUM7SUFBMUIsdUJBQXVCO1FBWm5DLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixhQUFhO2dCQUNiLHVCQUF1QjthQUN4QjtZQUNELFlBQVksRUFBRSxDQUFDLCtCQUErQixDQUFDO1lBQy9DLGVBQWUsRUFBRSxDQUFDLCtCQUErQixDQUFDO1lBQ2xELE9BQU8sRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzNDLENBQUM7T0FDVyx1QkFBdUIsQ0FBRztJQUFELDhCQUFDO0NBQUEsQUFBdkMsSUFBdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvY29uc2VudC1tYW5hZ2VtZW50L2NvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL2Fub255bW91cy1jb25zZW50LWRpYWxvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUge31cbiJdfQ==