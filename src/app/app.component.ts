import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  task :string = "";
	plText: string = 'Enter nAME';
	taskList : {id:number,task:string}[]=[]

}
