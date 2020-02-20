import { HttpUrlEncodingCodec } from '@angular/common/http';
import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facet, ProductSearchPage } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { ProductListComponentService } from '../container/product-list-component.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductFacetNavigationComponent implements OnInit, OnDestroy {
    private modalService;
    private activatedRoute;
    private productListComponentService;
    private sub;
    iconTypes: typeof ICON_TYPE;
    activeFacetValueCode: string;
    searchResult: ProductSearchPage;
    showAllPerFacetMap: Map<String, boolean>;
    protected queryCodec: HttpUrlEncodingCodec;
    private collapsedFacets;
    searchResult$: Observable<ProductSearchPage>;
    visibleFacets$: Observable<Facet[]>;
    constructor(modalService: ModalService, activatedRoute: ActivatedRoute, productListComponentService: ProductListComponentService);
    ngOnInit(): void;
    openFilterModal(content: any): void;
    toggleValue(query: string): void;
    showLess(facetName: String): void;
    showMore(facetName: String): void;
    private updateShowAllPerFacetMap;
    isFacetCollapsed(facetName: string): boolean;
    toggleFacet(facetName: string): void;
    getVisibleFacetValues(facet: Facet): Facet[];
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductFacetNavigationComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductFacetNavigationComponent, "cx-product-facet-navigation", never, {}, {}, never>;
}

//# sourceMappingURL=product-facet-navigation.component.d.ts.map