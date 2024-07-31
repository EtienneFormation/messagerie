import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MessagesService} from "../services/messages.service";

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

  constructor(private service : MessagesService) {
    this.users = this.service.authors;
  }
  /*
  users = [
    "Pierrick",
    "Rémy",
    "Paul",
    "Maxime",
    "Laëtitia",
    "Sarah",
    "Alice",
    "Hélène",
    "Maëlle",
    "Roxanne",
    "Onur",
    "Audrey",
    "Eloïse",
    "Pauline",
    "Kévin",
    "Chloé",
    "Arthur",
    "Alexandre L.",
    "Olivier",
    "Tony",
    "Bastien",
    "Hugo",
    "Alexandre N.",
    "Jérémy",
    "Aurélien",
    "Matthew",
    "Benjamin",
    "Etienne"
  ];*/
}
