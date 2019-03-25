import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFormComponent } from './word-form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { WordToAdd } from '../interfaces/wordToAdd';

describe('FormComponent', () => {
  let component: WordFormComponent;
  let fixture: ComponentFixture<WordFormComponent>;
  const player1 = {
    playerId: 1,
    playerName: 'player1',
    words: [{ id: 1, word: 'hello', scrabblescore: 1 }, { id: 2, word: 'world', scrabblescore: 2 }],
  };
  const player2 = {
    playerId: 2,
    playerName: 'player2',
    words: [{ id: 3, word: 'green', scrabblescore: 3 }],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordFormComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFormComponent);
    component = fixture.componentInstance;
    component.players = [player1, player2];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have component.player equal to input value', () => {
    const input = fixture.debugElement.query(By.css('#scrabble-word')).nativeElement;

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable();

    expect(component.word).toBe('test');
  });

  it('should emit word to add for player on submit', () => {
    const input = fixture.debugElement.query(By.css('#scrabble-word')).nativeElement;
    const select = fixture.debugElement.query(By.css('.custom-select')).nativeElement;
    const submitBtn = fixture.debugElement.query(By.css('.btn')).nativeElement;
    const word: WordToAdd = { playerId: 1, word: 'yellow' };
    spyOn(component.submittingWord, 'emit');

    input.value = 'yellow';
    input.dispatchEvent(new Event('input'));
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));

    submitBtn.click();
    fixture.detectChanges();

    expect(component.submittingWord.emit).toHaveBeenCalledTimes(1);
    expect(component.submittingWord.emit).toHaveBeenCalledWith(word);
  });
});
