import { Injector, ElementRef } from '@angular/core';
import { ModalOptions } from 'ngx-bootstrap/modal';

export abstract class AppComponentBase {

    elementRef: ElementRef;
    modalSettings: ModalOptions = {
        backdrop: 'static',
        ignoreBackdropClick: false,
        keyboard: false,
    };

    constructor(injector: Injector) {
        this.elementRef = injector.get(ElementRef);
    }

    
}
