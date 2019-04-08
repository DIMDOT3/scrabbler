import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Player } from '../player';
import { WordToAdd } from '../interfaces/wordToAdd';
import { WordToDelete } from '../interfaces/wordToDelete';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWrapperComponent implements OnInit {
  @Input() players: Player[];
  @Output() playerSubmitted = new EventEmitter<Object>();
  @Output() wordSubmitted = new EventEmitter<Object>();
  @Output() removingWord = new EventEmitter<Object>();
  constructor() {}

  ngOnInit() {}

  submitWord(playerWord: WordToAdd) {
    this.wordSubmitted.emit(playerWord);
  }

  submitPlayer(playerName: string) {
    this.playerSubmitted.emit(playerName);
  }
}
