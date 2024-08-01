import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const userConnectedGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem("user")) {
    return true;
  }

  let router = inject(Router);
  router.navigate(["/"]);

  return false;
};
