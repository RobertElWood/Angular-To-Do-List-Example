import { Component } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo';

  tasks : ToDo[] =
  [{task: "Feed the cats", completed: true}, 
  {task: "Pet the cats", completed: true},
  {task: "Do the dishes", completed: true},
  {task: "Practice coding", completed: false},
  {task: "Practice angular", completed: false},
  {task: "Get groceries", completed: false},
  {task: "Cook dinner", completed: false},
  {task: "Pwn noobs on the internet", completed: false}];

}
