import { Component } from '@angular/core';
import {MessageFormComponent} from "../message-form/message-form.component";
import {MessagesComponent} from "../messages/messages.component";
import {UsersComponent} from "../users/users.component";

@Component({
  selector: 'app-messagerie',
  standalone: true,
    imports: [
        MessageFormComponent,
        MessagesComponent,
        UsersComponent
    ],
  templateUrl: './messagerie.component.html',
  styleUrl: './messagerie.component.css'
})
export class MessagerieComponent {

}
