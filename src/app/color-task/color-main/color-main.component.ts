import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-main',
  templateUrl: './color-main.component.html',
  styleUrls: ['./color-main.component.scss']
})
export class ColorMainComponent implements OnInit {
pickedColor: any;
updateBg(value: string) {
   this.pickedColor = value;
}
 

  constructor() { }

  ngOnInit(): void {
  }
  getProducedColor(colorValue: any) {
    this.pickedColor = colorValue;
  }
}
