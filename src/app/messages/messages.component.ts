import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
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
export class MessagesComponent implements AfterViewChecked {
  @ViewChild("messages_holder") holder ?: ElementRef;

  messages : Message[] = [];

  constructor(private service : MessagesService) {
    this.messages = this.service.messages;
  }

  ngAfterViewChecked() {
    if (this.holder)
      this.holder.nativeElement.scrollTo({left : 0, top : this.holder.nativeElement.scrollHeight, behavior: "smooth"});
  }
}
