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
    this.chats = this.chatService.getChats()
  }

  checkEmail(recipient) {
    if (this.currentUser.email === recipient) {
      return true;
    } else {
      return false;
    }
  }

  startChat(user) {
    const currentTime = new Date();
    const defaultMessage = new Message ('Look a new chat!', this.currentUser.email);
    const newChat = new Chat ();
    defaultMessage.createTime = currentTime.toDateString();
    newChat.messageArray = [defaultMessage];
    newChat.userArray = [this.currentUser.email, user.email]
    this.chatService.addChat(newChat);
  }

  reply(chat) {
    this.router.navigate(['chat', chat.$key])
  }
}
