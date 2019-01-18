import { Component, OnInit } from '@angular/core';
import { TaskGetsService } from './task-gets.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  newTask = {};
  editATask  = {};
  showEdit = false;

  constructor(private _TaskGetsService: TaskGetsService){}

  ngOnInit(){
    this.newTask = { title: "", description: ""}
    this.editATask = { _id: "", title: "", description: ""}
    console.log(this.showEdit)
  }

  doThingFromTask(data){
    console.log(`${data} before if statement`)
    
    for (let i in this.tasks)
      if (this.tasks[i]._id == data._id){
        if (!data.completed) {
          this.tasks[i].completed = true;
          console.log(data, "Changed to true")
        } else {
          this.tasks[i].completed = false;
          console.log(data, "Changed to false")
        }
      }
    
  }

  showTask(id){
    for (let i in this.tasks){
      if(this.tasks[i]._id == id){
        this.tasks[i].showTask = true;
      }
    }
  }

  editTask(id){
    let observable = this._TaskGetsService.editTask(id, this.editATask)
    observable.subscribe((data) => {
      console.log(data)
      this.editATask = { _id: "", title: "", description: "" }
      for (let i in this.tasks){
        if(this.tasks[i]._id == id){
          this.tasks[i].title = data['data']['title']
          this.tasks[i].description = data['data']['description']
        }
      }
    })
  }

  deleteTask(id){
    for (let i in this.tasks) {
      if (this.tasks[i]._id == id) {
        this.tasks.splice(parseInt(i), 1)
      }
    }    
    this._TaskGetsService.deleteTask(id).subscribe()
  }

  showEditTask(id){
    this.editATask = { _id: "", title: "", description: "" }
    for (let i in this.tasks){
      this.tasks[i].showEdit = false
      if(this.tasks[i]._id == id){
        this.tasks[i].showEdit = true
      }
    }
    this.showEdit = true
    
  }

  getTasksFromService(e): void {
   this._TaskGetsService.getAllTasks()
    .subscribe((data) => {
      this.tasks = data['data'];
    })
  }

  createTask(): void {
    console.log(this.newTask)
    this._TaskGetsService.postTask(this.newTask)
      .subscribe((info) => {
        this.newTask['title'] = ""
        this.newTask['description'] = ""
      })
  }
  
  showTaskDetail(id, e): void {
    console.log(id)
    this._TaskGetsService.getTask(id)
      .subscribe((data) => {
        console.log(data['data'])
        e.srcElement.previousElementSibling.innerHTML = `Title: ${data['data']['title']},
        Description: ${data['data']['description']}, Compelted = ${data['data']['completed']}`
      })
  }

  
}
