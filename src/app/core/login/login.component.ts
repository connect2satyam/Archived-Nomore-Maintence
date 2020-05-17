import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService as LocalAuthService } from 'src/app/shared/auth.service';

import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { ValidationService } from 'src/app/shared/validation.service';
import { User } from 'src/app/shared/user.model';


@Component({
  selector: 'satyas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  pageTitle = 'Log In';
  errorMessage: string;
  componentActive = true;
  loginForm: FormGroup;

  constructor(
    private localAuthService: LocalAuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', ValidationService.nameValidation],
      userPwd: ['', ValidationService.passwordValidation]
    });
  }

  signInWithGoogle(): void {
    this.localAuthService.socialLogin();

    this.localAuthService.currentUserAction$.subscribe((currentUser: User) => {
      if (currentUser?.isUserLoggedIn) {
        this.router.navigate(['/event-listing']);
      }
    });
  }



  signInWithFB(): void {
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.localAuthService.logout();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  login(): void {
    this.localAuthService.localLogin(this.loginForm.value);
    this.localAuthService.currentUserAction$.subscribe((currentUser: User) => {
      if (currentUser?.isUserLoggedIn) {
        this.router.navigate(['/event-listing']);
      }
    });
  }

}
