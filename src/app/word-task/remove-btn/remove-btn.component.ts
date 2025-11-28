import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {
  @Input() letter !: string;
  @Input() phrase !: string;
  newPhrase: string = '';
  constructor() { }

  ngOnInit(): void {
  }

removeLetter() {
  this.newPhrase = this.phrase.split(this.letter).join('');  
  console.log(this.newPhrase);
}
}
