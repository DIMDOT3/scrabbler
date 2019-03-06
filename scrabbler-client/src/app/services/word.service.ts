import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../player';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}

  deletePlayer(id: number) {
    return this.http.delete(`http://localhost:8086/scrabbler/players/${id}`);
  }
}
