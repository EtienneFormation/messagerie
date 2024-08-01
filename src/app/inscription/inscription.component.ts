import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  username = "";
  password = "";

  constructor(private service : UsersService, private router: Router) {
  }

  inscription() {
    this.service.addUser({username : this.username, password: this.password});
    this.router.navigate(["/"]);
  }
}
