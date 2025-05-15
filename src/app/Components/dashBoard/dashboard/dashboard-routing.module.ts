import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { HomeComponent } from '../../Common/home/home.component';
import { authGuard } from '../../Auth/auth.guard';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
    // canActivate: [authGuard]
  },
  {
    path:'user', component:UserdashboardComponent,
    // canActivate: [authGuard]
  },
  {
    path:'admin', component:AdmindashboardComponent,
    // canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
