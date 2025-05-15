import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HeaderPopoupComponent } from '../../Common/header/header-popoup/header-popoup.component';
import { AdmindashboardpopupComponent } from './admindashboardpopup/admindashboardpopup.component';
import { UserService } from '../../../Services/user.service';

export interface users {
  id: any;
  name: any;
  email: any;
  createdAt: any;
  updatedAt: any;
  status: any;
  action: any;
}
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  constructor(private dialog:MatDialog, private userservice:UserService){}
  ngOnInit(){
    this.getAlluser();
  }
  // displayedColumns: string[] = ['select', 'Id', 'name', 'email', 'createdAt', 'updatedAt', 'status', 'action'];
  users = new MatTableDataSource<any>();
  displayedColumns = [
    // { id: 'select', label: 'Select', order: 1 },
    { id: 'id', label: 'ID', order: 1 },
    { id: 'name', label: 'Name', order: 2 },
    { id: 'email', label: 'Email', order: 4 },
    { id: 'createdAt', label: 'Created At', order: 5 },
    { id: 'action', label: 'Action', order: 12},
    { id: 'updatedAt', label: 'Updated At', order: 6 },
    { id: 'status', label: 'Status', order: 7 },
  ];
  displayColumns = this.displayedColumns.map(col => col.id);
  dataSource = new MatTableDataSource<users>(
    // [
    // {id: 1, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53', action: 'Unassigned', updatedAt: '9/20/23', status: '' },
    // { id: 2, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53' , action: 'Unassigned', updatedAt: '', status: '' },
    // {id: 1, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53', action: 'Unassigned', updatedAt: '9/20/23', status: '' },
    // { id: 2, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53' , action: 'Unassigned', updatedAt: '', status: '' },
    // {id: 1, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53', action: 'Unassigned', updatedAt: '9/20/23', status: '' },
    // { id: 2, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53' , action: 'Unassigned', updatedAt: '', status: '' },
    // {id: 1, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53', action: 'Unassigned', updatedAt: '9/20/23', status: '' },
    // { id: 2, name: 2, email: 'Test Property 2024', createdAt: 'Gilgman 53' , action: 'Unassigned', updatedAt: '', status: '' },
  // ]
);


  getAlluser(){
    this.userservice.getAllUser().subscribe({
      next:(res)=>{
        this.dataSource.data=res;
      }
    })
  }
  openComments(){
   let dialogref=this.dialog.open(AdmindashboardpopupComponent, {
  data: { message: 'Hello from parent!', name:'Ashvini', sirname:'bhavar' },
  width:'500px',
  height:'300px'

   })
  }



}
