import { NgModule }       from '@angular/core'; 
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { VoteComponent }   from './vote.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    VoteComponent,
  ],
  bootstrap: [ AppComponent ] 
})

export class AppModule {
}
