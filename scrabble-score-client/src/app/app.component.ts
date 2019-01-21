import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfirmationService } from "primeng/api";

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

  constructor(
    private http: HttpClient,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {}

  onWordSubmitted(word: string) {
    if (word) {
      this.http.get(`${this.apiUrl}?word=${word}`).subscribe((res: Word) => {
        this.wordsList.push(res);
        this.score = this.getTotalScore();
      });
    } else {
      throw new Error("you must provide a word!");
    }
  }

  getTotalScore() {
    return this.wordsList.reduce((acc, nextVal) => acc + nextVal.score, 0);
  }

  onWordRemoved(deletedWord: Word) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to remove "${deletedWord.word}"?`,
      accept: () => {
        this.wordsList = this.wordsList.filter(
          word => word.id !== deletedWord.id
        );
        this.score = this.getTotalScore();
      }
    });
  }
}
