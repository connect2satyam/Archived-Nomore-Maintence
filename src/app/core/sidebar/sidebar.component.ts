import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'satyas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isUserLogged = false;
  userName: string;
  subIsUserLoggedIn: Subscription;

  socialUser: SocialUser;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.subIsUserLoggedIn = this.authService.socialUser$.subscribe((user: SocialUser) => {
      this.socialUser = user;
      this.userName = this.socialUser?.firstName;
      this.isUserLogged = (user != null);
    });
  }

  ngOnDestroy(): void {
    this.subIsUserLoggedIn.unsubscribe();
  }
}
