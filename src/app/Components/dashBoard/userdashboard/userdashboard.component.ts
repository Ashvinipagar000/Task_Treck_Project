import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UserService } from '../../../Services/user.service';
import { users } from '../admindashboard/admindashboard.component';
import { AdmindashboardpopupComponent } from '../admindashboard/admindashboardpopup/admindashboardpopup.component';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent implements OnInit{

    constructor(private dialog:MatDialog, private userservice:UserService){}
    ngOnInit(){
      this.getAlluser();
    }
    // displayedColumns: string[] = ['select', 'Id', 'name', 'email', 'createdAt', 'updatedAt', 'status', 'action'];
    users = new MatTableDataSource<any>();
    allColumns = [
      // { id: 'select', label: 'Select', order: 1 },
      { id: 'id', label: 'ID', order: 1, visible:true },
      { id: 'name', label: 'Name', order: 2, visible:true },
      { id: 'email', label: 'Email', order: 4, visible:true },
      { id: 'createdAt', label: 'Created At', order: 5, visible:true },
      { id: 'action', label: 'Action', order: 12, visible:true},
      { id: 'updatedAt', label: 'Updated At', order: 6, visible:true },
      { id: 'status', label: 'Status', order: 7 , visible:true},
    ];
    get displayColumns(): string[] {
    return this.allColumns.filter(col => col.visible).map(col => col.id);
  }
    // displayColumns = this.displayedColumns.map(col => col.id);
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





//   ngOnInit() {
//   // Promise :
//   const promise = new Promise((resolve) => {
//     console.log('Promise Call....');
//     setTimeout(() => {
//       resolve('Promise Working!');
//     }, 1000);
//   });

//   // promise.then((result) => console.log(result));

//   //Observable :
//   const observable = new Observable((subscriber) => {
//     console.log('Observable Call....');
//     setTimeout(() => {
//       subscriber.next('Observable Working!');
//     }, 1000);
//   });

//   // observable.subscribe((result) => console.log(result));
// }


}
