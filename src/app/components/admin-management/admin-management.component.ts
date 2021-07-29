import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  constructor(private adminService:AdminService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllAdmin();
  }

  hide = true;

  admin : Admin = new Admin();
  addAdmin(){
    this.adminService.AddAdmin(this.admin).subscribe(
      response =>{
        if(response){
          this.snack.open("Admin Added","Dismiss",{duration:2000});
          this.admin = new Admin();
        }
        else
          this.snack.open("Admin is not Added","Dismiss",{duration:2000});
        this.ChangeAddInfoShowUp()
        this.getAllAdmin();
      }
    );
  }

  AddInfoShowUp = false;
  ChangeAddInfoShowUp(){
    this.AddInfoShowUp = !this.AddInfoShowUp;
  }

  admins : Admin[] = [];
  getAllAdmin(){
    this.adminService.GetAllAdmin().subscribe(
      (response)=>{
        this.admins = response;
      }
    );
  }

}
