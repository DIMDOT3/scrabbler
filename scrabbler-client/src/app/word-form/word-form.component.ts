import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Player } from '../player';
import { WordToAdd } from '../interfaces/wordToAdd';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
})
export class WordFormComponent implements OnInit {
  @Input() players: Player[];
  @Output() submittingWord = new EventEmitter<Object>();
  word: string;
  selectedPlayerId: number;

  constructor() {}

  ngOnInit() {}

  handleChange(player) {
    this.selectedPlayerId = player.target.value;
  }
  onSubmit() {
    const submittedWord: WordToAdd = { playerId: this.selectedPlayerId, word: this.word };
    // const submittedWord = {
    //   word: this.word,
    //   playerId: Number(this.selectedPlayerId),
    // };
    this.submittingWord.emit(submittedWord);
    this.word = '';
  }
}
