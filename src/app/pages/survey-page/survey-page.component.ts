import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SurveyQuestionComponent } from '../survey-question/survey-question.component';
import { AppServiceService } from 'src/app/app.service.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/settings/constants';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent implements OnInit {
  nextQue: any;
  selectedRating = 5;
  ratings = Array.from({ length: 11 }, (_, index) => index + 1);
  ngOnInit() {
    console.log();

  }
  questions1: any = localStorage.getItem("language")
  test: any = this.questions1 == "Japanese" ? this.constants.japQuestions : this.constants.engQuestion;
  questions: any = this.questions1 == "Japanese" ? this.constants.japQuestions : this.constants.engQuestion;
  surveyQuestions: any = this.questions1 == "Japanese" ? this.constants.surveyQuestions : this.constants.enSurveyQuestions;

  currentQuestionIndex: number = 0;
  answers: any[] = [];
  questionAnswers: any[] = [];

  constructor(
    private cdref: ChangeDetectorRef,
    private service: AppServiceService,
    private route: Router,
    private constants: AppConstants,
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
      let obj: any ={}
      let data: any =localStorage.getItem("user")
      obj['name'] = JSON.parse(data).name      
      obj['email'] = JSON.parse(data).email
      obj['language'] = this.questions1 == "English" ? 1 : 2;
      obj['age'] = JSON.parse(data).age
      obj['response_data'] = []
      obj.response_data.push(this.questionAnswers)
      this.service.sentSurveyData(obj).subscribe(
        (res: any)=>{
          if(res.success){
            this.route.navigate(["/thankyou"])
          }
        }
      )
      this.route.navigate(["/thankyou"])
    }
    // Check if answers are provided for both questions
    if (
      this.answers[this.currentQuestionIndex]?.answer1 !== undefined &&
      this.answers[this.currentQuestionIndex]?.answer2 !== undefined
    ) {
      // Save the answers to the questionAnswers array
      this.questionAnswers.push({
        questionId: this.currentQuestion.id,
        responce_one_id: this.answers[this.currentQuestionIndex].answer1,
        responce_two_id: this.answers[this.currentQuestionIndex].answer2
      });

      // Increment the current question index
      this.currentQuestionIndex++;

      // Log the current state of questionAnswers to the console
      console.log('Current answers:', this.questionAnswers);

      // Clear the selected option for the current question
      this.clearInput()

    } else {
    }
  }

  setRating(value: number): void {
    this.selectedRating = value;
  }
  clearInput(){
    this.nextQue = ""
  }

}
