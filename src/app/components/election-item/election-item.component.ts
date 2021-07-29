import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Election } from 'src/app/models/Election';
import { CandidateService } from 'src/app/services/candidate.service';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-election-item',
  templateUrl: './election-item.component.html',
  styleUrls: ['./election-item.component.css']
})
export class ElectionItemComponent implements OnInit {


  constructor(private electionService:ElectionService,private candidateService:CandidateService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  @Input() election: Election;
  @Output() electionRefresh = new EventEmitter();

  onDelete(election){
    this.electionService.DeleteElection(election.id).subscribe(
      response => {
        if(response){
          this.candidateService.DeleteAllCandidateByEId(election.id).subscribe(
            responseCan => {
              if(responseCan){
                this.snack.open("Deletion Successful","Dismiss",{duration:2000});
              }
              else this.snack.open("Deletion Unsuccessful","Dismiss",{duration:2000});
            }
          );
        }
        else this.snack.open("Deletion Unsuccessful","Dismiss",{duration:2000});
        this.electionRefresh.emit();
      }
    );
  }

  ElectionEditPopUp = false;
  ChangeElectionEditPopUp(){
    this.ElectionEditPopUp = !this.ElectionEditPopUp;
  }
  EditElection(){
    this.electionService.EditElection(this.election).subscribe(
      response => {
        if(response){
          this.snack.open("Update Successful","Dismiss",{duration:2000});
        }
        else this.snack.open("Update Unsuccessful","Dismiss",{duration:2000});
        this.electionRefresh.emit();
      }
    );
  }
  
  CandidatePopUp = false;
  ChangerCandidatePopUp(){
    this.CandidatePopUp = !this.CandidatePopUp;
  }

  freezetoggle = false;
  ChangeFStatus(){
    this.electionService.ChangeFStatus(this.election.id).subscribe(
      response =>{
        if(response){
          if(!this.freezetoggle) {
            this.snack.open("Election is Freezed","Dismiss",{duration:2000});
            this.freezetoggle = !this.freezetoggle;
          }
          else
          this.snack.open("Election is Unfreezed","Dismiss",{duration:2000});
        }
        else this.snack.open("Error With Freezing","Dismiss",{duration:2000});
      }
    );
  }
  ChangePStatus(){
    this.electionService.ChangePStatus(this.election.id).subscribe(
      response =>{
        if(response!=null){
          this.election = response;
          this.snack.open("Election is Published","Dismiss",{duration:2000});
        }else this.snack.open("Error with Publishing","Dismiss",{duration:2000});
      }
    );
  }
}
