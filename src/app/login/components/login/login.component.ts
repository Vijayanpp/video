import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hasPasswordShown = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _translateService: TranslationService
  ) {
    this.loginForm = this._createLoginForm();
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

  private _createLoginForm(): FormGroup {
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public submitLoginForm(form: FormGroup): void {
    if (!form.valid) {
      return;
    }
    const token = { access_token: 'sample_token' };
    localStorage.setItem('USER_ACCESS_DATA', JSON.stringify(token)); // temporary fix for demo
    this._router.navigate(['/maojam/play']);
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
