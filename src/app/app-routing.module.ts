import { LoginModule } from './Components/Auth/login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
