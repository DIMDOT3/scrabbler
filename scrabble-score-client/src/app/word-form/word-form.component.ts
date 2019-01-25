import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
})
export class WordFormComponent implements OnInit {
  @Output() wordSubmitted = new EventEmitter<string>();
  word = '';

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.wordSubmitted.emit(this.word);
    this.word = '';
  }
}
