import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component'

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(public afAuth: AngularFireAuth, private router: Router, private userService: UserService) {
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
    firebase.auth().signInWithEmailAndPassword(email, password);
    }

    createUser(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
}
