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

  constructor (
    private _dataService: QuestionService,
    private router: Router,
  ) {}

  model = new Question('', 'Enter your question details here', 
    'Enter coma seperated option',null,'', 1, 1);

  submitted = false;
  uid: string;

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');  
    this._dataService.saveQuestion(this.model)
            .subscribe((data: Question) => 
              this.setmodel(data),
              error => console.log(error),
              () => console.log('Get all Items complete'));
  }

  setmodel(data: Question){
    this.uid = data.questionId;
    console.log('inside setmodel');
    this.router.navigateByUrl('/team?questionId='+this.uid);
  } 
}
