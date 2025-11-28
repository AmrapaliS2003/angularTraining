import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrls: ['./left-page.component.scss']
})
export class LeftPageComponent implements OnInit {
  appName: string = ""
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
     this.commonService.appName.subscribe(name => { this.appName = name; });
  }

}
