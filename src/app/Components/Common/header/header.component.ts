import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderPopoupComponent } from './header-popoup/header-popoup.component';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username = '';
  // getUsername(){
  //   sessionStorage.getItem('Name')
  // }
  // username= sessionStorage.getItem('Name')

  // name=this.username.slice(0,1)

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

  openPopup(){
    let dialogrea=this.dialog.open(HeaderPopoupComponent, {
      height: '337px',
    width: '559px'
    })
  }
}
