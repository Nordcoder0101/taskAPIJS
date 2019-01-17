import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskGetsService } from './task-gets.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [TaskGetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
