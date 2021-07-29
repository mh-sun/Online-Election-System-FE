import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/Candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private http: HttpClient) { }

  private API = 'http://localhost:5000/api/candidate/';

  public GetCandidateByEId(id: number){
    return this.http.post<Candidate[]>(this.API+'getbyeid', id);
  }

  public GetAllCandidate():Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.API+'getall');
  }

  public EditCandidate(candidate: Candidate){
    return this.http.post<boolean>(this.API+'edit', candidate);
  }

  public AddCandidate(candidate: Candidate){
    return this.http.post<boolean>(this.API+'add', candidate);
  }
  public DeleteCandidate(id: number){
    return this.http.delete<boolean>(this.API+'delete?id='+id.toString());
  }
  public DeleteAllCandidateByEId(id: number){
    return this.http.delete<boolean>(this.API+'deleteall?id='+id.toString());
  }
  public Vote(ids: number[]){
    console.log(ids);
    return this.http.post<boolean>(this.API+'vote', ids);
  }
  
}
