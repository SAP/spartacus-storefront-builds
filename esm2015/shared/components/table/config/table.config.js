import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import { BREAKPOINT } from '../../../../layout/config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * The `TableConfig` provides a table configurations for specific table types. You can define
 * an all-screen table structure as well as a breakpoint specific table structure. The various
 * table structures are merged from small to large screen configurations, depending on the users
 * screen size.
 *
 * The `table.type` is used as a key to distinguish the various table configurations in the application.
 */
export class TableConfig {
}
TableConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: TableConfig, providedIn: "root" });
TableConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useExisting: Config,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvY29uZmlnL3RhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7OztBQUdyRTs7Ozs7OztHQU9HO0FBS0gsTUFBTSxPQUFnQixXQUFXOzs7O1lBSmhDLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsV0FBVyxFQUFFLE1BQU07YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBUYWJsZVN0cnVjdHVyZUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi90YWJsZS5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBUYWJsZUNvbmZpZ2AgcHJvdmlkZXMgYSB0YWJsZSBjb25maWd1cmF0aW9ucyBmb3Igc3BlY2lmaWMgdGFibGUgdHlwZXMuIFlvdSBjYW4gZGVmaW5lXG4gKiBhbiBhbGwtc2NyZWVuIHRhYmxlIHN0cnVjdHVyZSBhcyB3ZWxsIGFzIGEgYnJlYWtwb2ludCBzcGVjaWZpYyB0YWJsZSBzdHJ1Y3R1cmUuIFRoZSB2YXJpb3VzXG4gKiB0YWJsZSBzdHJ1Y3R1cmVzIGFyZSBtZXJnZWQgZnJvbSBzbWFsbCB0byBsYXJnZSBzY3JlZW4gY29uZmlndXJhdGlvbnMsIGRlcGVuZGluZyBvbiB0aGUgdXNlcnNcbiAqIHNjcmVlbiBzaXplLlxuICpcbiAqIFRoZSBgdGFibGUudHlwZWAgaXMgdXNlZCBhcyBhIGtleSB0byBkaXN0aW5ndWlzaCB0aGUgdmFyaW91cyB0YWJsZSBjb25maWd1cmF0aW9ucyBpbiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZUNvbmZpZyB7XG4gIHRhYmxlPzoge1xuICAgIFt0YWJsZVR5cGU6IHN0cmluZ106IFJlc3BvbnNpdmVUYWJsZUNvbmZpZ3VyYXRpb247XG4gIH07XG4gIHRhYmxlT3B0aW9ucz86IHtcbiAgICAvKipcbiAgICAgKiBHbG9iYWwgY29tcG9uZW50IHRvIHJlbmRlciB0YWJsZSBoZWFkZXIgX2NvbnRlbnRfIChgPHRoPi4uLjwvdGg+YCkuIEEgc3BlY2lmaWMgY29tcG9uZW50XG4gICAgICogY2FuIGJlIGNvbmZpZ3VyZWQgYWx0ZXJuYXRpdmVseSBwZXIgdGFibGUgb3IgdGFibGUgZmllbGQuXG4gICAgICovXG4gICAgaGVhZGVyQ29tcG9uZW50PzogVHlwZTxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogR2xvYmFsIGNvbXBvbmVudCB0byByZW5kZXIgdGFibGUgY2VsbCBfY29udGVudF8gKGA8dGQ+Li4uPC90ZD5gKS4gQSBzcGVjaWZpYyBjb21wb25lbnQgcGVyXG4gICAgICogZmllbGQgY2FuIGJlIGNvbmZpZ3VyZWQgYWx0ZXJuYXRpdmVseS5cbiAgICAgKlxuICAgICAqIElmIG5vIGNvbXBvbmVudCBpcyBhdmFpbGFibGUsIHRoZSB0YWJsZSBjb250ZW50IHdpbGwgcmVuZGVyIGFzLWlzLlxuICAgICAqL1xuICAgIGRhdGFDb21wb25lbnQ/OiBUeXBlPGFueT47XG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIGNvbmZpZ3VyYXRpb24gdG8gaW50cm9kdWNlIGJyZWFrcG9pbnQgc3BlY2lmaWMgdGFibGUgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zaXZlVGFibGVDb25maWd1cmF0aW9uXG4gIGV4dGVuZHMgVGFibGVTdHJ1Y3R1cmVDb25maWd1cmF0aW9uIHtcbiAgLyoqIFRoZSB0YWJsZSBjb25maWd1cmF0aW9ucyBmb3IgYWxsIHNjcmVlbnMgKi9cbiAgW0JSRUFLUE9JTlQueGxdPzogVGFibGVTdHJ1Y3R1cmVDb25maWd1cmF0aW9uO1xuICAvKiogVGhlIHRhYmxlIGNvbmZpZ3VyYXRpb25zIGZvciBsYXJnZSBzY3JlZW5zIGFuZCBzbWFsbGVyICovXG4gIFtCUkVBS1BPSU5ULmxnXT86IFRhYmxlU3RydWN0dXJlQ29uZmlndXJhdGlvbjtcbiAgLyoqIFRoZSB0YWJsZSBjb25maWd1cmF0aW9ucyBmb3IgbWVkaXVtIHNjcmVlbnMgYW5kIHNtYWxsZXIgKi9cbiAgW0JSRUFLUE9JTlQubWRdPzogVGFibGVTdHJ1Y3R1cmVDb25maWd1cmF0aW9uO1xuICAvKiogVGhlIHRhYmxlIGNvbmZpZ3VyYXRpb25zIGZvciBzbWFsbCBzY3JlZW5zIGFuZCBzbWFsbGVyICovXG4gIFtCUkVBS1BPSU5ULnNtXT86IFRhYmxlU3RydWN0dXJlQ29uZmlndXJhdGlvbjtcbiAgLyoqIFRoZSB0YWJsZSBjb25maWd1cmF0aW9ucyBmb3IgZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICBbQlJFQUtQT0lOVC54c10/OiBUYWJsZVN0cnVjdHVyZUNvbmZpZ3VyYXRpb247XG59XG4iXX0=