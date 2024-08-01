import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "Messagerie";
  protected readonly sessionStorage = sessionStorage;

  constructor(private router: Router) {
  }

  deconnexion() {
    sessionStorage.removeItem("user");
    this.router.navigate(["/"]);
  }
}
