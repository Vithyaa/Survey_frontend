import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SurveyQuestionComponent } from '../survey-question/survey-question.component';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent implements OnInit {
  nextQue: any;
  ngOnInit() {
    console.log();

  }
  questions: any = [
    { id: 1, topic: "Acceptance", question: "" },
    { id: 2, topic: "Ambition", question: "" },
    { id: 3, topic: "Autonomy", question: "" },
    { id: 4, topic: "Awareness", question: "" },
    { id: 5, topic: "Discernment", question: "" },
    { id: 6, topic: "Intention", question: "" },
    { id: 7, topic: "Passion", question: "" },
    { id: 8, topic: "Purpose", question: "" },
    { id: 9, topic: "Refinement", question: "" },
    { id: 10, topic: "Resilience", question: "" },
    { id: 11, topic: "Responsibility", question: "" },
    { id: 12, topic: "Mindset Ranking", question: "“In your opinion, please rank the following 11 mindset disciplines (with 1 being the most valuable and 11 being the least valuable) for your own entrepreneurial journey.”" }
  ];
  surveyQuestions: any = [
    {
      id: 1,
      title: 'How important is it that I achieve this?',
      options: [{ id: 1, name: 'Critical' }, { id: 2, name: 'High Priority' }, { id: 3, name: 'Priority' }, { id: 4, name: 'Low Priority' }, { id: 5, name: 'Not a Priority' }],
    },
    {
      id: 2,
      title: 'How do I rate my performance against this?',
      options: [{ id: 1, name: 'I am excellent at this' }, { id: 2, name: 'I am good at this' }, { id: 3, name: 'I am average at this' }, { id: 4, name: 'I am poor at this' }, { id: 5, name: 'I am terrible at this' }],
    },
    // ... (other survey questions)
  ];

  currentQuestionIndex: number = 0;
  answers: any[] = [];
  questionAnswers: any[] = [];

  constructor(
    private cdref: ChangeDetectorRef
  ){

  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  get currentAnswer() {
    return this.answers[this.currentQuestionIndex];
  }

  onAnswer1(answer: any): void {
    this.answers[this.currentQuestionIndex] = { ...this.answers[this.currentQuestionIndex], answer1: answer };
  }

  onAnswer2(answer: any): void {
    this.answers[this.currentQuestionIndex] = { ...this.answers[this.currentQuestionIndex], answer2: answer };
  }

  onNextClick(): void {
    if(this.currentQuestionIndex == 11){
      
    }
    // Check if answers are provided for both questions
    if (
      this.answers[this.currentQuestionIndex]?.answer1 !== undefined &&
      this.answers[this.currentQuestionIndex]?.answer2 !== undefined
    ) {
      // Save the answers to the questionAnswers array
      this.questionAnswers.push({
        questionId: this.currentQuestion.id,
        answer1: this.answers[this.currentQuestionIndex].answer1,
        answer2: this.answers[this.currentQuestionIndex].answer2
      });

      // Increment the current question index
      this.currentQuestionIndex++;

      // Log the current state of questionAnswers to the console
      console.log('Current answers:', this.questionAnswers);

      // Clear the selected option for the current question
      this.nextQue = ""
      this.cdref.detectChanges()

    } else {
    }
  }

}
