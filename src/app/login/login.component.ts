import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="your prefect banking partner"
accnum="account no please"
acno=""
pwd=""




 


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
 


  login(){
    var acno=this.acno
    console.log(this.acno);
    var pwd=this.pwd
    console.log(this.pwd);
    const result=this.ds.login(acno,pwd)
    if(result){
      alert("login successful")
      this.router.navigateByUrl("dashboard")
    }
    
  }


 
}




