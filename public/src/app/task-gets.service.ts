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
  getTask(){
    return this._http.get('/gettaskbyid/5c3e6a92ae73f77ed7add65e')
  }
}

