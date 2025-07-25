import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../../Services/auth.service';

@Component({
  selector: 'app-header-popoup',
  templateUrl: './header-popoup.component.html',
  styleUrl: './header-popoup.component.css'
})
export class HeaderPopoupComponent {
  username='';
constructor(private dialog: MatDialog,
    private authservice: AuthService
  ){}
    ngOnInit(): void {
    const name = this.authservice.getUserName();
    if(name===null){
      this.username="Guest"
    }else{
      this.username=name;
    }
  }
}
