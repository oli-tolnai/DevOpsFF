import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectShortViewDto, ProjectViewDto, ProjectCreateUpdateDto } from '../models/project.model';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private get apiUrl() { return `${this.configService.cfg.backendUrl}/api/Project`; }

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAllProjects(): Observable<ProjectShortViewDto[]> {
    return this.http.get<ProjectShortViewDto[]>(this.apiUrl);
  }

  getProject(id: string): Observable<ProjectViewDto> {
    return this.http.get<ProjectViewDto>(`${this.apiUrl}/${id}`);
  }

  addProject(project: ProjectCreateUpdateDto): Observable<void> {
    return this.http.post<void>(this.apiUrl, project);
  }

  updateProject(id: string, project: ProjectCreateUpdateDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
