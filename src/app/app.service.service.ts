import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(
    private http : HttpClient
  ) { }

  sentSurveyData(){
    return this.http.get("");
  }

}

