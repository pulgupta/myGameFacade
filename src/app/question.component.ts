import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';
import { Question } from './Question';
import { QuestionService } from './question.service';

@Component({
  selector: 'question',
  providers: [QuestionService],
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  model = new Question('', 'Enter your question details here', 
    'Enter comma separated option', null, '', 1, '');
  submitted = false;
  uid: string;

  constructor (
    private _dataService: QuestionService,
    private router: Router,
  ) {}

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');
    this._dataService.saveQuestion(this.model)
            .subscribe((data: Question) => this.setModel(data),
              error => console.log(error),
              () => console.log('Get all Items complete'));
  }

  setModel(data: Question){
    this.uid = data.questionId;
    console.log('inside setModel');
    this.router.navigateByUrl('/team?questionId=' + this.uid);
  }

  clear() {
    this.model.question = '';
  }
  clearOption() {
    this.model.optionsFull = '';
  }
}
