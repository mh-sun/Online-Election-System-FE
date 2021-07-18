import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private adminAPI = "http://localhost:5000/api/admin";
  private voterAPI = "http://localhost:5000/api/voter";
  
  public checkAdmin(admin: Admin): Observable<boolean>{
    return this.http.post<any>(this.adminAPI + '/check',admin);
  }
}
