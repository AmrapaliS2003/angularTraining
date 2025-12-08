import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const name1 = this.functionWithoutPromise();
    // console.log("Received NAME FROM FUNCTION", name1)
    this.functionWithPromise().then((name2) => {
      console.log("Received NAME FROM PROMISE", name2)
    })
    console.log('Continue 1')
    console.log('Continue 2')
    console.log('Continue 3')
    console.log('Continue 4')
    console.log('Continue 5')
    // console.log("Name1 from functionWithoutPromise:", name1);
    // console.log("Name2 from functionWithPromise:", name2);
  }

  // functionWithoutPromise() {
  //   let name = 'Before Waiting FUNCTION';
   
  //   return setTimeout(() => {
  //     name = "AFTER Waiting FUNCTION" 
  //   }, 10000);
  // }

  functionWithPromise(): Promise<string> {
    let name = 'BEFORE Promise';
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        name = "AFTER Promise"
        // resolve(name);
        reject("Error occurred while processing the promise");
      }, 10000);
    });
  }
}
