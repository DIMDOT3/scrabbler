import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFormComponent } from './player-form.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('PlayerFormComponent', () => {
  let component: PlayerFormComponent;
  let fixture: ComponentFixture<PlayerFormComponent>;
  let element: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerFormComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an input and button component', () => {
    const input = fixture.debugElement.nativeElement.querySelector('#player-input');
    const button = fixture.debugElement.nativeElement.querySelector('button');

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('submits player name when clicking submit button', () => {
    let playerName: string;

    const input = fixture.debugElement.nativeElement.querySelector('#player-input');
    const button = fixture.debugElement.nativeElement.querySelector('button');

    input.value = 'test';
    button.click();
    fixture.detectChanges();

    component.submittingPlayer.subscribe(name => (playerName = name));

    expect(playerName).toBe('test');
  });
});
