import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService as LocalAuthService } from 'src/app/shared/auth.service';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { ValidationService } from 'src/app/shared/validation.service';


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
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', ValidationService.nameValidation],
      userPwd: ['', ValidationService.passwordValidation]
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
      const res = x;
      this.router.navigate(['/event-listing']);
    });

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  login(): void {
    this.localAuthService.login(this.loginForm.value);
    this.localAuthService.isUserLoggedInAction$.subscribe(x => {
      this.router.navigate(['/event-listing']);
    });
    // if (loginForm && loginForm.valid) {
    //   const userName = loginForm.form.value.userName;
    //   const password = loginForm.form.value.password;
    //   this.localAuthService.login(userName, password);

    //   if (this.localAuthService.redirectUrl) {
    //     this.router.navigateByUrl(this.localAuthService.redirectUrl);
    //   } else {
    //     this.router.navigate(['/event-listing']);
    //   }
    // } else {
    //   this.errorMessage = 'Please enter a user name and password.';
    // }
  }

}
