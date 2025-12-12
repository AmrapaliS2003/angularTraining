import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { TodoItem, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-completion',
  templateUrl: './todo-completion.component.html',
  styleUrls: ['./todo-completion.component.scss']
})
export class TodoCompletionComponent implements OnInit {
 completedTasks: TodoItem[] = [];
 completedTasksObs = this.todoService.getPendingTasks()
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getPendingTasks()
    .pipe(
      map((tasks: TodoItem[]) => tasks.filter(task => task.completed === true))
    )
    .subscribe((tasks: any) => {
      console.log('Completed Tasks:', tasks);
      this.completedTasks = tasks});
    } 

}

// Basics of Filter and Map
// FIlter => take array of data and filter based on condition
// Map => take array of data and transform each item in the array
