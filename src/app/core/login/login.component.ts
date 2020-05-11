import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'satyas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  pageTitle = 'Log In';
  errorMessage: string;
  componentActive = true;

  constructor( private authService: AuthService,
               private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/event-listing']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

}
