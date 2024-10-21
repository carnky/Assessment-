import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ViolationDashboardComponent } from './violation-dashboard/violation-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    children: [
      // Usually the purpose of having a child route is to
      // render it in the parent route. Your 'violation' route
      // will only be rendered in 'dashboard' if
      // the <router-outlet> is used inside the HomeComponent
      { path: 'violation', component: ViolationDashboardComponent }
    ]
  }
];
