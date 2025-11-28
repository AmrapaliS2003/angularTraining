import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-example',
  templateUrl: './events-example.component.html',
  styleUrls: ['./events-example.component.scss']
})
export class EventsExampleComponent implements OnInit {
  eventData: any = {};


  constructor() { }

  ngOnInit(): void {
  }
  inputChange() {
    console.log('INPUT CHANGE', this.eventData.username)
  }
  inputBlur() {
    console.log('INPUT BLUR', this.eventData.username)
  }
  inputClicked() {
    console.log('INPUT Clicked', this.eventData.username)
  }
  inputInput() {
    console.log('INPUT INPUT', this.eventData.username)
  }
}
