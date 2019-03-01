import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { Word } from '../word';
import { PlayerWord } from '../playerWord';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit {
  @Input() playersList$: Player[];
  @Output() removeWord = new EventEmitter<Object>();
  constructor() {}

  ngOnInit() {}

  handleRemoveWord(word: Word, playerId: number) {
    const wordToRemove = { word, playerId };
    this.removeWord.emit(wordToRemove);
  }
}
