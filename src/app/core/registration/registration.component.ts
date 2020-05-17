import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidationService } from 'src/app/shared/validation.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService as LocalAuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'satyas-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  pageTitle = 'Registration (TODO)';
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private localAuthService: LocalAuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', ValidationService.nameValidation],
      userEmail: ['', ValidationService.emailValidation],
      userPwd: ['', ValidationService.passwordValidation]
    });
  }
  registration() {
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }
  ngOnDestroy(): void {
  }

}
