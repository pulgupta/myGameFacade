import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <vote>Vote Goes Here</vote>
  `
})
export class AppComponent {
  title = 'Our Team Maclaren\'s Pub';
}
