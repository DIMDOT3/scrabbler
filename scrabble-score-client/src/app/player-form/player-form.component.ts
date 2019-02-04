import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent implements OnInit {
  player: string;
  @Output() submittingPlayer = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submittingPlayer.emit(this.player);
    this.player = '';
  }
}
