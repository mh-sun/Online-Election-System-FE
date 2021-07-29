import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Election } from '../models/Election';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor(private http: HttpClient) { }

  private API = 'http://localhost:5000/api/election/';

  public GetElectionById(id: number){
    return this.http.post<Election>(this.API+'get', id);
  }

  public GetAllElection():Observable<Election[]>{
    return this.http.get<Election[]>(this.API+'getall');
  }

  public EditElection(election: Election){
    return this.http.post<boolean>(this.API+'edit', election);
  }

  public AddElection(election: Election){
    return this.http.post<boolean>(this.API+'add', election);
  }
  public DeleteElection(id: number){
    return this.http.delete<boolean>(this.API+'delete?id='+id.toString());
  }
  public ChangeFStatus(id: number){
    return this.http.post<boolean>(this.API+'freeze', id);
  }
  public ChangePStatus(id: number){
    return this.http.post<Election>(this.API+'publish', id);
  }
}
