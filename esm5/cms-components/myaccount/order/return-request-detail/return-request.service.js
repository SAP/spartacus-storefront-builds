import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { OrderReturnRequestService, RoutingService, ReturnRequest, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var ReturnRequestService = /** @class */ (function () {
    function ReturnRequestService(routingService, returnRequestService, globalMessageService) {
        this.routingService = routingService;
        this.returnRequestService = returnRequestService;
        this.globalMessageService = globalMessageService;
    }
    Object.defineProperty(ReturnRequestService.prototype, "isCancelling$", {
        get: function () {
            return this.returnRequestService.getCancelReturnRequestLoading();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReturnRequestService.prototype, "isCancelSuccess$", {
        get: function () {
            return this.returnRequestService.getCancelReturnRequestSuccess();
        },
        enumerable: true,
        configurable: true
    });
    ReturnRequestService.prototype.getReturnRequest = function () {
        var _this = this;
        return combineLatest([
            this.routingService.getRouterState(),
            this.returnRequestService.getOrderReturnRequest(),
            this.returnRequestService.getReturnRequestLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), routingState = _b[0], returnRequest = _b[1], isLoading = _b[2];
            return [
                routingState.state.params['returnCode'],
                returnRequest,
                isLoading,
            ];
        }), filter(function (_a) {
            var _b = __read(_a, 1), returnCode = _b[0];
            return Boolean(returnCode);
        }), tap(function (_a) {
            var _b = __read(_a, 3), returnCode = _b[0], returnRequest = _b[1], isLoading = _b[2];
            if ((returnRequest === undefined || returnRequest.rma !== returnCode) &&
                !isLoading) {
                _this.returnRequestService.loadOrderReturnRequestDetail(returnCode);
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], returnRequest = _b[1];
            return returnRequest;
        }), filter(Boolean), distinctUntilChanged());
    };
    ReturnRequestService.prototype.clearReturnRequest = function () {
        this.returnRequestService.clearOrderReturnRequestDetail();
    };
    ReturnRequestService.prototype.cancelReturnRequest = function (returnRequestCode) {
        this.returnRequestService.cancelOrderReturnRequest(returnRequestCode, {
            status: 'CANCELLING',
        });
    };
    ReturnRequestService.prototype.cancelSuccess = function (rma) {
        this.returnRequestService.resetCancelReturnRequestProcessState();
        this.globalMessageService.add({
            key: 'returnRequest.cancelSuccess',
            params: { rma: rma },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routingService.go({
            cxRoute: 'orders',
        });
    };
    ReturnRequestService.prototype.backToList = function () {
        this.routingService.go({ cxRoute: 'orders' }, null, {
            state: {
                activeTab: 1,
            },
        });
    };
    ReturnRequestService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderReturnRequestService },
        { type: GlobalMessageService }
    ]; };
    ReturnRequestService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ReturnRequestService_Factory() { return new ReturnRequestService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.OrderReturnRequestService), i0.ɵɵinject(i1.GlobalMessageService)); }, token: ReturnRequestService, providedIn: "root" });
    ReturnRequestService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ReturnRequestService);
    return ReturnRequestService;
}());
export { ReturnRequestService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLGNBQWMsRUFDZCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUt4RTtJQUNFLDhCQUNZLGNBQThCLEVBQzlCLG9CQUErQyxFQUMvQyxvQkFBMEM7UUFGMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDO0lBRUosc0JBQUksK0NBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ25FLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztRQUNuRSxDQUFDOzs7T0FBQTtJQUVELCtDQUFnQixHQUFoQjtRQUFBLGlCQXdCQztRQXZCQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRTtZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUU7WUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixFQUFFO1NBQ3BELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLFVBQUMsRUFBd0M7Z0JBQXhDLGtCQUF3QyxFQUF2QyxvQkFBWSxFQUFFLHFCQUFhLEVBQUUsaUJBQVM7WUFBTSxPQUFBO2dCQUNoRCxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZDLGFBQWE7Z0JBQ2IsU0FBUzthQUNWO1FBSmlELENBSWpELENBQUMsRUFDRixNQUFNLENBQUMsVUFBQyxFQUFZO2dCQUFaLGtCQUFZLEVBQVgsa0JBQVU7WUFBTSxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFBbkIsQ0FBbUIsQ0FBQyxFQUM3QyxHQUFHLENBQUMsVUFBQyxFQUFzQztnQkFBdEMsa0JBQXNDLEVBQXJDLGtCQUFVLEVBQUUscUJBQWEsRUFBRSxpQkFBUztZQUN4QyxJQUNFLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQztnQkFDakUsQ0FBQyxTQUFTLEVBQ1Y7Z0JBQ0EsS0FBSSxDQUFDLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUMsRUFBa0I7Z0JBQWxCLGtCQUFrQixFQUFqQixTQUFDLEVBQUUscUJBQWE7WUFBTSxPQUFBLGFBQWE7UUFBYixDQUFhLENBQUMsRUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQsaURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELGtEQUFtQixHQUFuQixVQUFvQixpQkFBeUI7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixFQUFFO1lBQ3BFLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0NBQW9DLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtZQUNFLEdBQUcsRUFBRSw2QkFBNkI7WUFDbEMsTUFBTSxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUU7U0FDaEIsRUFDRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFO1lBQ2xELEtBQUssRUFBRTtnQkFDTCxTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckUyQixjQUFjO2dCQUNSLHlCQUF5QjtnQkFDekIsb0JBQW9COzs7SUFKM0Msb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0F3RWhDOytCQXRGRDtDQXNGQyxBQXhFRCxJQXdFQztTQXhFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgUmV0dXJuUmVxdWVzdCxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5SZXF1ZXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCBpc0NhbmNlbGxpbmckKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmdldENhbmNlbFJldHVyblJlcXVlc3RMb2FkaW5nKCk7XG4gIH1cblxuICBnZXQgaXNDYW5jZWxTdWNjZXNzJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRDYW5jZWxSZXR1cm5SZXF1ZXN0U3VjY2VzcygpO1xuICB9XG5cbiAgZ2V0UmV0dXJuUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCksXG4gICAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmdldE9yZGVyUmV0dXJuUmVxdWVzdCgpLFxuICAgICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRSZXR1cm5SZXF1ZXN0TG9hZGluZygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtyb3V0aW5nU3RhdGUsIHJldHVyblJlcXVlc3QsIGlzTG9hZGluZ10pID0+IFtcbiAgICAgICAgcm91dGluZ1N0YXRlLnN0YXRlLnBhcmFtc1sncmV0dXJuQ29kZSddLFxuICAgICAgICByZXR1cm5SZXF1ZXN0LFxuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICBdKSxcbiAgICAgIGZpbHRlcigoW3JldHVybkNvZGVdKSA9PiBCb29sZWFuKHJldHVybkNvZGUpKSxcbiAgICAgIHRhcCgoW3JldHVybkNvZGUsIHJldHVyblJlcXVlc3QsIGlzTG9hZGluZ10pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChyZXR1cm5SZXF1ZXN0ID09PSB1bmRlZmluZWQgfHwgcmV0dXJuUmVxdWVzdC5ybWEgIT09IHJldHVybkNvZGUpICYmXG4gICAgICAgICAgIWlzTG9hZGluZ1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmxvYWRPcmRlclJldHVyblJlcXVlc3REZXRhaWwocmV0dXJuQ29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbXywgcmV0dXJuUmVxdWVzdF0pID0+IHJldHVyblJlcXVlc3QpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBjbGVhclJldHVyblJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jbGVhck9yZGVyUmV0dXJuUmVxdWVzdERldGFpbCgpO1xuICB9XG5cbiAgY2FuY2VsUmV0dXJuUmVxdWVzdChyZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jYW5jZWxPcmRlclJldHVyblJlcXVlc3QocmV0dXJuUmVxdWVzdENvZGUsIHtcbiAgICAgIHN0YXR1czogJ0NBTkNFTExJTkcnLFxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsU3VjY2VzcyhybWE6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UucmVzZXRDYW5jZWxSZXR1cm5SZXF1ZXN0UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JldHVyblJlcXVlc3QuY2FuY2VsU3VjY2VzcycsXG4gICAgICAgIHBhcmFtczogeyBybWEgfSxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgY3hSb3V0ZTogJ29yZGVycycsXG4gICAgfSk7XG4gIH1cblxuICBiYWNrVG9MaXN0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnb3JkZXJzJyB9LCBudWxsLCB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBhY3RpdmVUYWI6IDEsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=