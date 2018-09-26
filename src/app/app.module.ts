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
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {path: 'home', component: ParentComponent},
  {path: 'users', component: UserlistComponent},
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestObservableComponent,
    ObservableuserComponent,
    PostsComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ObservableService,
    ObservableUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
