import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskGetsService {
  
  constructor(private _http: HttpClient) { 
    this.getAllTasks()
    this.getTask()
  }
  getAllTasks(){
    let tempObservable = this._http.get('/getalltasks')
    tempObservable.subscribe(data => console.log("All tasks", data))
  }
  getTask(){
    let tempObservable = this._http.get('/gettaskbyid/5c3e6a92ae73f77ed7add65e')
    tempObservable.subscribe(data => console.log("The task", data))
  }
}

