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
  @Output() submitWord = new EventEmitter<Object>();
  word: string;
  selectedPlayerId: number;

  constructor() {}

  ngOnInit() {}

  handleChange(player) {
    this.selectedPlayerId = player.target.value;
  }
  onSubmit() {
    const word: WordToAdd = { playerId: Number(this.selectedPlayerId), word: this.word };
    this.submitWord.emit(word);
    this.word = '';
  }
}
