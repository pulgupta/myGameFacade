import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="text-center">
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/question" routerLinkActive="active">Enter Question Details</a>
        <a routerLink="/team" routerLinkActive="active">Enter Team Details</a>
      </nav>
      </div>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Lets Vote and Decide';
}
