import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  allRecord: any;
  userListFalg: boolean =false;

  constructor( private router:Router) { }
  user: User = {
    firstname:"",
    lastname:"",
    email:""
   
  };
  submit(value:any){
    this.allRecord=value;
    console.log(  this.allRecord);
    
  }
  ngOnInit(): void {
  }

  // showrecord(){
  //   this.userListFalg=true
  //   this.router.navigate(['user-list'])
  // }
}
export interface User {
  firstname:string,
  lastname:string,
  email:string;
  
}
