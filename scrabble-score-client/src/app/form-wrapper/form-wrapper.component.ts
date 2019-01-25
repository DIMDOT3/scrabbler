import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css'],
})
export class FormWrapperComponent implements OnInit {
  @Output() submitPlayer = new EventEmitter<string>();
  submittingPlayer: string;
  constructor() {}

  ngOnInit() {}

  playerSubmitted(playerName: string) {
    this.submitPlayer.emit(this.submittingPlayer);
  }
}
