import { Injectable } from '@angular/core';
import { User, UserModel } from './user.model';
import { BehaviorSubject, Observable, of, from, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { AuthService as SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserModel: User | null;

  // private getOnlineStatus = new BehaviorSubject<boolean>(false);
  // getOnlineStatusAction$ = this.getOnlineStatus.asObservable();

  private currentUser = new BehaviorSubject<User>(this.currentUserModel);
  currentUserAction$ = this.currentUser.asObservable();

  constructor(private socialAuthService: SocialAuthService) { }

  socialUser$ = this.socialAuthService.authState;

  // Below messages must be from API.
  message$ = from(['satya', 'lakshmi', 'sindhu',
    'praveen', 'ubaid', 'sharath', 'kumar',
    'reddy', 'remote', 'job', 'zimbabwe', 'exercise', 'chanel', 'elephant', 'engineer']).pipe(
      tap(x => console.log(x)),
      catchError(err => throwError('Error occured !'))
    );

  localLogin(loginFormValues: any): Observable<boolean> {
    if (this.currentUserModel?.email === loginFormValues.userName && this.currentUserModel?.password === loginFormValues.userPwd) {
      this.currentUserModel = {
        userName: this.currentUserModel.userName,
        email: this.currentUserModel.email,
        password: loginFormValues.userPwd,
        isSocialLogin: false,
        isUserLoggedIn: true,
        photoUrl: './assets/images/Satyanarayana_Devi.jpg'
      };

      this.currentUser.next(this.currentUserModel);
      return of(true);
    } else {
      this.currentUser.next(null);
      return of(false);
    }
  }

  registration(registrationFormValues: any): Observable<User> {
    this.currentUserModel = {
      userName: registrationFormValues?.userName,
      email: registrationFormValues?.emailGroup.userEmail,
      password: registrationFormValues?.userPwd,
      isSocialLogin: false,
      isUserLoggedIn: false,
      photoUrl: './assets/images/Satyanarayana_Devi.jpg'
    };

    this.currentUser.next(this.currentUserModel);

    return of(this.currentUserModel);
  }

  socialLogin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.socialUser$.subscribe((socialUser: SocialUser) => {

        this.currentUserModel = socialUser ? {
          userName: socialUser.firstName,
          email: socialUser?.email,
          password: null,
          isSocialLogin: true,
          isUserLoggedIn: true,
          photoUrl: socialUser.photoUrl
        } : null;
        this.currentUser.next(this.currentUserModel);
      });
    });
  }

  logout(): Observable<any> {
    this.currentUser.next(null);
    if (this.currentUserModel.isSocialLogin) {
      return from(this.socialAuthService.signOut());
    } else {
      return of(null);
    }
  }
  // socialLogout(): void {
  //   this.currentUser.next(null);
  //   this.authService.signOut();
  // }

  // login(userName: string, password: string): void {
  //   this.currentUser = {
  //     id: 2,
  //     userName,
  //     isAdmin: false
  //   };

  //   this.isUserLoggedIn.next(this.currentUser);
  //   this.getOnlineStatus.next(true);
  //   console.log(`User ${this.currentUser.userName} is online and logged in`);
  // }

  // logout(): void {
  //   this.socialAuthService.signOut();
  // if (this.currentUserModel.isSocialLogin) {
  //   this.socialAuthService.signOut();
  // }
  // this.currentUser.next(null);

  // this.getOnlineStatus.next(false);
  // console.error(`User ${this.currentUser.userName} is offline and logged out`);
  // this.currentUser = undefined;
  // this.isUserLoggedIn.next(this.currentUser);
  // }
}
