import { Component } from '@angular/core';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent {
  surveyQuestions:any = [
    {
      id: 1,
      title: 'How important is it that I achieve this?',
      options: [{id:1, name:'Critical'}, {id:2, name:'High Priority'}, {id:3, name:'Priority'}, {id:4, name:'Low Priority'}, {id:5, name:'Not a Priority'}],
    },
    {
      id: 2,
      title: 'How do I rate my performance aginst this?',
      options: [{id:1, name:'I am excellent at this'}, {id:2, name:'I am good at this'}, {id:3, name:'I am average at this'}, {id:4, name:'I am poor at this'}, {id:5, name:'NI am terrible at this'}],
    },
  ];

  onAnswer1(answer: string): void {
    console.log(`Answer to question 1: ${answer}`);
  }

  onAnswer2(answer: string): void {
    console.log(`Answer to question 2: ${answer}`);
  }
}
