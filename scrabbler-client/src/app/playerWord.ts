export class PlayerWord {
  playerId: number;
  word: string;

  constructor(playerId: number, word: string) {
    this.playerId = playerId;
    this.word = word;
  }
}
