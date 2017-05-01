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

  model = new Question(1, 'Enter your question details here', 
    'Enter coma seperated option',null,'', 1, 1);

  submitted = false;

  onSubmit() { this.submitted = true; 
    console.log('form submitted. We got the data. ');  
    console.log(this.model.question);
    console.log(this.model.optionsFull); //-> We are getting the updated data from the form here
    this._dataService.saveQuestion(this.model)
            .subscribe(() => this.model,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    this.router.navigateByUrl('/team');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model);}

}
