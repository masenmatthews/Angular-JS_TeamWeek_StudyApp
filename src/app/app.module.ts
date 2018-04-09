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



//Forum
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { RemovePostComponent } from './remove-post/remove-post.component';

//key
import { firebaseApiKey } from './api-keys';
import { WelcomeComponent } from './welcome/welcome.component';

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
    NewForumPostComponent,
    AddPostComponent,
    PostDetailComponent,
    PostListComponent,
    RemovePostComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
