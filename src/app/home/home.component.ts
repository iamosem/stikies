import { Component, Injector, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponentBase } from "@shared/app-component-base";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent extends AppComponentBase implements OnInit {
      constructor(
          private _injector: Injector,
          private _router: Router
      ) {
          super (_injector);
      }

      ngOnInit(): void {
      }

      gotoTodoList(): void {
          this._router.navigate(['/todo/list']);
      }
  }