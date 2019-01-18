import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskGetsService {
  
  constructor(private _http: HttpClient) { 
  }

  getAllTasks(){
    return this._http.get('/getalltasks')
    
  }

  getTask(id){
    return this._http.get(`/gettaskbyid/${id}`)
  
  }

  postTask(data){
    return this._http.post('/createnewtask', data)
  }

  editTask(id, data){
    return this._http.put(`/gettaskandupdate/${id}`, data)
  }

  deleteTask(id){
    return this._http.delete(`/deletetask/${id}`)
  }
}

