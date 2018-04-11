import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router'
import { Message } from '../models/message.model';
import { Chat } from '../models/chat.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css'],
  providers: [UserService, ChatService, AuthService]
})

export class NewChatComponent implements OnInit {
  userDisplay;
  users;
  currentUser; 
  usersToBeAdded: string[] = [];

  constructor(private router: Router, private userService: UserService, private authService: AuthService, private chatService: ChatService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userDisplay = dataLastEmittedFromObserver;
      this.users = this.userDisplay;
    });
    this.currentUser = this.authService.userDetails;
  }

  isInArray(email: string) {
    if (this.usersToBeAdded.includes(email)) {
      return true;
    } else {
      return false;
    }
  }

  addToChat(email: string) {
    this.usersToBeAdded.push(email);
  }

  removeFromChat(idx) {
    this.usersToBeAdded.splice(idx, 1);
  }

  startChat(name: string, message: string) {
    console.log(message);
    let defaultMessage;
    if (message === ''){
      defaultMessage = new Message(this.currentUser.email + ' has started a chat with you!', this.currentUser.email);
    } else {
      defaultMessage = new Message(message, this.currentUser.email);
    }
    const currentTime = new Date();
    const newChat = new Chat(name);
    defaultMessage.createTime = currentTime.toDateString();
    newChat.messageArray = [defaultMessage];
    this.usersToBeAdded.push(this.currentUser.email);
    newChat.userArray = this.usersToBeAdded;
    this.chatService.addChat(newChat);
  }

  reply(chat) {
    this.router.navigate(['chat', chat.$key])
  }

  archiveChat(chat) {
    if (confirm('Are you sure you want to archive this chat?')) {
      chat.isArchived = true;
      this.chatService.archive(chat);
    }
  }
}

