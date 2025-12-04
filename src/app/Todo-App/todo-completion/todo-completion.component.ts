import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-completion',
  templateUrl: './todo-completion.component.html',
  styleUrls: ['./todo-completion.component.scss']
})
export class TodoCompletionComponent implements OnInit {
 completedTasks: TodoItem[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getPendingTasks().subscribe(tasks => {
        this.completedTasks=tasks.filter(task => task.completed === true);
  
      })
    } 

}
