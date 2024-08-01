import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  username = "";
  password = "";
  message = "";

  constructor(private service : UsersService, private router: Router) {
  }

  connexion() {
    if (this.service.findUser(this.username, this.password)) {
      sessionStorage.setItem("user", this.username);
      this.router.navigate(["/messagerie"]);
    } else {
      this.message = "Identifiant ou mot de passe incorrect !";
    }
  }
}
