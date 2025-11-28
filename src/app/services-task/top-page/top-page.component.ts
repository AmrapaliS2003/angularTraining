import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  appName: string = ""
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
 this.commonService.appName.subscribe(name => { this.appName = name; });
  }

  updateAppName() {
    console.log('New Value: ', this.appName);
    this.commonService.setAppName(this.appName);
  }

}
