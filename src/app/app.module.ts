import { NgModule }       from '@angular/core'; 
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { QuestionComponent }   from './question.component';
import { TeamComponent } from './team.component'

const appRoutes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'team',      component: TeamComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    QuestionComponent,
    TeamComponent
  ],
  bootstrap: [ AppComponent ] 
})

export class AppModule {
}
