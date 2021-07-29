import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Election } from 'src/app/models/Election';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-election-management',
  templateUrl: './election-management.component.html',
  styleUrls: ['./election-management.component.css']
})
export class ElectionManagementComponent implements OnInit {

  constructor(private electionService:ElectionService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllElection();
  }

  election: Election = new Election();
  AddElection(){
    this.electionService.AddElection(this.election).subscribe(
      response =>{
        if(response){
          this.snack.open("Election is Added","Dismiss",{duration:2000});
          this.election = new Election();
        }
        else
        this.snack.open("Error while adding","Dismiss",{duration:2000});
        this.ChangeAddInfoShowUp()
        this.getAllElection();
      }
    );
  }

  AddInfoShowUp = false;
  ChangeAddInfoShowUp(){
    this.AddInfoShowUp = !this.AddInfoShowUp;
  }

  elections : Election[] = [];
  getAllElection(){
    this.electionService.GetAllElection().subscribe(
      (response)=>{
        this.elections = response;
      }
    );
  }

}
