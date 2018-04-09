import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MzButtonModule, MzInputModule, MzSelectModule } from 'ng2-materialize';
import { AppComponent } from './app.component';
import { NewForumPostComponent } from './new-forum-post/new-forum-post.component';
import { ChatComponent } from './chat/chat.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NewForumPostComponent,
    ChatComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
