import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  @Input() wordsList: string[];
  @Input() score: number;
  constructor() {}

  ngOnInit() {}
}
