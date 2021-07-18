import { Component, OnInit } from '@angular/core';
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

  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  submitData(){
    this.service.checkAdmin(this.admin).subscribe(
      (response: any)=>{
        if(typeof(response) === 'number'){
          localStorage.setItem('loggedIn', "admin");
          localStorage.setItem('id',response.toString());
          this.router.navigate(["user/admin"]);
          this.admin = new Admin();
        }
        else{
          console.log("not succeed");
        }
      }
    ) ;
  }

}
