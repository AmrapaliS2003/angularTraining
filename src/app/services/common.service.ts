import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employees: any;
  occupation : string = 'Farmer';
  appName = new BehaviorSubject<string>('Service App - Welcome');
  constructor(private http: HttpClient) { }
  
  checkPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  getEmployeeData(): any {
    return this.http.get<any>('assets/employeesData.json');
  }

  getAppName(): string {
    return this.appName.value;

  }
  setAppName(name: string): void {
    this.appName.next(name)
  }
  
  getOccupation(): string {
    return this.occupation;
  }

}
  

