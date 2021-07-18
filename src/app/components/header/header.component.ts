import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.checkStorage();
  }

  checkRoute(route: string){
    return this.router.url === route;
  }

  checkStorage() {
    var loggedUserType = localStorage.getItem('loggedIn');
    
    if(loggedUserType === 'admin') {
      this.router.navigate(["user/admin"]);
    }
    else if(loggedUserType === 'voter') {
      this.router.navigate(["user/voter"]);
    }
    else this.router.navigate(["/"]);
  }

  logout(){
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('id');
    window.location.reload()
  }

}
