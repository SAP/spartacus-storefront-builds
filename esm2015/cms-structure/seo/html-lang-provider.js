import { APP_INITIALIZER } from '@angular/core';
import { WindowRef, LanguageService } from '@spartacus/core';
export const htmlLangProvider = {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: setHtmlLangAttribute,
    deps: [WindowRef, LanguageService],
};
/**
 * Sets active language in <html lang="">
 */
export function setHtmlLangAttribute(winRef, languageService) {
    const result = () => {
        languageService.getActive().subscribe((lang) => {
            winRef.document.documentElement.lang = lang;
        });
    };
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1sYW5nLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vaHRtbC1sYW5nLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBYTtJQUN4QyxPQUFPLEVBQUUsZUFBZTtJQUN4QixLQUFLLEVBQUUsSUFBSTtJQUNYLFVBQVUsRUFBRSxvQkFBb0I7SUFDaEMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztDQUNuQyxDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLE1BQWlCLEVBQ2pCLGVBQWdDO0lBRWhDLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsQixlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYsIExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBodG1sTGFuZ1Byb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICBtdWx0aTogdHJ1ZSxcbiAgdXNlRmFjdG9yeTogc2V0SHRtbExhbmdBdHRyaWJ1dGUsXG4gIGRlcHM6IFtXaW5kb3dSZWYsIExhbmd1YWdlU2VydmljZV0sXG59O1xuXG4vKipcbiAqIFNldHMgYWN0aXZlIGxhbmd1YWdlIGluIDxodG1sIGxhbmc9XCJcIj5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEh0bWxMYW5nQXR0cmlidXRlKFxuICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgbGFuZ3VhZ2VTZXJ2aWNlLmdldEFjdGl2ZSgpLnN1YnNjcmliZSgobGFuZykgPT4ge1xuICAgICAgd2luUmVmLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbGFuZztcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==