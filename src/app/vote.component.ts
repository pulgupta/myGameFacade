import { Component , Input} from '@angular/core';
import { voteQuestion } from './voteQuestion';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html'
})
export class VoteComponent {
  
  title = 'Lets put that to vote';
  model = new voteQuestion(1, '', '','', 1, 1);

  submitted = false;

  onSubmit() { this.submitted = true; 
  console.log('form submitted')}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model);}

}
