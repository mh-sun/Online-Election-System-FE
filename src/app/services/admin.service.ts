import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private adminAPI = 'http://localhost:5000/api/admin/';

  public GetAdminById(adminId: number): Observable<any>{
    return this.http.post<any>(this.adminAPI+'get', adminId);
  }
  public GetAdminByName(username: String): Observable<any>{
    return this.http.post<any>(this.adminAPI+'get', username);
  }

  public GetAllAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.adminAPI+'getAll');
  }

  public EditAdmin(admin: Admin):Observable<boolean>{
    return this.http.post<boolean>(this.adminAPI+'edit', admin);
  }

  public AddAdmin(admin: Admin):Observable<Admin>{
    return this.http.post<Admin>(this.adminAPI+'add', admin);
  }
  public DeleteAdminByName(username: String){
    return this.http.delete<any>(this.adminAPI+'delete?username='+username.toString());
  }
  
}
