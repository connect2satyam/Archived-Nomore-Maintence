import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'satyas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit , OnDestroy {
  constructor(private router: Router, private authService: AuthService) {}
  @Output() eventoNavbar = new EventEmitter();
  dateTime: Date;
  isUserLogged = false;
  userName: string;
  subOnlineStatus: Subscription;
  subIsUserLoggedIn: Subscription;

  ngOnInit(): void {
    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);

    this.subOnlineStatus = this.authService.getOnlineStatusAction$.subscribe(isUserLogged => {
      this.isUserLogged = isUserLogged;
    });

    this.subIsUserLoggedIn = this.authService.isUserLoggedInAction$.subscribe(user => {
      this.userName = user !== undefined ? user.userName : null;
    });
  }



  toggleMenu() {
    this.eventoNavbar.emit();
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  ngOnDestroy(): void {
    this.subOnlineStatus.unsubscribe();
    this.subIsUserLoggedIn.unsubscribe();
  }
}
