import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [UserService]
})
export class ChatComponent implements OnInit {
  userDisplay;
  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userDisplay = dataLastEmittedFromObserver;
      this.users = this.userDisplay;
      console.log(this.users[0]);
    })
  }


}
