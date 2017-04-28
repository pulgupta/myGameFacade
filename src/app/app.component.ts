import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <question>Vote Goes Here</question>
    <team>Team Goes Here</team>
  `
})
export class AppComponent {
  title = 'Our Team Maclaren\'s Pub';
}
