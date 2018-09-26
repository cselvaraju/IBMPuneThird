import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


import { ObservableService } from './services/observable.service';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { ObservableUserService } from './services/observableUser.service';
import { ObservableuserComponent } from './components/observableuser/observableuser.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestObservableComponent,
    ObservableuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ObservableService,
    ObservableUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
