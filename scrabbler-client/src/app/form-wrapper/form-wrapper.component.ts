import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWrapperComponent implements OnInit {
  @Input() playersList: Player[];
  @Output() playerSubmitted = new EventEmitter<Object>();
  @Output() wordSubmitted = new EventEmitter<Object>();
  @Output() removingWord = new EventEmitter<Object>();
  constructor() {}

  ngOnInit() {}

  wordToRemove(wordToRemove: Object) {
    console.log(wordToRemove);
  }

  submitWord(word: Object) {
    console.log(word);
    this.wordSubmitted.emit(word);
  }

  submitPlayer(playerName: string) {
    this.playerSubmitted.emit(playerName);
  }
}
