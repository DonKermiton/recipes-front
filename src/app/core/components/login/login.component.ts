import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginEnum} from './login.enum';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginEnum: typeof LoginEnum;
  public loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly loginService: LoginService) {
    this.loginEnum = LoginEnum;
    this.loginForm = formBuilder.group({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  public onFormSubmit(): void {
    this.loginService.login(this.loginForm.getRawValue()).subscribe();
  }

  public controlHaveErrors(type: LoginEnum): boolean | undefined {
    return this.loginForm.get(type)?.invalid;
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      [this.loginEnum.EMAIL]: [null, [Validators.email, Validators.required]],
      [this.loginEnum.PASSWORD]: [null, [Validators.required, Validators.minLength(3)]]
    });
  }
}
