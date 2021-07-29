import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css']
})
export class AdminItemsComponent implements OnInit {

  constructor(private adminService:AdminService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    
  }
  hide = true;
  @Input() admin: Admin;
  @Output() adminRefresh = new EventEmitter();

  onDelete(admin){
    this.adminService.DeleteAdminByName(admin.username).subscribe(
      response => {
        if(response){
          this.snack.open("Deletion Successfull","Dismiss",{duration:2000});
        }
        else this.snack.open("Deletion Unsuccessfull","Dismiss",{duration:2000});
        this.adminRefresh.emit();
      }
    );
  }

  AdminEditPopUp = false;
  ChangeAdminEditPopUp(){
    this.AdminEditPopUp = !this.AdminEditPopUp;
  }
  EditAdmin(){
    this.adminService.EditAdmin(this.admin).subscribe(
      response => {
        if(response){
          this.snack.open("Update Successfull","Dismiss",{duration:2000});
        }
        else this.snack.open("Update Unsuccessfull","Dismiss",{duration:2000});
        this.adminRefresh.emit();
      }
    );
  }
}
