import { NgModule }       from '@angular/core'; 
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { QuestionComponent }   from './question.component';
import { TeamComponent } from './team.component';
import { QuestionService } from './question.service';
import { TeamService } from './team.service';
import { Configuration } from './configuration';
import { ConfirmComponent } from './confirm.component'

const appRoutes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'team',      component: TeamComponent },
  { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    QuestionService,
    Configuration,
    TeamService,
  ],
  declarations: [
    AppComponent,
    QuestionComponent,
    TeamComponent,
    ConfirmComponent
  ],
  bootstrap: [ AppComponent ] 
})

export class AppModule {
}
