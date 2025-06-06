import { MatIconModule } from '@angular/material/icon';
import {  MatDialogModule } from '@angular/material/dialog';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/Common/header/header.component';
import { HeaderPopoupComponent } from './Components/Common/header/header-popoup/header-popoup.component';
import { AdmindashboardpopupComponent } from './Components/dashBoard/admindashboard/admindashboardpopup/admindashboardpopup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Required
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SampleComponent } from './Components/sample/sample.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPopoupComponent,
    AdmindashboardpopupComponent,
    SampleComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    MatSelectModule,
    MatOptionModule,
    BrowserAnimationsModule,
    FormsModule


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
