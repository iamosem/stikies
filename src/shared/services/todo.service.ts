import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConsts } from "@shared/app-consts";
import { Todo } from "@shared/models/todo.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TodoService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    getTodos(): Observable<Todo> {
        return this._httpClient.get<Todo>(`${AppConsts.apiServiceBaseUrl}/todos`);
    }
    
}