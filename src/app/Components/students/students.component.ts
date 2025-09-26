import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopupComponent } from './update-popup/update-popup.component';
export interface Student {
  s_id: number;
  s_name: string;
  s_rollno: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [];
  constructor(private userservice: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    debugger
    this.userservice.getAllStudents().subscribe({
      next: (data) => (this.students = data),
      error: (err) => console.error('Error fetching students:', err)
    });
  }


  openPopup(details: Student) {
    const dialogRef = this.dialog.open(UpdatePopupComponent, {
      width: '400px',
      data: {
        id: details.s_id,
        name: details.s_name,
        rollno: details.s_rollno
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadStudents(); // reload list after update
      }
    });
  }

}
