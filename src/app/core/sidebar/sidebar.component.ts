import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AuthService as LocalAuthService } from 'src/app/shared/auth.service';
import { SocialUser } from 'angularx-social-login';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'satyas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isUserLogged = false;
  userName: string;
  photoUrl: string;
  subIsUserLoggedIn: Subscription;

  user$: Observable<User>;

  constructor(private localAuthService: LocalAuthService) { }
  ngOnInit(): void {
    // this.subIsUserLoggedIn = this.authService.socialUser$.subscribe((user: SocialUser) => {
    //   this.socialUser = user;
    //   this.userName = this.socialUser?.firstName;
    //   this.isUserLogged = (user != null);
    // });

    this.user$ = this.localAuthService.currentUserAction$;

    this.user$.subscribe(userObject => {
      if (userObject === null || userObject === undefined) {
        this.isUserLogged = false;
        this.userName = null;
      } else {
        this.isUserLogged = userObject.isUserLoggedIn;
        this.userName = userObject.userName;
        this.photoUrl = userObject.photoUrl;
      }
    });
  }

  getImageURL() {
    return this.photoUrl;
  }

  ngOnDestroy(): void {
    this.subIsUserLoggedIn.unsubscribe();
  }
}
