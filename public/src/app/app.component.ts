import { Component, OnInit } from '@angular/core';
import { TaskGetsService } from './task-gets.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks = [];
  constructor(private _TaskGetsService: TaskGetsService){}

  ngOnInit(){
    this.getTasksFromService()
  }
  getTasksFromService(){
   let observable = this._TaskGetsService.getAllTasks()
   observable.subscribe((data) => {
     this.tasks = data['data']
     console.log(this.tasks)
   })
  }
  
}
