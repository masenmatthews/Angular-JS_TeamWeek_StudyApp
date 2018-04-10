import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [AuthService, UserService]
})
export class CreateUserComponent implements OnInit {
  public loggingIn: Boolean = false;
  public creating: Boolean = false;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
  }
  ngOnInit() {
  }

  createAccountRedirect() {
    this.loggingIn = true;
    this.creating = false;
  }

  loginRedirect() {
    this.router.navigate(['/']);
  }

  beginLogin() {
    this.loggingIn = true;
    this.creating = false;
  }

  beginCreate() {
    this.creating = true;
    this.loggingIn = false;
    
  }

  createAccount(userName: string, email:string, password:string) {
    let newUser: User = new User(userName, email)
    this.authService.createUser(newUser.email, password);
      this.userService.addUser(newUser);
      this.createAccountRedirect();
    }

    logIn(email, password) {
      this.loggingIn = true;
      this.authService.login(email, password);
      this.loginRedirect();
    }
}
