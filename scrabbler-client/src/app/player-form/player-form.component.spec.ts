import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFormComponent } from './player-form.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PlayerFormComponent', () => {
  let component: PlayerFormComponent;
  let fixture: ComponentFixture<PlayerFormComponent>;
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

  it('should have component.player equal to input value', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable();

    expect(component.player).toBe('test');
  });

  it('submits player name when clicking submit button', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    spyOn(component.submittingPlayer, 'emit');

    component.player = 'test';
    button.click();
    fixture.detectChanges();

    expect(component.submittingPlayer.emit).toHaveBeenCalledTimes(1);
    expect(component.submittingPlayer.emit).toHaveBeenCalledWith('test');
  });
});
