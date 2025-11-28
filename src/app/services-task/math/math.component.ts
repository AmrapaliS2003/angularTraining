import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  result: boolean | null = null;
  number: number | null = null;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
  isPrime() {
    this.result = this.commonService.checkPrime(this.number!);
  }
}
