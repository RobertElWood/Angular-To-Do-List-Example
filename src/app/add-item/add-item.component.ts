import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input() existingTasks: ToDo[] = [];

  newTask: ToDo = {task: "", completed: false};
  taskName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTask()
  {
    this.newTask.task = (<HTMLInputElement> document.getElementById("Name")).value;

    this.existingTasks.push(this.newTask);
  }

}
