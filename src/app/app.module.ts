import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { appRoutes } from './app.routing';
import { AuthService } from './auth.service';

import { MzButtonModule, MzInputModule, MzSelectModule } from 'ng2-materialize';
import { AppComponent } from './app.component';
import { NewForumPostComponent } from './new-forum-post/new-forum-post.component';
import { ChatComponent } from './chat/chat.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NewForumPostComponent,
    ChatComponent,
    CreateUserComponent,

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
