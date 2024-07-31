import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MessageItemComponent} from "../message-item/message-item.component";

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
  messages = [
    {author : "Etienne", content : "Hello tout le monde 1!", date : new Date()},
    {author : "Etienne", content : "Hello tout le monde !", date : new Date()},
    {author : "Etienne", content : "Hello tout le monde !", date : new Date()},
    {author : "Etienne", content : "Hello tout le monde !", date : new Date()},
    {author : "Etienne", content : "Hello tout le monde !", date : new Date()}
  ];
}
