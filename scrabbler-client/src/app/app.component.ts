import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Player } from './player';
import { Word } from './word';
import { playersListSeed } from './seed';
import { apiBaseUrl } from '../../configs';
import { WordService } from './services/word.service';
import { WordToDelete } from './interfaces/wordToDelete';
import { WordToAdd } from './interfaces/wordToAdd';

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
  // apiUrl = 'http://localhost:8080/word';
  score = 0;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private confirmationService: ConfirmationService,
    private wordService: WordService,
  ) {}

  ngOnInit() {
    this.http
      .get<Player[]>('http://localhost:8086/scrabbler/players')
      .subscribe(res => this.players.push(...res), err => console.log(err));
  }

  removeWord(deletedWordFromPlayer: WordToDelete) {
    console.log(deletedWordFromPlayer);
    this.confirmationService.confirm({
      message: `Are you sure that you want to remove "${deletedWordFromPlayer.word.word}"?`,
      accept: () => {
        this.http.delete(`http://localhost:8086/scrabbler/words/${deletedWordFromPlayer.word.id}`).subscribe(
          () => {
            let player = this.players.find(player => player.playerId === deletedWordFromPlayer.playerId);
            player.words.filter(word => word.id != deletedWordFromPlayer.word.id);
            console.log(player);
          },
          err => console.log(err),
        );
      },
    });
  }

  addPlayer(playerName: string) {
    this.http
      .post<Player>('http://localhost:8086/scrabbler/players', { name: playerName }, { headers: this.headers })
      .subscribe(response => this.players.push(response), err => console.log(err));
  }

  playerDeleted(id: number): void {
    const player = this.players.find(player => player.playerId === id);
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${player.playerName}?`,
      accept: () => {
        this.http
          .delete(`http://localhost:8086/scrabbler/players/${id}`)
          .subscribe(
            () => (this.players = this.players.filter(player => player.playerId != id)),
            err => console.log(err),
          );
      },
    });
  }

  addWord(playerWord: WordToAdd) {
    const id: number = playerWord.playerId;
    const word: string = playerWord.word;
    this.http
      .post<Player>(`http://localhost:8086/scrabbler/players/${id}/words?word=${word}`, playerWord, {
        headers: this.headers,
      })
      .subscribe(
        response => {
          const player = this.players.find(player => player.playerId === response.playerId);
          player.words = response.words;
        },
        err => console.log(err),
      );
  }
}
