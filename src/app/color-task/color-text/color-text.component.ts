import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-color-text',
  templateUrl: './color-text.component.html',
  styleUrls: ['./color-text.component.scss']
})
export class ColorTextComponent implements OnInit {
  @Input() pickedColor !: any;
  constructor() { }

  ngOnInit(): void {
  }
getColorValueFromBG(colorFromBg: any){
  this.pickedColor = colorFromBg
}
}
