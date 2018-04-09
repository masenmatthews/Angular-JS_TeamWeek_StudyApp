import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  constructor() {};

  users: FirebaseListObservable<any[]>;

  getUsers() {
    return this.users;
  }

  
}
