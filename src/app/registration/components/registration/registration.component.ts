import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public hasPasswordShown = false;

  constructor(private _fb: FormBuilder, private _apiService: ApiService, private _translateService:TranslationService) {
    this.registrationForm = this._createRegistrationForm();
  }

  ngOnInit() {
    this._init();
  }

  private _init() {
    this._initLanguage();
  }

  private _initLanguage() {
    this._translateService.setApplicationLanguage();
  }

  private _createRegistrationForm(): FormGroup {
    return this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public submitRegistrationForm(form: FormGroup): void {
    if (!form.valid) {
      return;
    }
    console.log(form);
    this._apiService
      .post('/play', { email: form.value.email, password: form.value.password })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  public getPasswordType(): string {
    return this.hasPasswordShown ? 'text' : 'password';
  }

  public showPassword(): void {
    this.hasPasswordShown = true;
  }

  public hidePassword(): void {
    this.hasPasswordShown = false;
  }
}
