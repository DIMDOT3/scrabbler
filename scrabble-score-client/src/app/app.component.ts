import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Word } from "./word";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
@Injectable({
  providedIn: "root"
})
export class AppComponent {
  title = "Scrabbler";
  wordsList: Word[] = [];
  apiUrl: string = "http://localhost:8080/word";
  score: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onWordSubmitted(word: string) {
    if (word) {
      this.http.get(`${this.apiUrl}?word=${word}`).subscribe((res: Word) => {
        this.wordsList.push(res);
        this.score = this.getTotalScore();
      });
    } else {
      this.http.get(this.apiUrl).subscribe((res: Word) => {
        this.wordsList.push(res);
        this.score = this.getTotalScore();
      });
    }
  }

  getTotalScore() {
    return this.wordsList.reduce(function(acc, nextVal) {
      return acc + nextVal.score;
    }, 0);
  }

  onWordRemoved(deletedWord: Word) {
    this.wordsList = this.wordsList.filter(word => word.id !== deletedWord.id);
    this.score = this.getTotalScore();
  }
}
