import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages : {author : string, content : string, date : Date}[] = [];
  authors : string[] = [];

  constructor() { }

  addMessage(message: any) {
    this.messages.push(message);
    if (!this.authors.includes(message.author))
      this.authors.push(message.author);
  }
}
