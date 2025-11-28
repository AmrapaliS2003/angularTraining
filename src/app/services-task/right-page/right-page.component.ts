import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-right-page',
  templateUrl: './right-page.component.html',
  styleUrls: ['./right-page.component.scss']
})
export class RightPageComponent implements OnInit {
  appName: string = ""
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
   this.commonService.appName.subscribe(name => { this.appName = name; });
  }

}
