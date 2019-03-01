import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Player } from './player';
import { Word } from './word';
import { playersListSeed } from './seed';
import { WordsListComponent } from './words-list/words-list.component';
import { PlayerWord } from './playerWord';
import { apiBaseUrl } from '../../configs';
import { Observable } from 'rxjs';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

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
  playersList$: Player[];
  // apiUrl = 'http://localhost:8080/word';
  score = 0;

  constructor(private http: HttpClient, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    const response = this.http.get<Player[]>('http://localhost:8086/scrabbler/players').pipe();
    console.log(response);
  }

  getTotalScore() {
    return this.wordsList.reduce((acc, nextVal) => acc + nextVal.score, 0);
  }

  // getPlayers() {
  //   this.playersList$ = this.http.get<Player[]>('http://localhost:8086/scrabbler/players');
  // }

  removeWord(deletedWordFromPlayer: Object) {
    console.log(deletedWordFromPlayer);
    this.confirmationService.confirm({
      message: `Are you sure that you want to remove "${deletedWordFromPlayer['word']}"?`,
      accept: () => {
        // const currentPlayer = this.players.filter(player => player.id === deletedWordFromPlayer.playerId);
      },
    });
  }

  addPlayer(playerName: string) {
    // const newPlayer = new Player(playerName);
    // this.players.push(newPlayer);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.http
    //   .post<Player>('http://localhost:8086/scrabbler/players', { name: playerName }, { headers: headers })
    //   .subscribe(response => this.players.push(response), err => console.log(err));
    // const response = this.http.post(`${apiBaseUrl}/players`, JSON.stringify({ name: playerName }), {
    //   headers: headers,
    // });
  }

  addWord(playerWord: PlayerWord) {
    // console.log(word);
    // console.log(word.word);
    // const currentPlayer = this.players.filter(player => player.id === word.playerId);
    // currentPlayer[0].wordsList.push(word.word);
    // console.log(this.players);
    if (playerWord) {
      this.http
        .get(`${apiBaseUrl}/players/${playerWord.playerId}/words?word=${playerWord.word}`)
        .subscribe((res: Word) => {
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
