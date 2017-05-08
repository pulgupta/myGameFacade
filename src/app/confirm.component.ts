import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Router, ActivatedRoute, Params, Resolve } from '@angular/router';
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

  submitted = false;
  uid: string;
  question: Question;
  team: Team;
  questionId: string;
  teamId: string;
  isQuestionAvailable:boolean = false;
  isTeamAvailable:boolean = false;
  constructor (
    
    private _QuestionService: QuestionService,
    private _TeamService: TeamService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    
  ) {}

  ngOnInit() {
      this.isQuestionAvailable = false;
      this.isTeamAvailable = false;
    // subscribe to router event and the the query params
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.questionId = params['questionId'];
        this.teamId = params['teamId'];
      });

    //Now call the get services on the page load
    this._QuestionService.getQuestion(this.questionId)
      .subscribe((data: Question) => this.setQuestion(data),
              error => console.log(error),
              () => console.log('Get all Items complete'));

    this._TeamService.getTeam(this.teamId)
      .subscribe((data: Team) => this.setTeam(data),
              error => console.log(error),
              () => console.log('Get all Items complete'));

  }

  setQuestion(data: Question) {
    this.question=data;
    this.isQuestionAvailable=true;
  }
  setTeam(data: Team) {
    this.team=data;
    this.isTeamAvailable=true;
  }

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');
    this.question.ownerId = this.team.teamId;
    //update and link the question with the owner id that is the team id 
    this._QuestionService.updateQuestion(this.question)
      .subscribe((data: Question) => this.question=data,
              error => console.log(error),
              () => console.log('Get all Items complete'));
    this.router.navigateByUrl('/vote?questionId=' + this.questionId);
  }

}
