import { Word } from './word';

export class Player {
  private static _id = 0;
  id: number;
  name: string;
  wordsList: Word[];
  totalScore: number;

  constructor(name) {
    this.id = Player.generateId();
    this.name = name;
    this.wordsList = [];
    this.totalScore = 0;
  }

  static generateId() {
    return this._id++;
  }
}
