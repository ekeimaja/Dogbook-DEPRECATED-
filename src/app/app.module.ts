import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ContentComponent } from './content/content.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContentComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
