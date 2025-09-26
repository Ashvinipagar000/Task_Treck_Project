import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../students.component';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrl: './update-popup.component.css'
})
export class UpdatePopupComponent {

  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: UserService,
    private dialogRef: MatDialogRef<UpdatePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string; rollno: number }
  ) {
    // Pre-fill form with student data
    this.updateForm = this.fb.group({
      s_name: [data.name, Validators.required],
      s_rollno: [data.rollno, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {debugger
    if (this.updateForm.valid) {
      const updatedStudent: Student = {
        s_id: this.data.id,
        s_name: this.updateForm.value.s_name,
        s_rollno: this.updateForm.value.s_rollno
      };

      this.studentService.updateStudent(updatedStudent.s_id, updatedStudent).subscribe({
        next: () => {
          alert('Student updated successfully!');
          this.dialogRef.close(true); // return success flag
        },
        error: (err) => {
          console.error('Error updating student:', err);
          alert('Update failed');
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false); // close without saving
  }



}
