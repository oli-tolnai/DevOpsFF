import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectShortViewDto } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList implements OnInit {
  projects: ProjectShortViewDto[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.error = null;
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load projects. Please try again.';
        this.loading = false;
        console.error('Error loading projects:', err);
      }
    });
  }

  viewProject(id: string): void {
    this.router.navigate(['/projects', id]);
  }

  editProject(id: string): void {
    this.router.navigate(['/projects/edit', id]);
  }

  addNewIssue(projectId: string): void {
    this.router.navigate(['/issues/new'], { queryParams: { projectId } });
  }

  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.loadProjects();
        },
        error: (err) => {
          alert('Failed to delete project. Please try again.');
          console.error('Error deleting project:', err);
        }
      });
    }
  }

  createNewProject(): void {
    this.router.navigate(['/projects/new']);
  }
}
