import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
projects: any;
  getTasks(_t40: number) {
    throw new Error('Method not implemented.');
  }
  employees: any[] = [];


  taskCount: number = 0;
  emp: any;
  stats: any = {
    completedTasks: 0,
    pendingTasks: 0,
    totalTasks: 0
  };
  newEmp: any = {
    id: '',
    name: '',
    position: '',
    department: {
      id: '',
      name: '',
      manager: {
        id: '',
        name: '',
        contact: {
          email: '',
          phone: ''
        }
      }
    },
  };
  currentProject: any = {
    projectId: '',
    projectName: '',
    tasks: []
  }
  projectArray: any = [

  ]
  tasksArray: any = [

  ]
  currentTask: any = {
    taskId: '',
    title: '',
    status: ''
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/employeesData.json').subscribe(data => {
      this.employees = data;
      console.log('required data', this.employees)
      this.evaluateTaskStats();
    })
  }
  evaluateTaskStats() {
    for (let emp of this.employees) {
      for (let project of emp.employee.projects) {
        this.stats.totalTasks += project.tasks.length;
        for (let task of project.tasks) {
          console.log("task", task.status);
          if (task.status == 'Pending') {
            this.stats.pendingTasks += 1;
          }
          else {
            this.stats.completedTasks += 1;
          }
        }
      }
    }
  }
  onSubmit() {
    console.log('New Employee:::', this.newEmp)
    this.newEmp.projects = this.projectArray
    this.employees.push({
      employee: this.newEmp
    })
  }
  saveTasks() {
    this.tasksArray.push(this.currentTask)
    this.currentTask = {}
  }
  saveProject() {
    this.currentProject.tasks = this.tasksArray;
    this.projectArray.push(this.currentProject);
    this.currentProject = {};
  }

}
