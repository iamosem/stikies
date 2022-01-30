import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { TodoListComponent } from "./list/list.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";

@NgModule({
    imports: [
        SharedModule,
        TodoRoutingModule
    ],
    declarations: [
        TodoComponent,
        TodoListComponent
    ]
})
export class TodoModule { }