import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItem } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  task: TodoItem = {
    title: '',
    description: '',
    category: 'Work out',
    dueDate: '',
    completed: false
  };

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTask() {
    const title = this.task.title ? this.task.title.trim() : '';
    if (!title) {
      return;
    }

    const newTask: TodoItem = {
      title,
      description: this.task.description ? this.task.description.trim() : '',
      category: this.task.category || 'General',
      dueDate: this.task.dueDate || '',
      completed: false
    };

    this.todoService.addToPending(newTask);
    console.log(newTask);

    // reset form fields
    this.task.title = '';
    this.task.description = '';
    this.task.category = 'Work out';
    this.task.dueDate = '';
  }

  // generateUniqueId(): string {
  //   return Date.now().toString(36) + Math.random().toString(36).substr(2);
  // }
}

