import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Player } from './player';
import { Word } from './word';
import { playersListSeed } from './seed';
import { addPlayer } from '@angular/core/src/render3/players';

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

  onWordSubmitted(word: string) {
    if (word) {
      this.http.get(`${this.apiUrl}?word=${word}`).subscribe((res: Word) => {
        this.wordsList.push(res);
        this.score = this.getTotalScore();
      });
    } else {
      throw new Error('you must provide a word!');
    }
  }

  getTotalScore() {
    return this.wordsList.reduce((acc, nextVal) => acc + nextVal.score, 0);
  }

  onWordRemoved(deletedWordFromPlayer: Object) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to remove "${deletedWordFromPlayer.word.word}"?`,
      accept: () => {
        // this.players = this.players.map(player => player.id === deletedWordFromPlayer.playerId)
        const currentPlayer = this.players.filter(player => player.id === deletedWordFromPlayer.playerId);
        console.log(currentPlayer);
        // this.wordsList = this.wordsList.filter(word => word.id !== deletedWordFromPlayer.id);
        // this.score = this.getTotalScore();
      },
    });

    addPlayer(playerName) {

    }
  }
}
