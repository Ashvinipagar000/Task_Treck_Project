import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
// import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { VerifyOTPComponent } from '../verify-otp/verify-otp.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  // email: string = 'Ashvini@123gmail.com'
  password: string = '';
  // password: string = 'Ashvini@123';
  registerForm: FormGroup;
  errorMessage: any;
  isloader: boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  hidePassword: boolean = true;

  checkpassmatch() {
    const errors = [];

    // if (!this.password.match(/(?=.*[a-z])/)) errors.push("❌ At least one lowercase letter");  //else errors.push("✅ At least one lowercase letter")
    // if (!this.password.match(/(?=.*[A-Z])/)) errors.push("❌ At least one uppercase letter");
    // if (!this.password.match(/(?=.*\d)/)) errors.push("❌ At least one number");
    // if (!this.password.match(/(?=.*[@$!%*?&])/)) errors.push("❌ At least one special character");
    if (this.password.length < 8)
      errors.push('❌ Must be at least 8 characters long');

    return errors.length ? errors : ['✅ Password is strong!'];
  }
  greet: string = '';

ngOnInit(): void {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    this.greet = 'Morning';
  } else if (hour >= 12 && hour < 17) {
    this.greet = 'Afternoon';
  } else if (hour >= 17 && hour < 21) {
    this.greet = 'Evening';
  } else {
    this.greet = 'Night';
  }
}
  // registerForm = new FormGroup({
  //   password: new FormControl<string>('', {
  //     validators: [Validators.required],
  //     // Validators.pattern(StrongPasswordRegx)
  //   }),
  //   email: Validators.required
  // });

  // passmatch(password: string): string {
  //   if (!password?.match(/(?=.*[A-Z])/)) {
  //     return "At least one uppercase letter.";
  //   }
  //   if (!password?.match(/(?=.*[a-z])/)) {
  //     return "At least one lowercase letter.";
  //   }
  //   return "Password is valid.";
  // }

  get passwordFormField() {
    return this.registerForm.get('password');
  }

  login() {
    this.isloader = true;
    const payload = {
      Email: this.email,
      PasswordHash: this.password,
    };

    if (payload.Email === '' || payload.PasswordHash === '') {
      this.toastr.warning('Email And password are required to login');
      return;
    }

    // const VOTPpayload={

    //     phoneNumber: "",
    //     otp: "432536"

    // }
    this.authService.userlogin(payload).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.authService.saveToken(response.token);
        // const decodedToken: any = jwtDecode(response.token);
        // const role = this.authService.getRole();
        // const SOTPpayload={
        //   "phoneNumber": ""
        // }
        const dialogref = this.dialog.open(VerifyOTPComponent, {
          // width:'400px',
          // height:'300px',
        });
        dialogref.afterClosed().subscribe((result) => {
          if (result === 'verified') {
            // Optional: Do something after dialog closes
            console.log('OTP was successfully verified!');
            // You can navigate or update UI here
          }
        });
        const SOTPpayload = { phoneNumber: '+919503076225' };
        this.authService.sendotp(SOTPpayload).subscribe({
          next: (response) => {
            console.log('OTP sent successfully', response);
            this.toastr.success('OTP sent successfully');
          },
          error: (error) => {
            console.error('Error sending OTP', error);
            this.toastr.error('Failed to send OTP. Please try again.');
          },
        });

        // if (role === 'Admin') {
        //   this.router.navigate(['/admin-dashboard/admin']);
        // } else if (role === 'User') {
        //   this.router.navigate(['/user-dashboard/user']);
        // }

        this.isloader = false;
      },

      (error) => {
        this.isloader = false;
        if (error.status === 400 || error.status === 401) {
          this.toastr.error('Invalid email or password.');
          this.errorMessage = 'Invalid email or password.';
        } else {
          this.toastr.error('An error occurred. Please try again later.');
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    );
  }
}
