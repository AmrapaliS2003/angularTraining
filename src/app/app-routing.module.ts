import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsExampleComponent } from './employee-task/events-example/events-example.component';
import { FormTaskComponent } from './employee-task/form-task/form-task.component';
import { EmployeeComponent } from './employee-task/employee/employee.component';
import { ColorMainComponent } from './color-task/color-main/color-main.component';
import { ColorBgComponent } from './color-task/color-bg/color-bg.component';
import { PhrasesComponent } from './word-task/phrases/phrases.component';
import { MathComponent } from './services-task/math/math.component';
import { EmployeeDataComponent } from './services-task/employee-data/employee-data.component';
import { MainPageComponent } from './services-task/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsExampleComponent
  },
  {
    path: 'event-task',
    component: FormTaskComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'color',
    component: ColorMainComponent
  },
  {
    path: 'word-task',
    component: PhrasesComponent
  },
  {
    path: 'math',
    component: MathComponent
  },
  {
    path: 'employee-data',
    component: EmployeeDataComponent  
  },
  {
    path: 'services-task',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
