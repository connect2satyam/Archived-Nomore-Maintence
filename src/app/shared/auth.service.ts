import { Injectable } from '@angular/core';
import { User } from './user.model';
import { BehaviorSubject, Observable, of, from, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { AuthService as SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null;
  redirectUrl: string;

  private getOnlineStatus = new BehaviorSubject<boolean>(false);
  getOnlineStatusAction$ = this.getOnlineStatus.asObservable();

  private isUserLoggedIn = new BehaviorSubject<User>(this.currentUser);
  isUserLoggedInAction$ = this.isUserLoggedIn.asObservable();

  constructor(private authService: SocialAuthService) { }

  socialUser$ = this.authService.authState;

  // Below messages must be from API.
  message$ = from(['satya', 'lakshmi', 'sindhu',
    'praveen', 'ubaid', 'sharath', 'kumar',
    'reddy', 'remote', 'job', 'zimbabwe', 'exercise', 'chanel', 'elephant', 'engineer']).pipe(
      tap(x => console.log(x)),
      catchError(err => throwError('Error occured !'))
    );

  login(userName: string, password: string): void {
    this.currentUser = {
      id: 2,
      userName,
      isAdmin: false
    };

    this.isUserLoggedIn.next(this.currentUser);
    this.getOnlineStatus.next(true);
    console.log(`User ${this.currentUser.userName} is online and logged in`);
  }

  logout(): void {
    this.authService.signOut();
    this.getOnlineStatus.next(false);
    // console.error(`User ${this.currentUser.userName} is offline and logged out`);
    // this.currentUser = undefined;
    // this.isUserLoggedIn.next(this.currentUser);
  }
}
