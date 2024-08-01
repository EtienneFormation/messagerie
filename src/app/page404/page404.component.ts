import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgIf
  ],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class Page404Component {

  protected readonly sessionStorage = sessionStorage;
}
