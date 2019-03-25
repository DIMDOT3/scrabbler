import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWrapperComponent } from './form-wrapper.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { WordToAdd } from '../interfaces/wordToAdd';

describe('FormWrapperComponent', () => {
  let component: FormWrapperComponent;
  let fixture: ComponentFixture<FormWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormWrapperComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit add player', () => {
    const player = 'test';
    spyOn(component.playerSubmitted, 'emit');
    component.submitPlayer(player);

    expect(component.playerSubmitted.emit).toHaveBeenCalledTimes(1);
    expect(component.playerSubmitted.emit).toHaveBeenCalledWith(player);
  });

  it('should emit add word to player', () => {
    const word: WordToAdd = { playerId: 1, word: 'test' };
    spyOn(component.wordSubmitted, 'emit');

    component.submitWord(word);

    expect(component.wordSubmitted.emit).toHaveBeenCalledTimes(1);
    expect(component.wordSubmitted.emit).toHaveBeenCalledWith(word);
  });
});
