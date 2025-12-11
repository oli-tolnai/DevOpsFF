import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectViewDto, IssueViewDto, IssueStatus } from '../../models/project.model';

@Component({
  selector: 'app-project-view',
  standalone: false,
  templateUrl: './project-view.html',
  styleUrl: './project-view.scss',
})
export class ProjectView implements OnInit {
  project: ProjectViewDto | null = null;
  loading = false;
  error: string | null = null;
  IssueStatus = IssueStatus;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProject(id);
    }
  }

  loadProject(id: string): void {
    this.loading = true;
    this.error = null;
    this.projectService.getProject(id).subscribe({
      next: (data) => {
        this.project = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load project. Please try again.';
        this.loading = false;
        console.error('Error loading project:', err);
      }
    });
  }

  getStatusBadgeClass(status: IssueStatus): string {
    switch (status) {
      case IssueStatus.Open:
        return 'bg-danger';
      case IssueStatus.InProgress:
        return 'bg-warning';
      case IssueStatus.Resolved:
        return 'bg-info';
      case IssueStatus.Closed:
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  }

  getStatusText(status: IssueStatus): string {
    switch (status) {
      case IssueStatus.Open:
        return 'Open';
      case IssueStatus.InProgress:
        return 'In Progress';
      case IssueStatus.Resolved:
        return 'Resolved';
      case IssueStatus.Closed:
        return 'Closed';
      default:
        return 'Unknown';
    }
  }

  editProject(): void {
    if (this.project) {
      this.router.navigate(['/projects/edit', this.project.id]);
    }
  }

  addNewIssue(): void {
    if (this.project) {
      this.router.navigate(['/issues/new'], { queryParams: { projectId: this.project.id } });
    }
  }

  backToList(): void {
    this.router.navigate(['/projects']);
  }
}
