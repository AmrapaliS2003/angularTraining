import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-bg',
  templateUrl: './color-bg.component.html',
  styleUrls: ['./color-bg.component.scss']
})
export class ColorBgComponent implements OnInit {
  @Input() pickedColor : any; // Receiving value from the source
  @Output() producedColor = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  clickToProduceColor() {
    this.producedColor.emit(this.pickedColor)
  }

}
