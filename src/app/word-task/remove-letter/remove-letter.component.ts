import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remove-letter',
  templateUrl: './remove-letter.component.html',
  styleUrls: ['./remove-letter.component.scss']
})
export class RemoveLetterComponent implements OnInit {
  letterToRemove: string = '';
  @Output() letterRemoved = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitvalue(){
    this.letterRemoved.emit(this.letterToRemove);
  }

}
