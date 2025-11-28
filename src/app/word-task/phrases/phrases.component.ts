import { Component, OnInit } from '@angular/core';
import { RemoveLetterComponent } from '../remove-letter/remove-letter.component';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.scss']
})
export class PhrasesComponent implements OnInit {
phrase: string = '';
letter : string = '';
newPhrase: string = '';
  constructor() { }

  ngOnInit(): void {
  }
updatedText(event: string) {
  this.letter = event;
 console.log(this.letter);
}
}
