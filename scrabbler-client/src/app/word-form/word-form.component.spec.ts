import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFormComponent } from './word-form.component';

describe('FormComponent', () => {
  let component: WordFormComponent;
  let fixture: ComponentFixture<WordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
