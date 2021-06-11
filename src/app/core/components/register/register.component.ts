import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterEnum} from './register.enum';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public registerEnum: typeof RegisterEnum;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly registerService: RegisterService
  ) {
    this.registerEnum = RegisterEnum;
    this.registerForm = formBuilder.group({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  public onFormSubmit(): void {
    this.registerService.registerUser(this.registerForm.getRawValue()).subscribe(console.log);
  }

  public controlHaveErrors(type: RegisterEnum): boolean | undefined {
    return this.registerForm.get(type)?.invalid;
  }

  private initForm(): void {
    this.registerForm = this.formBuilder.group({
      [this.registerEnum.FIRSTNAME]: [null, Validators.required],
      [this.registerEnum.LASTNAME]: [null, Validators.required],
      [this.registerEnum.EMAIL]: [null, [Validators.required, Validators.email]],
      [this.registerEnum.PASSWORD]: [null, [Validators.required, Validators.minLength(3)]]
    });
  }
}
