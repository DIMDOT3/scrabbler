import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

import { FormControl } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @Output() wordSubmitted = new EventEmitter<string>();
  word: string = "";

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.wordSubmitted.emit(this.word);
    this.word = "";
  }
}
