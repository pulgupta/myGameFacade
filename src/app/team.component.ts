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
  
  constructor (
    private _dataService: TeamService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        let questionId = params['questionId'];
        var idsArray = [ questionId ];
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
            .subscribe(() => this.model,
                error => console.log(error),
                () => console.log('Get all Items complete'));
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model);}

}
