import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserdashboardComponent, AdmindashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    FormsModule
  ]
})
export class DashboardModule { }
