import { Component } from '@angular/core';
import { TaskGetsService } from './task-gets.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  constructor(private _TaskGetsService: TaskGetsService){}
  
}
