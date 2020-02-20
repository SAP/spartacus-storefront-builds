import { OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductAttributesComponent implements OnInit {
    protected currentProductService: CurrentProductService;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductAttributesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductAttributesComponent, "cx-product-attributes", never, {}, {}, never>;
}

//# sourceMappingURL=product-attributes.component.d.ts.map