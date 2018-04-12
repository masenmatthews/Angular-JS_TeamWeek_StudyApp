import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ChatService } from '../chat.service'
import { AuthService } from '../auth.service';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css'],
  providers: [ChatService, AuthService]
})
export class ChatDetailComponent implements OnInit {
  chatToDisplay = null;
  chatId: string;
  public currentUser;

  constructor(private authService: AuthService, private route: ActivatedRoute, private chatService: ChatService, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.chatId = urlParameters['id'];
    });
    this.chatToDisplay = this.chatService.getChatById(this.chatId)
    .subscribe(dataLastEmittedFromObserver => {
      this.chatToDisplay = dataLastEmittedFromObserver;
    });
    this.currentUser = this.authService.userDetails.email;
  }

  checkForSender(sender) {
    if (this.currentUser === sender) {
      return true;
    } else {
      return false;
    }
  }

  reply(reply: string) {
    if (reply === '') {
      return alert('Cant send an empty message!')
    }
    const date = new Date();
    const dateString = date.toString();
    let newMessage = new Message(reply, this.currentUser)
    newMessage.createTime = dateString;
    this.chatToDisplay.messageArray.unshift(newMessage);
    this.chatService.sendMessage(this.chatToDisplay);
  }
}
