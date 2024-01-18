import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss']
})
export class SurveyQuestionComponent {
  @Input() question: { id: number; title: string; options: any[] } = { id: 0, title: '', options: [] };
  @Output() answer = new EventEmitter<string>();

  onOptionChange(option: string): void {
    this.answer.emit(option);
  }
}
