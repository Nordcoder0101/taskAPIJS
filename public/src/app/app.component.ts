import { Component, OnInit } from '@angular/core';
import { TaskGetsService } from './task-gets.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  constructor(private _TaskGetsService: TaskGetsService){}

  ngOnInit(){
    // this.getTasksFromService()
  }
  getTasksFromService(e): void {
   let observable = this._TaskGetsService.getAllTasks()
   observable.subscribe((data) => {
     this.tasks = data['data']
     console.log(data)
     console.log(this.tasks)
     console.log(e.srcElement.nextElementSibling.innerHTML)
     e.srcElement.innerHTML = this.tasks[4].completed

   })
  }
  testingPost(completed, title, description): void {
    let data = {
      completed: completed,
      title: title, 
      description: description
    }
    let observable = this._TaskGetsService.postTask(data)
    observable.subscribe((info) =>{
      console.log(info)
    })
  }
  showTaskDetail(id, e): void {
    console.log(id)
    let observable = this._TaskGetsService.getTask(id)
    observable.subscribe((data) => {
      console.log(data['data'])
    e.srcElement.previousElementSibling.innerHTML = `Title: ${data['data']['title']},
    Description: ${data['data']['description']}, Compelted = ${data['data']['completed']}`
    })
  }
}
