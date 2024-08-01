import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const userDisconnectedGuard: CanActivateFn = (route, state) => {
  if (!sessionStorage.getItem("user")) {
    return true;
  }

  let router = inject(Router);
  router.navigate(["/messagerie"]);

  return false;
};
