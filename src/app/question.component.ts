import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Question } from './Question';

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  
  private questionAPI = 'http://localhost:8080/question';  // URL to web API

  constructor (private http: Http) {}

  model = new Question(1, 'Enter your question details here', 
    'Enter coma seperated option',null,'', 1, 1);

  submitted = false;

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');  
    console.log(this.model.question);
    console.log(this.model.optionsFull); //-> We are getting the updated data from the form here
    this.saveQuestion()
            .subscribe((ques:Question) => this.model = ques,
                error => console.log(error),
                () => console.log('Get all Items complete'));
  }

  saveQuestion(): Observable<Question> {
    console.log('saving')
    return this.http.post(this.questionAPI, this.model)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model);}

}
