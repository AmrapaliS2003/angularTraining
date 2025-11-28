import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employees: any;
  private appNameSubject = new BehaviorSubject<string>('Service Task App');
  appName = this.appNameSubject.asObservable();
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
    console.log('Get App Name: @Service', this.appNameSubject.value);
    return this.appNameSubject.value;
  }
  setAppName(name: string): void {
    this.appNameSubject.next(name);
    console.log('Setting DONe: @Service', this.appName);
  }
}
  

