import { Component } from '@angular/core';

import { voteRecord } from './voteRecord';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html'
})
export class VoteComponent {
  title = 'Lets put that to vote';
  team = ['Ak','PG','RW','JS','JO','RC'];
  votes = ['','','','','',''];
  record = new voteRecord('McLaren', 1, this.team, this.votes );
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.record); }
}