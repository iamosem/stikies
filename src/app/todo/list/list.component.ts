import { Component, Injector, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppComponentBase } from "@shared/app-component-base";
import { Todo } from "@shared/models/todo.model";
import { User } from "@shared/models/user.model";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators'

@Component({
    selector: 'app-todo-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class TodoListComponent extends AppComponentBase implements OnInit, OnDestroy {

    users: User[];
    todos: Todo[];

    currentPage: number;

    isLoading = true;

    unsubscribe$ = new Subject();

    constructor(
        private _injector: Injector,
        private _activatedRoute: ActivatedRoute
    ) {
        super(_injector);
        this.isLoading = true;
    }

    ngOnInit(): void {
        this._activatedRoute.data
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(({ userList, todoList }) => {
            this.users = userList;
            this.todos = todoList.sort((a , b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1);
            this.isLoading = false;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    getUserFullName(id: number): string {
        var user = this.users.find(u => u.id === id);
        if (user) return `${user.firstName} ${user.lastName}`;
        return 'unassigned';
    }
    
}