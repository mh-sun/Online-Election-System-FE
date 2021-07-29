import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { Voter } from 'src/app/models/Voter';
import { AdminService } from 'src/app/services/admin.service';
import { VoterService } from 'src/app/services/voter.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private adminService:AdminService,
    private router:Router,
    private voterService:VoterService) { }

  ngOnInit(): void {
  }

  public AdminMan = false;
  public VoterMan = false;
  public ElectMan = false;
  
  switchMan(man){
    this.AdminMan = false;
    this.VoterMan = false;
    this.ElectMan = false;

    if(man == "AdminMan") this.AdminMan = true;
    else if(man == "VoterMan") this.VoterMan = true;
    else if(man == "ElectMan") this.ElectMan = true;
  }
}


