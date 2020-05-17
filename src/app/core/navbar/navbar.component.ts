import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService as LocalAuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/user.model';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'satyas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isUserLogged = false;

  constructor(
    private router: Router,
    private localAuthService: LocalAuthService,
    private themeService: ThemeService) { }
  @Output() eventoNavbar = new EventEmitter();
  dateTime: Date;
  userName: string;
  user$: Observable<User>;
  themes: string[] = ['Light', 'Dark', 'Satya', 'Praveen'];


  ngOnInit(): void {
    this.user$ = this.localAuthService.currentUserAction$;

    this.user$.subscribe(userObject => {
      if (userObject === null || userObject === undefined) {
        this.isUserLogged = false;
        this.userName = null;
      } else {
        this.isUserLogged = userObject?.isUserLoggedIn;
        this.userName = userObject?.userName;
      }
    });

    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);

    this.themeService.setLightTheme();
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
    this.localAuthService.logout().subscribe(() => {
      this.router.navigate(['/welcome']);
    });
  }

  ngOnDestroy(): void {
  }
}
