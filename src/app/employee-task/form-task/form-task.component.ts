import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {
  // modeltype : string = "";
  // value : string ="";
  // gender: string = ''
  // location: string = '';
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required)
  // });
  constructor() { }

  ngOnInit(): void {
  }
    

  onSubmit(formDetails: NgForm) {
    console.log('Reached On Submit', formDetails)
    // if () {
    //   // Handle valid form submission here
    //   console.log(this.form.value);
    // }
  }

}

