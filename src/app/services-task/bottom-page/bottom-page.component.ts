import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-bottom-page',
  templateUrl: './bottom-page.component.html',
  styleUrls: ['./bottom-page.component.scss']
})
export class BottomPageComponent implements OnInit {
  appName: string = ""
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
 this.commonService.appName.subscribe(name => { this.appName = name; });
  }

}


