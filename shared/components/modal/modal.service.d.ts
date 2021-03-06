import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from './modal-options';
import { ModalRef } from './modal-ref';
/**
 * A service to handle modal
 */
export declare class ModalService {
    private ngbModalService;
    private modals;
    constructor(ngbModalService: NgbModal);
    open(content: any, options?: ModalOptions): ModalRef;
    protected handleModalRemoveEvents(modal: ModalRef): void;
    getActiveModal(): ModalRef;
    dismissActiveModal(reason?: any): void;
    closeActiveModal(reason?: any): void;
}
