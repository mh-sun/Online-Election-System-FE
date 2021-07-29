import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voter } from '../models/Voter';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  private voterAPI = 'http://localhost:5000/api/voter/';

  public getVoter(voterId: number):Observable<Voter>{
    return this.http.get<Voter>(this.voterAPI+'get?id='+voterId.toString());
  }

  public getAllVoter():Observable<Voter[]>{
    return this.http.get<Voter[]>(this.voterAPI+'getAll');
  }

  public editInfo(voter: Voter):Observable<boolean>{
    return this.http.post<boolean>(this.voterAPI+'edit', voter);
  }

  public DeleteVoter(id: number){
    return this.http.delete<any>(this.voterAPI+'delete?id='+id.toString());
  }
  public AddVoter(voter: Voter):Observable<boolean>{
    return this.http.post<boolean>(this.voterAPI+'add', voter);
  }
}
