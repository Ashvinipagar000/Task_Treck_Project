import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VerifyOTPComponent } from '../verify-otp/verify-otp.component';
import { InputOtpModule } from 'primeng/inputotp';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LoginComponent, VerifyOTPComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    InputOtpModule,

  ]
})
export class LoginModule { }
