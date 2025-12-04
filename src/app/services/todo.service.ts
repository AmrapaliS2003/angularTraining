import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  totalTasks = new BehaviorSubject<TodoItem[]>([]);
  constructor() { }

  addToPending(task: any) {
    let tempArray = [];
    tempArray = [...this.totalTasks.value, task]
    this.totalTasks.next(tempArray);
    console.log(this.totalTasks);
  }

  completedTasks(updatedTasks: any) {
    this.totalTasks.next(updatedTasks)
  }


  getPendingTasks() {
    return this.totalTasks;
  }
}

export interface TodoItem {
  title: string;
  description?: string;
  category?: string;
  dueDate?: string;
  completed?: boolean;
}

