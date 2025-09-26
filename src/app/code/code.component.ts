import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  // templateUrl: './code.component.html',
  template: `<h4>hello</h4>
  <h4>{{user}}</h4>
  <input type="text" placeholder="search"[(ngModel)]="searchtext" (input)="searchstudent()">
  <!-- <button (click)="searchstudent()">search</button> -->
  <button (click)="reset()">reset</button>
  <ul>
    <li *ngFor="let s of filterdarray">
  {{s}}
    </li>
  </ul>
  `,

  styleUrl: './code.component.css'
})
export class CodeComponent {

//   create student array
// search
// get list
ngOnInit(){
  this.getallstudent();
}

   students :any[]=["a","b","c","d","e","f","ff","fff","h","hhj"];
   user:any;
searchtext:any;
filterdarray:any[]=[];
   searchstudent(){
// this.searchtext=HTMLInputElement.value;
    this.filterdarray=this.students.filter(s=>
      s.includes(this.searchtext.toLowerCase())
    );
   }

   getallstudent(){
this.filterdarray = this.students;
   }

   reset(){
    this.searchtext="";
    this.filterdarray = this.students;
   }

}
