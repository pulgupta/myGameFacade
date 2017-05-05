import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';
import { Question } from './Question';
import { QuestionService } from './question.service';
import { Team } from './Team';
import { TeamService } from './team.service';

@Component({
  selector: 'confirm',
  providers: [
    QuestionService, 
    TeamService
  ],
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {

  constructor (
    private _QuestionService: QuestionService,
    private _TeamService: TeamService,
    private router: Router,
  ) {}

  model = new Question('', 'Enter your question details here', 
    'Enter coma seperated option',null,'', 1, 1);

  submitted = false;
  uid: string;

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');  
    this._QuestionService.getQuestion(this.model)
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
