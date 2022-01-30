import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent extends AppComponentBase implements OnInit {

  constructor(
    injector: Injector,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
