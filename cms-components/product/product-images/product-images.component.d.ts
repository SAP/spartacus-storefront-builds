import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductImagesComponent {
    private currentProductService;
    private mainMediaContainer;
    private product$;
    thumbs$: Observable<any[]>;
    mainImage$: Observable<any>;
    constructor(currentProductService: CurrentProductService);
    openImage(item: any): void;
    isActive(thumbnail: any): Observable<boolean>;
    /** find the index of the main media in the list of media */
    getActive(thumbs: any[]): Observable<number>;
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    private createThumbs;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductImagesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductImagesComponent, "cx-product-images", never, {}, {}, never, never>;
}

//# sourceMappingURL=product-images.component.d.ts.map