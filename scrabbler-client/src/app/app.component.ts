import { HttpClient } from '@angular/common/http';
import { Component, Injectable, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Player } from './player';
import { Word } from './word';
import { playersListSeed } from './seed';
import { WordsListComponent } from './words-list/words-list.component';
import {PlayerWord} from "./playerWord";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'Scrabbler';
  wordsList: Word[] = [];
  players: Player[] = [];
  apiUrl = 'http://localhost:8080/word';
  score = 0;

  constructor(private http: HttpClient, private confirmationService: ConfirmationService) {}

  ngOnInit() {}

  // onWordSubmitted(word: string) {
  //   if (word) {
  //     this.http.get(`${this.apiUrl}?word=${word}`).subscribe((res: Word) => {
  //       this.wordsList.push(res);
  //       this.score = this.getTotalScore();
  //     });
  //   } else {
  //     throw new Error('you must provide a word!');
  //   }
  // }

  getTotalScore() {
    return this.wordsList.reduce((acc, nextVal) => acc + nextVal.score, 0);
  }

  removeWord(deletedWordFromPlayer: Object) {
    console.log(deletedWordFromPlayer);
    this.confirmationService.confirm({
      message: `Are you sure that you want to remove "${deletedWordFromPlayer["word"]}"?`,
      accept: () => {
        // const currentPlayer = this.players.filter(player => player.id === deletedWordFromPlayer.playerId);
      },
    });
  }

  addPlayer(playerName: string) {
    const newPlayer = new Player(playerName);
    this.players.push(newPlayer);
  }

  addWord(playerWord: PlayerWord) {
    // console.log(word);
    // console.log(word.word);
    // const currentPlayer = this.players.filter(player => player.id === word.playerId);
    // currentPlayer[0].wordsList.push(word.word);
    // console.log(this.players);
    if (playerWord) {
      this.http.get(`${this.apiUrl}?word=${playerWord.word}`).subscribe((res: Word) => {
        const currentPlayer = this.players.filter(player => player.id === playerWord.playerId);
        currentPlayer[0].wordsList.push(res);
        currentPlayer[0].totalScore += res.score;
      });
    } else {
      throw new Error('you must provide a word!');
    }
    console.log(this.players);
  }
}
