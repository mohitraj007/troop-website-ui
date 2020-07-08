import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

import { ComponentsComponent } from '../../components/components.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from '../../pages/signup/signup.component';
import { LandingComponent } from '../../pages/landing/landing.component';
import { NucleoiconsComponent } from '../../components/nucleoicons/nucleoicons.component';
import { AuthGuard } from "../../shared/guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
