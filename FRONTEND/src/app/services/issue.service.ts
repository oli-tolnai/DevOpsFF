import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueCreateDto, IssueStatusUpdateDto } from '../models/issue.model';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private get apiUrl() { return `${this.configService.cfg.backendUrl}/api/Issue`; }

  constructor(private http: HttpClient, private configService: ConfigService) { }

  addIssue(issue: IssueCreateDto): Observable<void> {
    return this.http.post<void>(this.apiUrl, issue);
  }

  updateIssueStatus(id: string, statusUpdate: IssueStatusUpdateDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, statusUpdate);
  }
}
