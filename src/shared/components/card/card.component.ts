import { ChangeDetectionStrategy, Component, Injector, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppComponentBase } from "@shared/app-component-base";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent extends AppComponentBase implements OnInit {

    @Input() title: string;
    @Input() assignee: string;
    @Input() completed: boolean;

    constructor(
        private _injector: Injector,
        private _activatedRoute: ActivatedRoute
    ) {
        super(_injector);
    }

    ngOnInit(): void {
        this._activatedRoute.data.subscribe(({ userList, todoList }) => {
            console.table(userList);
            console.table(todoList);
          });
    }
}