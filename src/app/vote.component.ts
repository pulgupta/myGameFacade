import { Component , Input} from '@angular/core';
import { VoteQuestion } from './voteQuestion';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html'
})
export class VoteComponent {
  
  title = 'Lets put that to vote';
  model = new VoteQuestion(1, 'Enter your question details here', 
    'Enter coma seperated option',null,'', 1, 1);

  submitted = false;

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');  
    console.log(this.model.question);
    console.log(this.model.optionsFull); //-> We are getting the updated data from the form here
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model);}

}
