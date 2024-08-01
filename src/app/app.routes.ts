import { Routes } from '@angular/router';
import {ConnexionComponent} from "./connexion/connexion.component";
import {MessagerieComponent} from "./messagerie/messagerie.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {userDisconnectedGuard} from "./user-disconnected.guard";
import {userConnectedGuard} from "./user-connected.guard";
import {Page404Component} from "./page404/page404.component";

export const routes: Routes = [
  {path : "" , component: ConnexionComponent, canActivate: [userDisconnectedGuard]},
  {path : "inscription" , component: InscriptionComponent, canActivate: [userDisconnectedGuard]},
  {path : "messagerie", component : MessagerieComponent, canActivate: [userConnectedGuard]},
  {path : "404", component : Page404Component},
  {path : "**", redirectTo : "/404"}
];
