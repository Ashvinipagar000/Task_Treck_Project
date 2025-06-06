import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UserService } from '../../../Services/user.service';
import { users } from '../admindashboard/admindashboard.component';
import { AdmindashboardpopupComponent } from '../admindashboard/admindashboardpopup/admindashboardpopup.component';
import { MatPaginator } from '@angular/material/paginator';
import { CreateTaskComponent } from './create-task/create-task.component';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent implements OnInit{
    searchstr='';
    task_id='';
    startDate!: Date;
endDate!: Date;
selectedstatus=[];

    constructor(private dialog:MatDialog, private userservice:UserService){}

    ngOnInit(){
      this.getAlluser();
    }
    // displayedColumns: string[] = ['select', 'Id', 'name', 'email', 'createdAt', 'updatedAt', 'status', 'action'];
    users = new MatTableDataSource<any>();
    allColumns = [
      // { id: 'select', label: 'Select', order: 1 },
      { id: 'task_id', label: 'Task ID', order: 1, visible:true },
      { id: 'name', label: 'Name', order: 2, visible:true },
      { id: 'email', label: 'Email', order: 4, visible:true },
      { id: 'createdAt', label: 'Created At', order: 5, visible:true },
      { id: 'action', label: 'Action', order: 12, visible:true},
      { id: 'updatedAt', label: 'Updated At', order: 6, visible:true },
      { id: 'status', label: 'Status', order: 7 , visible:true},
      // { id: 'task_id', label: 'task_id', order: 7 , visible:true},
    ];
    get displayColumns(): string[] {
    return this.allColumns.filter(col => col.visible).map(col => col.id);
  }
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  statusList = ['completed', 'incomplete', 'in-progress'];

onStatusChange(row: any) {
  const payload = {
    task_id: row.task_id,            // Or whatever field holds the task ID
    task_status: row.status          // New status selected from the dropdown
  };
  console.log('Status changed for row:', row);
  // Optionally: send an update to the backend
  this.userservice.updateUser(payload).subscribe({
    next:(res)=>{

    }
  }

  )
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
          //FORECH
          this.dataSource.data = res;
          this.dataSource.data.forEach((user, index)=>{
            // console.log(`user ${index+1} ${user.name}, ${user.email}`)
          })
          //FILTER===>
          // this.dataSource.data= res.filter(user=>user.name='SWAMI'
          // )
          //MAP===>
          // this.dataSource.data=res.map(user=>{
          //   return{
          //     ...user,
          //     name:user.name.toUpperCase()
          //   }
          // })
        }

      }
      )

    }



createTask(){
  let DialogRef= this.dialog.open(CreateTaskComponent ,{
// width: '560px',
//     height: '417px'
width: '800px', // Make sure it's large enough
    height: '400px', // Let height adjust to content
    maxWidth: '90vw', // Optional: override Material default max width
    panelClass: 'custom-dialog-container' // Optional: custom styles
  })
}
    openComments(){
     let dialogref=this.dialog.open(AdmindashboardpopupComponent, {
    data: { message: 'Hello from parent!', name:'Ashvini', sirname:'bhavar' },
    width:'500px',
    height:'300px'

     })
    }
   applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
refresh(){
  this.searchstr='';
  this.dataSource.filter = '';
  // this.getAlluser();
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
