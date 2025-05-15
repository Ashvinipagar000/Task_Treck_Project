import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private DNUrlD = environment.apiUrlDotNet;
  private NJSUrlD = environment.apiUrlNodeJS;

  constructor(private http: HttpClient, private router: Router) {}

  //send otp
  sendotp(payload: { phoneNumber: string }) {
    const url = `${this.NJSUrlD}/send-otp`;
    return this.http.post(url, payload);
  }

  //verify otp
  verifyotp(payload: { phoneNumber: string; otp: string }) {
    const url = `${this.NJSUrlD}/verify-otp`;
    return this.http.post(url, payload);
  }

  userlogin(payload: any): Observable<any> {
    const url = `${this.DNUrlD}/Auth/Authlogin`;
    return this.http.post(url, payload);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    // Decode token to extract role
    const decodedToken: any = jwtDecode(token);
    if (decodedToken) {
      const role =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];
      const Name =
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ];
      const Email =
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ];
      localStorage.setItem('role', role); // Save role
      localStorage.setItem('Name', Name); // Save name
      localStorage.setItem('Email', Email); // Save email
      console.log('role', role);
      console.log('Name', Name);
      console.log('Email', Email);
    }
  }

  // Get stored role
 getRole(): string | null {
  return localStorage.getItem('role');
}
  // Get stored Name
 getUserName(): string | null {
  return localStorage.getItem('Name');
}
  // Get stored Email
 getEmail(): string | null {
  return localStorage.getItem('Email');
}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }









  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('token');
  // }
//  getRole(): string | null {
//     const token = localStorage.getItem('token');
//     if (!token) return null;

//     try {
//       const decodedToken: any = jwtDecode(token);
//       return (
//         decodedToken[
//           'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
//         ] || null
//       );
//     } catch (error) {
//       console.error('Invalid token', error);
//       return null;
//     }
//   }



  // getName(): string | null {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     const decodedToken: any = jwtDecode(token);
  //     return decodedToken.Name; // Assuming your token contains a 'role' field
  //   }
  //   return null;
  // }

  // getUserRole(): string | null {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     const decodedToken: any = jwtDecode(token);
  //     return decodedToken.role; // Assuming your token contains a 'role' field
  //     return decodedToken.Name; // Assuming your token contains a 'role' field
  //   }
  //   return null;
  // }
  // isAuthenticated(): boolean {
  //   return !!localStorage.getItem('token');
  // }

}
