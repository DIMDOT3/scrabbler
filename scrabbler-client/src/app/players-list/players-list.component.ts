import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { Word } from '../word';
import { WordToDelete } from '../interfaces/wordToDelete';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit {
  @Input() players: Player[];
  @Output() removeWord = new EventEmitter<Object>();
  @Output() deletePlayer = new EventEmitter<Object>();
  constructor() {}

  ngOnInit() {}

  handleRemoveWord(word: Word, playerId: number) {
    const wordToRemove: WordToDelete = { playerId, word };
    this.removeWord.emit(wordToRemove);
  }

  handleDeletePlayer(playerId: number, e: Event) {
    e.stopPropagation();
    // console.log(playerId);
    this.deletePlayer.emit(playerId);
  }
}
