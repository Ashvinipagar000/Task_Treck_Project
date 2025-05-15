import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { users } from '../Components/dashBoard/admindashboard/admindashboard.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private DNUrlD = environment.apiUrlDotNet;
    private NJSUrlD = environment.apiUrlNodeJS;

  getAllUser(): Observable<users[]>{
    const url= `${this.DNUrlD}/user/getAllUser`;
    return this.http.get<users[]>(url);
  }

}
