import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent implements OnInit {
  
  @Input() existingTasks: ToDo[] = [];
  @Input() indexToDelete : number =  -1;
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(index : number) 
  {
    this.existingTasks.splice(index, 1);
  }
}
