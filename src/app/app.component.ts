import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
    <div class="text-center component" >
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <a class="navbar-brand" href="#">KLGS</a>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a routerLink="/question" routerLinkActive="active">POST A NEW POLL
              <span class="sr-only">(current)</span></a></li>
            <li></li>
          </ul>
        </div>
      </nav>
      <br/><br/><br/><br/>
    </div>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Lets Vote and Decide';
}
