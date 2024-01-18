import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss']
})
export class SurveyQuestionComponent implements OnChanges {
  @Input() question: { id: number; title: string; options: any[] } = { id: 0, title: '', options: [] };
  @Input() enabled: boolean = true;
  @Output() answer = new EventEmitter<string>();

  selectedOption: string | undefined;
  value: any;

  ngOnChanges(changes: SimpleChanges): void {
      this.value = this.enabled
  }

  onOptionChange(option: string): void {
    this.selectedOption = option;
    this.answer.emit(option);
  }
}
