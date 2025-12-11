import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../services/issue.service';
import { IssueCreateDto } from '../../models/issue.model';

@Component({
  selector: 'app-issue-form',
  standalone: false,
  templateUrl: './issue-form.html',
  styleUrl: './issue-form.scss',
})
export class IssueForm implements OnInit {
  issue: IssueCreateDto = {
    title: '',
    description: '',
    projectId: '',
    priority: 2
  };
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService: IssueService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['projectId']) {
        this.issue.projectId = params['projectId'];
      }
    });
  }

  onSubmit(): void {
    if (!this.issue.title || !this.issue.description || !this.issue.projectId || !this.issue.priority) {
      this.error = 'Please fill in all fields.';
      return;
    }

    this.loading = true;
    this.error = null;

    this.issueService.addIssue(this.issue).subscribe({
      next: () => {
        this.router.navigate(['/projects', this.issue.projectId]);
      },
      error: (err) => {
        this.error = 'Failed to create issue. Please try again.';
        this.loading = false;
        console.error('Error creating issue:', err);
      }
    });
  }

  cancel(): void {
    if (this.issue.projectId) {
      this.router.navigate(['/projects', this.issue.projectId]);
    } else {
      this.router.navigate(['/projects']);
    }
  }
}
