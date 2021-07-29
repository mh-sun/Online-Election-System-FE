import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/Candidate';
import { Election } from 'src/app/models/Election';
import { CandidateService } from 'src/app/services/candidate.service';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {


  constructor(private EService:ElectionService,private CService: CandidateService) { }

  ngOnInit(): void {
    this.getElection();
  }
  
  elections : Election[] = [] ;
  getElection(){
    this.EService.GetAllElection().subscribe(
      res => {
        this.elections = res;
      }
    );
  }

  candidates : Candidate[] = [];
  SelectedElection(elec){
    this.CService.GetCandidateByEId(elec.id).subscribe(
      response =>{
        this.candidates = response;
      }
    );
  }
}
