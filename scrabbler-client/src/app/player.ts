import { Word } from './word';

export class Player {
  // private static _id = 0;
  playerId: number;
  playerName: string;
  words: Word[];

  constructor(playerId, playerName, words) {
    this.playerId = playerId;
    this.playerName = playerName;
    this.words = words;
  }

  // static generateId() {
  //   return this._id++;
  // }
}
