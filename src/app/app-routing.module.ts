import { LoginModule } from './Components/Auth/login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SampleComponent } from './Components/sample/sample.component';
import { SidenavComponent } from './Components/Common/sidenav/sidenav.component';
import { StudentsComponent } from './Components/students/students.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login',
    loadChildren: ()=> import ('./Components/Auth/login/login.module').then(m=> m.LoginModule)
  },
  {
    path:'user-dashboard',
    loadChildren:()=> import('./Components/dashBoard/dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  {
    path:'admin-dashboard',
    loadChildren:()=> import('./Components/dashBoard/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'sample',
    component:SampleComponent
  },
  {
    path:'sidenav',
    component:SidenavComponent
  },
  {
    path:'student',
    component: StudentsComponent
  },
  {
    path:'code',
    component:CodeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
