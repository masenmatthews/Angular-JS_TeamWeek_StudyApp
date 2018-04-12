import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router'
import { Message } from '../models/message.model';
import { Chat } from '../models/chat.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [UserService, ChatService]
})
export class ChatComponent implements OnInit {
  userDisplay;
  users;
  chats;
  public currentUser = this.authService.userDetails;
  constructor(private router: Router, private userService: UserService, private authService: AuthService, private chatService: ChatService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userDisplay = dataLastEmittedFromObserver;
      this.users = this.userDisplay;
    })
    this.chatService.getChats().subscribe(dataLastEmittedFromObserver => {
      this.chats = dataLastEmittedFromObserver;
    });
  }

  checkMember(userArray: string[]){
    if (userArray.includes(this.currentUser.email)) {
      return true;
    } else {
      return false;
    }
  }    

  reply(chat) {
    this.router.navigate(['chat', chat.$key]);
    window.location.reload(true);
  }

  archiveChat(chat) {
    if (confirm('Are you sure you want to archive this chat?')) {
      chat.isArchived = true;
      this.chatService.archive(chat);
    }
  }
}
