import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css',
})
export class VerifyOTPComponent {
  phoneNumber: string = '';
  otpValue: string = '';
  constructor(
    private service: AuthService,
    public dialogref: MatDialogRef<VerifyOTPComponent>,
    private router: Router,
    public toastr: ToastrService
  ) {}

  verifyOtp() {
    debugger;
    const VOTPpayload = {
      phoneNumber: this.phoneNumber,
      otp: this.otpValue,
    };
    if (VOTPpayload.otp === '') {
      this.toastr.error('enter otp first and then verify it');
      return;
    }
    this.service.verifyotp(VOTPpayload).subscribe({
      next: () => {
        const role = this.service.getRole();
        if (role === 'Admin') {
          this.router.navigate(['/admin-dashboard/admin']);
        } else if (role === 'User') {
          this.router.navigate(['/user-dashboard/user']);
        } else {
          this.toastr.error('something went wrong');
        }
        this.dialogref.close('verified');
        this.toastr.success('verified successfully');
      },
      error: (err) => {
        this.toastr.error('otp or something went wrong plaese try again');
      },
    });
  }

  onCancel() {
    this.dialogref.close(); // Closes the dialog without returning data
  }
}
