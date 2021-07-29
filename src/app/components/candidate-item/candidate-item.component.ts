import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Candidate } from 'src/app/models/Candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-item',
  templateUrl: './candidate-item.component.html',
  styleUrls: ['./candidate-item.component.css']
})
export class CandidateItemComponent implements OnInit {

  constructor(private candidateService:CandidateService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    
  }
  @Input() candidate:Candidate;
  @Output() candidateRefresh = new EventEmitter();

  onDelete(candidate){
    this.candidateService.DeleteCandidate(candidate.id).subscribe(
      response => {
        if(response){
          this.snack.open("Deletion Successful","Dismiss",{duration:2000});
        }
        else this.snack.open("Deletion Unsuccessful","Dismiss",{duration:2000});
        this.candidateRefresh.emit();
      }
    );
  }

  CandidateEditPopUp = false;
  ChangeCandidateEditPopUp(){
    this.CandidateEditPopUp = !this.CandidateEditPopUp;
  }
  EditCandidate(){
    this.candidateService.EditCandidate(this.candidate).subscribe(
      response => {
        if(response){
          this.snack.open("Update Successful","Dismiss",{duration:2000});
        }
        else this.snack.open("Update Unsuccessful","Dismiss",{duration:2000});
        this.candidateRefresh.emit();
      }
    );
  }

  checklogged(){
    if(localStorage.getItem('loggedIn')=='voter')
      return false;
    else return true;
  }
  onVote(){
    let ids: number[] =[Number.parseInt(localStorage.getItem('vid')),this.candidate.id];
    this.candidateService.Vote(ids).subscribe(
      response =>{
        if(response){
          this.snack.open("Vote Successful","Dismiss",{duration:2000});
        }
        else this.snack.open("Vote Unsuccessful","Dismiss",{duration:2000});
      }
    );
  }
}
