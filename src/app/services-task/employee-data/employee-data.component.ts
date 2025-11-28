import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
data: any[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {


  }
  employeeDetails() {
    this.commonService.getEmployeeData().subscribe((data: any) => {
      this.data = data;
      console.log(data);
    });
  
}
}
