import { Injectable, NgModule } from "@angular/core";
import { Resolve, RouterModule } from "@angular/router";
import { Todo } from "@shared/models/todo.model";
import { User } from "@shared/models/user.model";
import { TodoService } from "@shared/services/todo.service";
import { UserService } from "@shared/services/user.service";
import { Observable, of } from "rxjs";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";
import { TodoListComponent } from "./list/list.component";
import { TodoComponent } from "./todo.component";

@Injectable({ providedIn: 'root' })
export class UserListResolve implements Resolve<User> {
    constructor(
        private _service: UserService
    ) { }

    resolve(): Observable<User> {
        return this._service.generateUsers(10);
    }
}

@Injectable({ providedIn: 'root' })
export class TodoListResolve implements Resolve<Todo> {
    constructor(
        private _service: TodoService
    ) { }

    resolve(): Observable<Todo> {
        return this._service.getTodos();
    }
}

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: TodoComponent,
                children: [
                    { path: 'list', component: TodoListComponent, resolve: { userList: UserListResolve, todoList: TodoListResolve }, }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TodoRoutingModule { }