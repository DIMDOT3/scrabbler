import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../player';
import { WordToAdd } from '../interfaces/wordToAdd';
import { WordToDelete } from '../interfaces/wordToDelete';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get<Player[]>('http://localhost:8086/scrabbler/players');
  }

  addPlayer(name: string) {
    return this.http.post<Player>('http://localhost:8086/scrabbler/players', { name }, { headers: this.headers });
  }

  deletePlayer(id: number) {
    return this.http.delete(`http://localhost:8086/scrabbler/players/${id}`);
  }

  addWordToPlayer(word: WordToAdd) {
    const id: number = word.playerId;
    const newWord: string = word.word;
    return this.http.post<Player>(`http://localhost:8086/scrabbler/players/${id}/words?word=${newWord}`, word, {
      headers: this.headers,
    });
  }

  deleteWordFromPlayer(word: WordToDelete) {
    return;
  }
}
