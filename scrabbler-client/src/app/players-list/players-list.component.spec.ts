import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListComponent } from './players-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Player } from '../player';

describe('PlayersListComponent', () => {
  let component: PlayersListComponent;
  let fixture: ComponentFixture<PlayersListComponent>;
  const player1: Player = {
    playerId: 1,
    playerName: 'player1',
    words: [{ id: 1, word: 'hello', scrabblescore: 1 }, { id: 2, word: 'world', scrabblescore: 2 }],
  };
  const player2: Player = {
    playerId: 2,
    playerName: 'player2',
    words: [{ id: 3, word: 'green', scrabblescore: 3 }],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersListComponent);
    component = fixture.componentInstance;
    component.players = [player1, player2];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 p-accordianTab elements on render based on test players provided', () => {
    const tabs = fixture.debugElement.queryAll(By.css('p-accordionTab'));

    expect(tabs.length).toEqual(2);
  });

  it('should have 3 word rows based on test players provided', () => {
    const wordRows = fixture.debugElement.queryAll(By.css('.word-rows-test'));

    expect(wordRows.length).toEqual(3);
  });

  it('should render correct data in cells according to players provided', () => {
    const words = fixture.debugElement.queryAll(By.css('.word-test'));
    const scores = fixture.debugElement.queryAll(By.css('.score-test'));
    const deleteWordIcons = fixture.debugElement.queryAll(By.css('.delete-word-icon-test'));

    expect(words.length).toBe(3);
    expect(words[0].nativeElement.textContent).toEqual('hello');
    expect(words[1].nativeElement.textContent).toEqual('world');
    expect(words[2].nativeElement.textContent).toEqual('green');

    expect(scores.length).toEqual(3);
    expect(scores[0].nativeElement.textContent).toBe('1');
    expect(scores[1].nativeElement.textContent).toBe('2');
    expect(scores[2].nativeElement.textContent).toBe('3');

    expect(deleteWordIcons.length).toBe(3);
  });

  it('should delete a player on click of the delete icon', () => {
    const event = { stopPropagation: () => {} };
    const deleteIcons = fixture.debugElement.queryAll(By.css('.player-delete-icon-test'));

    spyOn(component.deletePlayer, 'emit');

    deleteIcons[0].triggerEventHandler('click', event);
    fixture.detectChanges();

    expect(deleteIcons.length).toBe(2);
    expect(component.deletePlayer.emit).toHaveBeenCalledTimes(1);
    expect(component.deletePlayer.emit).toHaveBeenCalledWith(player1.playerId);
  });

  it('should delete a word on click of the delete icon', () => {
    const deleteIcon = fixture.debugElement.queryAll(By.css('.delete-word-icon-test'));
    const word = { word: player1.words[0], playerId: player1.playerId };
    spyOn(component.removeWord, 'emit');

    deleteIcon[0].nativeElement.click();
    fixture.detectChanges();

    expect(component.removeWord.emit).toHaveBeenCalledTimes(1);
    expect(component.removeWord.emit).toHaveBeenCalledWith(word);
  });
});
