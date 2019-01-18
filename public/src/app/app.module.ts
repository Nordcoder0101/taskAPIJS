import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskGetsService } from './task-gets.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [TaskGetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
