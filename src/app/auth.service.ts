import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user.model';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) { this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    }
    )
  }
  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    }

    createUser(user: User) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    }
}
