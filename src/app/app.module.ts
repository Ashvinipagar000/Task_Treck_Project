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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './Components/Common/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TaskPopupComponent } from './Components/dashBoard/userdashboard/task-popup/task-popup.component';
import { StudentsComponent } from './Components/students/students.component';
import { UpdatePopupComponent } from './Components/students/update-popup/update-popup.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPopoupComponent,
    AdmindashboardpopupComponent,
    SampleComponent,
    SidenavComponent,
    TaskPopupComponent,
    StudentsComponent,
    UpdatePopupComponent,
CodeComponent

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
    FormsModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
