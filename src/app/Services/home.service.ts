import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private Jurl= environment.apiUrlJava;
private Durl=environment.apiUrlDotNet;
private Nurl=environment.apiUrlNodeJS;

  constructor(private http: HttpClient) { }



  getMethod(endpoint: string): Observable<any> {
  return this.http.get<any>(`${this.Nurl}/${endpoint}`).pipe(
    catchError(this.handleError)
  );
}

  deleteMethod(endpoint: string): Observable<any> {
  return this.http.delete<any>(`${this.Nurl}/${endpoint}`).pipe(
    catchError(this.handleError)
  );
}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    switch (error.status) {
      case 200:
        errorMessage = 'Success:  successfully Done!';
        break;
      case 400:
        errorMessage = 'Bad Request: Invalid request!';
        break;
      case 500:
        errorMessage = 'Server Error: Please try again later.';
        break;
      default:
        errorMessage = 'Something went wrong. Please try again!';
    }
     alert(errorMessage); // Display error message in a popup
    return throwError(() => new Error(errorMessage));
  }
}
