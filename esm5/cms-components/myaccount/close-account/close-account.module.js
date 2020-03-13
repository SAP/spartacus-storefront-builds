import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { CloseAccountModalComponent } from './components/close-account-modal/close-account-modal.component';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { CloseAccountComponent } from './components/close-account/close-account.component';
var CloseAccountModule = /** @class */ (function () {
    function CloseAccountModule() {
    }
    CloseAccountModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                I18nModule,
                IconModule,
                SpinnerModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        CloseAccountComponent: {
                            component: CloseAccountComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
            ],
            declarations: [CloseAccountComponent, CloseAccountModalComponent],
            exports: [CloseAccountComponent, CloseAccountModalComponent],
            entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
        })
    ], CloseAccountModule);
    return CloseAccountModule;
}());
export { CloseAccountModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jbG9zZS1hY2NvdW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBeUIzRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBdkI5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsVUFBVTtnQkFDVixVQUFVO2dCQUNWLGFBQWE7YUFDZDtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBWTtvQkFDOUIsYUFBYSxFQUFFO3dCQUNiLHFCQUFxQixFQUFFOzRCQUNyQixTQUFTLEVBQUUscUJBQXFCOzRCQUNoQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7eUJBQ3BCO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO1lBQ2pFLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO1lBQzVELGVBQWUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO1NBQ3JFLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbG9zZS1hY2NvdW50LW1vZGFsL2Nsb3NlLWFjY291bnQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ2xvc2VBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQvY2xvc2UtYWNjb3VudC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDbG9zZUFjY291bnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENsb3NlQWNjb3VudENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2xvc2VBY2NvdW50Q29tcG9uZW50LCBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDbG9zZUFjY291bnRDb21wb25lbnQsIENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2xvc2VBY2NvdW50Q29tcG9uZW50LCBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQWNjb3VudE1vZHVsZSB7fVxuIl19