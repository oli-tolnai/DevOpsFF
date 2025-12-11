import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueCreateDto, IssueStatusUpdateDto } from '../models/issue.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = `${environment.apiUrl}/Issue`;

  constructor(private http: HttpClient) { }

  addIssue(issue: IssueCreateDto): Observable<void> {
    return this.http.post<void>(this.apiUrl, issue);
  }

  updateIssueStatus(id: string, statusUpdate: IssueStatusUpdateDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, statusUpdate);
  }
}
