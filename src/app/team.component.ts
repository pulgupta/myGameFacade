import { Component } from '@angular/core';
import { Team } from './Team';

@Component({
  selector: 'team',
  templateUrl: './team.component.html'
})
export class TeamComponent {
  
  title = 'Lets put that to vote';
  model = new Team('', 'Enter team name', 
    'Enter coma team members',null);

  submitted = false;

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');  
    console.log(this.model.teamName);
    console.log(this.model.teammatesFull);
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model);}

}
