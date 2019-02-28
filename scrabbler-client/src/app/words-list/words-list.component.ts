import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Word } from '../word';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css'],
})
export class WordsListComponent implements OnInit {
  @Input() wordsList: string[];
  @Input() score: number;
  @Output() removeWord = new EventEmitter<Word>();

  constructor() {}

  ngOnInit() {}

  handleRemoveWord(word: Word) {
    this.removeWord.emit(word);
  }
}
