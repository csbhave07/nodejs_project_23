import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: any = 0;
  redirectUrl: string | null = null

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
