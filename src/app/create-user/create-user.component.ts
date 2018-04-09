import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [AuthService]
})
export class CreateUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  createAccount(userName, email, password) {
    let newUser = new User(userName, email, password)
    this.authService.createUser(newUser);
  }

}
