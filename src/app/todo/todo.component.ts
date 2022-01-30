import { Component, Injector, OnInit, ViewEncapsulation } from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent extends AppComponentBase implements OnInit {

    constructor(
        private _injector: Injector
    ) {
        super(_injector);
    }

    ngOnInit(): void {
    }
}