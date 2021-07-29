import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Voter } from 'src/app/models/Voter';
import { VoterService } from 'src/app/services/voter.service';

@Component({
  selector: 'app-voter-management',
  templateUrl: './voter-management.component.html',
  styleUrls: ['./voter-management.component.css']
})
export class VoterManagementComponent implements OnInit {

  constructor(private voterService:VoterService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllVoter();
  }

  hide = true;

  voter : Voter = new Voter();
  AddVoter(){
    this.voterService.AddVoter(this.voter).subscribe(
      response =>{
        if(response){
          this.snack.open("Voter is Added","Dismiss",{duration:2000});
          this.voter = new Voter();
        }
        else
        this.snack.open("Error while Adding","Dismiss",{duration:2000});
        this.ChangeAddInfoShowUp()
        this.getAllVoter();
      }
    );
  }

  AddInfoShowUp = false;
  ChangeAddInfoShowUp(){
    this.AddInfoShowUp = !this.AddInfoShowUp;
  }

  voters : Voter[] = [];
  getAllVoter(){
    this.voterService.getAllVoter().subscribe(
      (response)=>{
        this.voters = response;
      }
    );
  }

}
