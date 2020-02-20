import { OnInit } from '@angular/core';
import { StoreFinderService, PointOfService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ICON_TYPE } from '../../../misc/icon';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderStoreComponent implements OnInit {
    private storeFinderService;
    private route;
    private routingService;
    location$: Observable<any>;
    isLoading$: Observable<any>;
    iconTypes: typeof ICON_TYPE;
    location: PointOfService;
    disableMap: boolean;
    constructor(storeFinderService: StoreFinderService, route: ActivatedRoute, routingService: RoutingService);
    ngOnInit(): void;
    requestStoresData(): void;
    goBack(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderStoreComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderStoreComponent, "cx-store-finder-store", never, {
    "location": "location";
    "disableMap": "disableMap";
}, {}, never>;
}

//# sourceMappingURL=store-finder-store.component.d.ts.map