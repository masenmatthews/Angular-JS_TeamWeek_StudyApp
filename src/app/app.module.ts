import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewForumPostComponent } from './new-forum-post/new-forum-post.component';


@NgModule({
  declarations: [
    AppComponent,
    NewForumPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
