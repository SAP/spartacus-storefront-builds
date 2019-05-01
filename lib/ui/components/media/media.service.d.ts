import { OccConfig } from '@spartacus/core';
import { LayoutConfig } from '../../layout/index';
import { Media } from './media.model';
export declare class MediaService {
    protected config: OccConfig;
    protected layoutConfig: LayoutConfig;
    constructor(config: OccConfig, layoutConfig: LayoutConfig);
    private mediaFormats;
    getImage(media: any, format?: string, alt?: string): Media;
    getMissingImage(): string;
    private getMainImage;
    private getAlt;
    /**
     * builds a set of images aligned with the breakpoints
     */
    private getSrcSet;
    private getImageUrl;
    private getBaseUrl;
}
