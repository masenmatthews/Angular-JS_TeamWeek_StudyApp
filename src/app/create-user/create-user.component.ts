import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [AuthService, UserService]
})
export class CreateUserComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) {
  }
  ngOnInit() {
  }

  createAccount(userName: string, email:string, password:string) {
    let newUser: User = new User(userName, email)
    this.authService.createUser(newUser.email, password);
      this.userService.addUser(newUser);
    }
}
