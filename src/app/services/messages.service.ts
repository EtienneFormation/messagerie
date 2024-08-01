import { Injectable } from '@angular/core';
import {Message} from "../interfaces/message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages : Message[] = [];
  authors : string[] = [];

  constructor() { }

  addMessage(message: Message) {
    this.messages.push(message);
    if (!this.authors.includes(message.author))
      this.authors.push(message.author);
  }
}
