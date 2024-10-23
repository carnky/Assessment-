import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<div class="container-fluid p-0">
  <div class="row">
    <div class="col-md-6 d-none d-md-block p-0">
      <img class="img-fluid full-height" src="assets/img/" alt="صورة م" />
    </div>

    <div class="col-md-6 d-flex align-items-center justify-content-center background">
      <div class="login-form">
        <div class="hedar-login d-flex">
          <button (click)="navigateTolanding()" type="button" class="btn-outline-success mt-2">
            <span class="">←</span>
          </button>
          <h1 class="mb-4 me-3">تسجيل الدخول</h1>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label for="email" class="form-label">رقم الهوية</label>
            <input type="text" class="form-control" id="email" formControlName="email" placeholder="ادخل رقم الهوية الخاصة بك" />
            <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" class="text-danger">
              <small *ngIf="loginForm.get('email')?.errors?.['required']">البريد الإلكتروني مطلوب</small>
              <small *ngIf="loginForm.get('email')?.errors?.['email']">البريد الإلكتروني غير صالح</small>
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">كلمة المرور</label>
            <input type="password" class="form-control" id="password" formControlName="password" placeholder="أدخل كلمة المرور" />
            <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" class="text-danger">
              <small *ngIf="loginForm.get('password')?.errors?.['required']">كلمة المرور مطلوبة</small>
              <small *ngIf="loginForm.get('password')?.errors?.['minlength']">يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل</small>
              <small *ngIf="loginForm.get('password')?.errors?.['pattern']">كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص</small>
            </div>
          </div>
        </form>
        <a> نسيت كلمة المرور؟</a>
        <button (click)="onSubmit()" type="button" class="btn-outline-success w-100 d-flex align-items-center justify-content-center mt-3">
          تسجيل دخول
          <span class="me-2">←</span>
        </button>
        <div id="error-message" style="display: none; color: red;"></div>
      </div>
    </div>
  </div>
</div>`,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ]]
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.invalid) {
        // Display an error message in the HTML
        const errorMessageElement = document.getElementById('error-message');
        if (errorMessageElement) {
          errorMessageElement.innerText = 'الرجاء التحقق من إدخال البريد الإلكتروني وكلمة المرور بشكل صحيح';
          errorMessageElement.style.display = 'block';
        }
      } else {
        const errorMessageElement = document.getElementById('error-message');
        if (errorMessageElement) {
          errorMessageElement.style.display = 'none';
        }
      }
    });
  }

  navigateToDashboard() {
    this.router.navigate(['/home']);
  }

  navigateTolanding() {
    this.router.navigate(['/landing']);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      console.log('Form is not valid');
      const errorMessageElement = document.getElementById('error-message');
      if (errorMessageElement) {
        errorMessageElement.innerText = 'الرجاء التحقق من إدخال البريد الإلكتروني وكلمة المرور بشكل صحيح';
        errorMessageElement.style.display = 'block';
      }
    }
    this.router.navigate(['/home']);
  }
}
