import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {

  constructor() { }

  @Input() existingTasks: ToDo[] = [];
  taskToUpdate : ToDo = {task:"", completed: true}

  index : number = 0;

  ngOnInit(): void {
  }

  SelectTaskToUpdate()
  {
    this.index = parseInt((<HTMLInputElement> document.getElementById("index")).value) - 1;
    this.taskToUpdate = this.existingTasks[this.index];
    this.taskToUpdate.completed = true;
  }
}
