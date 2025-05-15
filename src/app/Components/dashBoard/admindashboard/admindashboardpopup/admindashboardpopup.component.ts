import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admindashboardpopup',
  templateUrl: './admindashboardpopup.component.html',
  styleUrl: './admindashboardpopup.component.css'
})
export class AdmindashboardpopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
