import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EventsExampleComponent } from './employee-task/events-example/events-example.component';
import { FormTaskComponent } from './employee-task/form-task/form-task.component';
import { EmployeeComponent } from './employee-task/employee/employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColorMainComponent } from './color-task/color-main/color-main.component';
import { ColorBgComponent } from './color-task/color-bg/color-bg.component';
import { ColorTextComponent } from './color-task/color-text/color-text.component';
import { ResultComponent } from './word-task/result/result.component';
import { PhrasesComponent } from './word-task/phrases/phrases.component';
import { RemoveBtnComponent } from './word-task/remove-btn/remove-btn.component';
import { RemoveLetterComponent } from './word-task/remove-letter/remove-letter.component';
import { MathComponent } from './services-task/math/math.component';
import { EmployeeDataComponent } from './services-task/employee-data/employee-data.component';
import { LeftPageComponent } from './services-task/left-page/left-page.component';
import { RightPageComponent } from './services-task/right-page/right-page.component';
import { TopPageComponent } from './services-task/top-page/top-page.component';
import { BottomPageComponent } from './services-task/bottom-page/bottom-page.component';
import { MainPageComponent } from './services-task/main-page/main-page.component';
import { TodoFormComponent } from './Todo-App/todo-form/todo-form.component';
import { TodoPendingComponent } from './Todo-App/todo-pending/todo-pending.component';
import { TodoCompletionComponent } from './Todo-App/todo-completion/todo-completion.component';
import { TodoAnalyticsComponent } from './Todo-App/todo-analytics/todo-analytics.component';
import { TodoMainComponent } from './Todo-App/todo-main/todo-main.component';
import { PromisesComponent } from './promisesTask/promises/promises.component';
import { DashboardComponent } from './HttpCommunication/dashboard/dashboard.component';
import { PostsComponent } from './HttpCommunication/posts/posts.component';
import { UsersComponent } from './HttpCommunication/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    EventsExampleComponent,
    FormTaskComponent,
    EmployeeComponent,
    ColorMainComponent,
    ColorBgComponent,
    ColorTextComponent,
    ResultComponent,
    PhrasesComponent,
    RemoveBtnComponent,
    RemoveLetterComponent,
    MathComponent,
    EmployeeDataComponent,
    LeftPageComponent,
    RightPageComponent,
    TopPageComponent,
    BottomPageComponent,
    MainPageComponent,
    TodoFormComponent,
    TodoPendingComponent,
    TodoCompletionComponent,
    TodoAnalyticsComponent,
    TodoMainComponent,
    PromisesComponent,
    DashboardComponent,
    PostsComponent,
    UsersComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
