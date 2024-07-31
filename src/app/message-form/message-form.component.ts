import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css'
})
export class MessageFormComponent {
  username: string = "";
  content: string = "";

  constructor(private service : MessagesService) {
  }

  sendMessage() {
    this.service.addMessage({
      author : this.username,
      content : this.content,
      date : new Date()
    });

    this.content = "";
  }
}
