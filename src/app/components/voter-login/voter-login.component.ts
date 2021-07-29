import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Voter } from 'src/app/models/Voter';
import { LoginService } from 'src/app/services/login.service';
import { VoterService } from 'src/app/services/voter.service';

@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.css']
})
export class VoterLoginComponent implements OnInit {


  voter:Voter = new Voter();

  constructor(private service:LoginService,private router:Router,private voterservice:VoterService
    ,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  submitData(){
    this.service.CheckVoter(this.voter).subscribe(
      (response: any)=>{
        if(response!=null){
          localStorage.setItem('loggedIn', "voter");
          localStorage.setItem('name',response.name);
          localStorage.setItem('vid',response.id);
          
          this.router.navigate(["user/voter"]);
          this.voter = new Voter();
          this.snack.open("Login Successful","Dismiss",{duration:2000});
        }
        else{
          this.snack.open("Login Unsuccessful","Dismiss",{duration:2000});
        }
      }
    ) ;
  }

}

