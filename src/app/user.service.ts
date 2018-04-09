import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  };

  users: FirebaseListObservable<any[]>;

  getUsers() {
    return this.users;
  }

  addUser(newUser: User) {
    this.users.push(newUser)
  }

}
