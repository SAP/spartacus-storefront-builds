import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FormatTimerPipe = class FormatTimerPipe {
    transform(totalSeconds) {
        if (totalSeconds < 0) {
            totalSeconds = 0;
        }
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        let zeroPaddedMinutes;
        if (minutes < 10) {
            zeroPaddedMinutes = ('00' + minutes).slice(-2);
        }
        else {
            zeroPaddedMinutes = minutes + '';
        }
        const zeroPaddedSeconds = ('00' + seconds).slice(-2);
        return `${zeroPaddedMinutes}:${zeroPaddedSeconds}`;
    }
};
FormatTimerPipe = __decorate([
    Pipe({
        name: 'formatTimer',
    })
], FormatTimerPipe);
export { FormatTimerPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXRpbWVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsU0FBUyxDQUFDLFlBQW9CO1FBQzVCLElBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtZQUNwQixZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsTUFBTSxPQUFPLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEQsTUFBTSxPQUFPLEdBQVcsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLGlCQUF5QixDQUFDO1FBQzlCLElBQUksT0FBTyxHQUFHLEVBQUUsRUFBRTtZQUNoQixpQkFBaUIsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0wsaUJBQWlCLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNsQztRQUNELE1BQU0saUJBQWlCLEdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxHQUFHLGlCQUFpQixJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUE7QUFoQlksZUFBZTtJQUgzQixJQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsYUFBYTtLQUNwQixDQUFDO0dBQ1csZUFBZSxDQWdCM0I7U0FoQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZm9ybWF0VGltZXInLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRUaW1lclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRvdGFsU2Vjb25kczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodG90YWxTZWNvbmRzIDwgMCkge1xuICAgICAgdG90YWxTZWNvbmRzID0gMDtcbiAgICB9XG4gICAgY29uc3QgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kczogbnVtYmVyID0gdG90YWxTZWNvbmRzICUgNjA7XG4gICAgbGV0IHplcm9QYWRkZWRNaW51dGVzOiBzdHJpbmc7XG4gICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgemVyb1BhZGRlZE1pbnV0ZXMgPSAoJzAwJyArIG1pbnV0ZXMpLnNsaWNlKC0yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgemVyb1BhZGRlZE1pbnV0ZXMgPSBtaW51dGVzICsgJyc7XG4gICAgfVxuICAgIGNvbnN0IHplcm9QYWRkZWRTZWNvbmRzOiBzdHJpbmcgPSAoJzAwJyArIHNlY29uZHMpLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gYCR7emVyb1BhZGRlZE1pbnV0ZXN9OiR7emVyb1BhZGRlZFNlY29uZHN9YDtcbiAgfVxufVxuIl19