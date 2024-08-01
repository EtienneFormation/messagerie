import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MessageItemComponent} from "../message-item/message-item.component";
import {MessagesService} from "../services/messages.service";
import {Message} from "../interfaces/message";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgForOf,
    MessageItemComponent,
    NgIf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages : Message[] = [];

  constructor(private service : MessagesService) {
    this.messages = this.service.messages;
  }
}
