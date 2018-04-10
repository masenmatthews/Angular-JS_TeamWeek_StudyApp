import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//Welcome?
import { AppComponent } from './app.component';
//CreateUser
import { CreateUserComponent } from './create-user/create-user.component';
//Forum
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { RemovePostComponent } from './remove-post/remove-post.component';
//key

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './auth-guard.service';
import { firebaseApiKey } from './api-keys';
import { WelcomeComponent } from './welcome/welcome.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { appRoutes } from './app.routing';
import { AuthService } from './auth.service';
import { MzCardModule, MzSidenavModule, MzCollapsibleModule, MzIconModule, MzIconMdiModule, MzButtonModule, MzDropdownModule, MzInputModule, MzSelectModule, MzModalModule, MzParallaxModule } from 'ng2-materialize';
import { ChatComponent } from './chat/chat.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UserService } from './user.service';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';

//Configure firebase
export const firebaseConfig = {
  apiKey: firebaseApiKey.apiKey,
  authDomain: firebaseApiKey.authDomain,
  databaseURL: firebaseApiKey.databaseURL,
  storageBucket: firebaseApiKey.storageBucket
}
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PostDetailComponent,
    CreateUserComponent,
    WelcomeComponent,
    PostListComponent,
    AddPostComponent,
    RemovePostComponent,
    AddCommentComponent,
    CommentListComponent,
    ChatDetailComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzParallaxModule,
    MzCardModule,
    MzIconModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzCollapsibleModule,
    MzSelectModule,
    MzDropdownModule,
    MzModalModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule {};
