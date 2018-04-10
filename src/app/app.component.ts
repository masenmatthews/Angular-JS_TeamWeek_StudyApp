import { Component } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CreateUserComponent, AuthService, UserService]
})


export class AppComponent {
  title = 'Chat App';
  public LoggedIn: Boolean = false;

  constructor(private create: CreateUserComponent, private authService: AuthService, private router: Router) {
    this.LoggedIn = this.create.loggingIn;
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
