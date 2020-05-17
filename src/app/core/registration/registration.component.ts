import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidationService } from 'src/app/shared/validation.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService as LocalAuthService } from 'src/app/shared/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'satyas-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  pageTitle = 'Registration';
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private localAuthService: LocalAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', ValidationService.nameValidation],
      userEmail: ['', ValidationService.emailValidation],
      userPwd: ['', ValidationService.passwordValidation],
      userConfirmPwd: ['', ValidationService.passwordValidation]
    });
  }
  registration() {
    this.localAuthService.registration(this.loginForm.value).subscribe(() => {
      this.router.navigate(['/login']);
      this.toastr.success('User has been registered successfully.', 'Success');
    });
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }
  ngOnDestroy(): void {
  }

}
