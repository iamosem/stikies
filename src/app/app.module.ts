import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitializer } from 'src/app-initializer';

//layout
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    // layout
    TopHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializer) => appInitializer.init(),
      deps: [AppInitializer], 
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
