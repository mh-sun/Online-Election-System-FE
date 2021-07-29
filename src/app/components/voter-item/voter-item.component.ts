import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Voter } from 'src/app/models/Voter';
import { VoterService } from 'src/app/services/voter.service';

@Component({
  selector: 'app-voter-item',
  templateUrl: './voter-item.component.html',
  styleUrls: ['./voter-item.component.css']
})
export class VoterItemComponent implements OnInit {

  constructor(private voterService:VoterService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    
  }
  hide = true;
  @Input() voter: Voter;
  @Output() voterRefresh = new EventEmitter();

  onDelete(voter){
    this.voterService.DeleteVoter(voter.id).subscribe(
      response => {
        if(response){
          this.snack.open("Deletion Successful","Dismiss",{duration:2000});
        }
        else this.snack.open("Deletion Unsuccessful","Dismiss",{duration:2000});
        this.voterRefresh.emit();
      }
    );
  }

  VoterEditPopUp = false;
  ChangeVoterEditPopUp(){
    this.VoterEditPopUp = !this.VoterEditPopUp;
  }
  EditVoter(){
    this.voterService.editInfo(this.voter).subscribe(
      response => {
        if(response){
          this.snack.open("Update Successful","Dismiss",{duration:2000});
        }
        else this.snack.open("Update Unsuccessful","Dismiss",{duration:2000});
        this.voterRefresh.emit();
      }
    );
  }
}
