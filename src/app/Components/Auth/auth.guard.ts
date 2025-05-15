import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
debugger
  const token = localStorage.getItem('token');
    const router = inject(Router); // ✅ Inject Router correctly

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  // return true;


};
