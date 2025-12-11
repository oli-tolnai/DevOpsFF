import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectCreateUpdateDto } from '../../models/project.model';

@Component({
  selector: 'app-project-form',
  standalone: false,
  templateUrl: './project-form.html',
  styleUrl: './project-form.scss',
})
export class ProjectForm implements OnInit {
  project: ProjectCreateUpdateDto = {
    name: '',
    description: ''
  };
  isEditMode = false;
  projectId: string | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    if (this.projectId) {
      this.isEditMode = true;
      this.loadProject(this.projectId);
    }
  }

  loadProject(id: string): void {
    this.loading = true;
    this.projectService.getProject(id).subscribe({
      next: (data) => {
        this.project = {
          name: data.name,
          description: data.description
        };
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load project. Please try again.';
        this.loading = false;
        console.error('Error loading project:', err);
      }
    });
  }

  onSubmit(): void {
    if (!this.project.name || !this.project.description) {
      this.error = 'Please fill in all fields.';
      return;
    }

    this.loading = true;
    this.error = null;

    if (this.isEditMode && this.projectId) {
      this.projectService.updateProject(this.projectId, this.project).subscribe({
        next: () => {
          this.router.navigate(['/projects', this.projectId]);
        },
        error: (err) => {
          this.error = 'Failed to update project. Please try again.';
          this.loading = false;
          console.error('Error updating project:', err);
        }
      });
    } else {
      this.projectService.addProject(this.project).subscribe({
        next: () => {
          this.router.navigate(['/projects']);
        },
        error: (err) => {
          this.error = 'Failed to create project. Please try again.';
          this.loading = false;
          console.error('Error creating project:', err);
        }
      });
    }
  }

  cancel(): void {
    if (this.isEditMode && this.projectId) {
      this.router.navigate(['/projects', this.projectId]);
    } else {
      this.router.navigate(['/projects']);
    }
  }
}
