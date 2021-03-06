import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmedPasswordValidator} from './validators/confirmed-password-validator.directive';
import {AuthService} from '../../service/auth.service';
import {uniqueEmailValidator} from './validators/unique-email-validator.directive';
import {RegistrationFormModel} from '../../model/RegistrationFormModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registrationModel: RegistrationFormModel;
  loading = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      restaurantName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email], uniqueEmailValidator(this.authService)),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required)
    }, {
      validators: confirmedPasswordValidator
    });
  }

  onSubmit() {
    const form = this.registerForm.value;
    this.registrationModel = new RegistrationFormModel(
      form.restaurantName,
      form.email,
      form.password);
    console.log(this.registrationModel);
    this.authService.registerRestaurant(this.registrationModel);
    this.onClear();
  }

  onClear() {
    this.ngOnInit();
  }

}
