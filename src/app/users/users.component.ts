import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MessagesService} from "../services/messages.service";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users;

  constructor(private service : UsersService) {
    this.users = this.service.users;
  }
}
