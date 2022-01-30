import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { CardComponent } from "./components/card/card.component";
@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule
    ],
    declarations: [
        CardComponent
    ],
    exports: [
        CommonModule,
        NgxPaginationModule,
        CardComponent
    ]
})
export class SharedModule { }