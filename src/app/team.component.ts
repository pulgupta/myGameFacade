import { Component } from '@angular/core';
import { Team } from './Team';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { TeamService } from './team.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
})
export class TeamComponent {
  
  private model: Team;
  questionId: string;

  constructor (
    private _dataService: TeamService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.questionId = params['questionId'];
        var idsArray = [ this.questionId ];
        this.model = new Team('', 'Enter team name', 
          'Enter coma team members',null, idsArray);
        console.log('This is query param ' + this.model.questionIds);
      });
  }

  submitted = false;

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');  
    console.log(this.model.teamName);
    console.log(this.model.teammatesFull);
    this._dataService.saveTeam(this.model)
        .subscribe((data: Team) => this.setmodel(data),
            error => console.log(error),
            () => console.log('Get all Items complete'));
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model);}

  setmodel(data: Team){
    let uid = data.teamId;
    console.log('inside team setmodel');
    this.router.navigateByUrl('/confirm?questionId=' + this.questionId + '&teamId=' + uid);
  } 

  clear() {
    this.model.teamName = '';
  }
  clearMates() {
    this.model.teammatesFull = '';
  }
}
