import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin = new Admin();

  constructor(private service:LoginService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  submitData(){
    this.service.checkAdmin(this.admin).subscribe(
      (response: any)=>{
        if(response){
          localStorage.setItem('loggedIn', "admin");
          localStorage.setItem('name',this.admin.username);
          
          this.router.navigate(["user/admin"]);
          this.admin = new Admin();
          this.snack.open("Login Successful","Dismiss",{duration:2000});
        }
        else{
          this.snack.open("Login Unsuccessful","Dismiss",{duration:2000});
        }
      }
    ) ;
  }

}
