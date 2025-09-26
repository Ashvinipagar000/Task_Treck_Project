import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { users } from '../Components/dashBoard/admindashboard/admindashboard.component';
import { Student } from '../Components/students/students.component';

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

  updateUser(users:any){
    const url= `${this.DNUrlD}/user/UpdateTaskStatus`
    return this.http.put(url,users)
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.DNUrlD}/Student/GetStudent`);
  }

  updateStudent(id: number, student: Student) {
  return this.http.put(`${this.DNUrlD}/Student/updatestudent`, student);
}


}
