import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any
  @Output() taskEvent = new EventEmitter();
  constructor() { }

  triggerEvent(){
    this.taskEvent.emit()
  }

  ngOnInit() {
  }

}
