import { Component, OnInit, OnChanges } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CreateUserComponent, AuthService, UserService]
})


export class AppComponent implements OnInit {
  title = 'Chat App';
  public loggedIn: Boolean;
  public isAdmin: Boolean;
  public currentUser;
  public userInfo;

  users;
  constructor(private create: CreateUserComponent, private authService: AuthService, private router: Router, private userService: UserService) {

  }



  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
        this.currentUser = this.authService.userDetails.email;
      }
    })
    this.loggedIn = this.create.loggingIn;
    this.users = this.userService.getUsers();
  }

  logout() {
    this.authService.logout();
    location.reload();
    this.loggedIn = false;
  }

  findInfo(){
    this.currentUser = this.authService.userDetails.email
    this.userInfo = this.userService.getUserByEmail(this.currentUser)
    if (this.currentUser.isAdmin = true){
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  checkForAdmin() {
    if (this.currentUser === "admin@admin.com") {
      return true
    } else {
      return false;
    }
  }

  testButton() {
  }
}
