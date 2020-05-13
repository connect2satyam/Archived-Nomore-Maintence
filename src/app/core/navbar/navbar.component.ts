import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription, Observable } from 'rxjs';
import { ThemeService } from 'src/app/theme/theme.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'satyas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  // private socialUser$: Observable<SocialUser>;
  socialUser: SocialUser;
  isUserLogged = false;

  constructor(private router: Router, private authService: AuthService, private themeService: ThemeService) { }
  @Output() eventoNavbar = new EventEmitter();
  dateTime: Date;
  userName: string;
  //  subOnlineStatus: Subscription;
  subIsUserLoggedIn: Subscription;
  themes: string[] = ['Light', 'Dark', 'Satya', 'Praveen'];


  ngOnInit(): void {
    this.subIsUserLoggedIn = this.authService.socialUser$.subscribe((user: SocialUser) => {
      this.socialUser = user;
      this.userName = this.socialUser?.firstName;
      this.isUserLogged = (user != null);
    });

    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);

    this.themeService.setLightTheme();

    // this.subOnlineStatus = this.authService.getOnlineStatusAction$.subscribe(isUserLogged => {
    //   this.isUserLogged = isUserLogged;
    // });

    // this.subIsUserLoggedIn = this.authService.isUserLoggedInAction$.subscribe(user => {
    //   this.userName = user !== undefined ? user.userName : null;
    // });
  }

  toggleMenu() {
    this.eventoNavbar.emit();
  }

  onSelected(themeSelected: string) {
    switch (themeSelected) {
      case 'Satya':
        this.themeService.setSatyaTheme();
        break;
      case 'Dark':
        this.themeService.setDarkTheme();
        break;
      case 'Praveen':
        this.themeService.setPraveenTheme();
        break;
      default:
        this.themeService.setLightTheme();
    }
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  ngOnDestroy(): void {
    // this.subOnlineStatus.unsubscribe();
    this.subIsUserLoggedIn.unsubscribe();
  }
}
