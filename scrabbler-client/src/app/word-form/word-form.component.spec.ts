import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFormComponent } from './word-form.component';
import { FormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: WordFormComponent;
  let fixture: ComponentFixture<WordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordFormComponent],
      imports: [FormsModule],
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
