import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Candidate } from 'src/app/models/Candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.css']
})
export class CandidateManagementComponent implements OnInit {

  @Input() EId : number;
  @Input() EName : string;
  
  constructor(private candidateService:CandidateService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllCandidateByEid(this.EId);
  }

  candidate : Candidate = new Candidate();
  AddCandidate(){
    this.candidate.e_id = this.EId;
    this.candidate.e_name = this.EName;
    this.candidateService.AddCandidate(this.candidate).subscribe(
      response =>{
        if(response){
          this.snack.open("Addition Successful","Dismiss",{duration:2000});
          this.candidate = new Candidate();
        }
        else
          this.snack.open("Addition Unsuccessful","Dismiss",{duration:2000});
        this.ChangeAddInfoShowUp()
        this.getAllCandidateByEid(this.EId);
      }
    );
  }

  AddInfoShowUp = false;
  ChangeAddInfoShowUp(){
    this.AddInfoShowUp = !this.AddInfoShowUp;
  }

  candidates : Candidate[] = [];
  getAllCandidateByEid(eid){
    this.candidateService.GetCandidateByEId(eid).subscribe(
      (response)=>{
        this.candidates = response;
      }
    );
  }

}
