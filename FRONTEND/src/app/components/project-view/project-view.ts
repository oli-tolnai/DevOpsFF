import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { IssueService } from '../../services/issue.service';
import { ProjectViewDto, IssueViewDto } from '../../models/project.model';

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
  availableStatuses = ['New', 'In Progress', 'Resolved', 'Closed'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private issueService: IssueService
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

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'New':
        return 'bg-danger';
      case 'In Progress':
        return 'bg-warning';
      case 'Resolved':
        return 'bg-info';
      case 'Closed':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  }

  getStatusText(status: string): string {
    return status || 'Unknown';
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

  updateIssueStatus(issueId: string, newStatus: string): void {
    this.issueService.updateIssueStatus(issueId, { status: newStatus }).subscribe({
      next: () => {
        if (this.project) {
          this.loadProject(this.project.id);
        }
      },
      error: (err) => {
        this.error = 'Failed to update issue status. Please try again.';
        console.error('Error updating issue status:', err);
      }
    });
  }
}
