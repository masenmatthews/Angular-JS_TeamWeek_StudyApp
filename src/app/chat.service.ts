import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Chat } from './models/chat.model';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;;

  constructor(private database: AngularFireDatabase) {
    this.chats = database.list('chats');
  };

  getChats() {
    return this.chats;
  }

  addChat(newChat: Chat) {
    this.chats.push(newChat)
  }

  getChatById(key: string) {
    return this.database.object('chats/' + key);
  }

  sendMessage(currentChat) {
    const chat = this.getChatById(currentChat.$key);
    chat.update({messageArray: currentChat.messageArray});
  }

}

