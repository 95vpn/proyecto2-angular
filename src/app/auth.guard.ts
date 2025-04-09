import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return false; // o redirigir
  }

  const id = localStorage.getItem('id');
  return id === '1234';

  
};
