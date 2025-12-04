import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItem } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-pending',
  templateUrl: './todo-pending.component.html',
  styleUrls: ['./todo-pending.component.scss']
})
export class TodoPendingComponent implements OnInit {
  pendingTasks: TodoItem[] = [];
  constructor(private todoService: TodoService) { 
  }
  
  ngOnInit(): void {
    this.todoService.totalTasks.subscribe((task) => {
      console.log('Receiving Tasks from service', task)
      this.pendingTasks = task.filter(t => t.completed !== true);
    })
  
  }

  updateTaskCompletion() {
    this.todoService.completedTasks(this.pendingTasks);
  }

}
