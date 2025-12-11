export interface ProjectCreateUpdateDto {
  name: string;
  description: string;
}

export interface ProjectShortViewDto {
  id: string;
  name: string;
  description: string;
  activeIssues: number;
}

export interface ProjectViewDto {
  id: string;
  name: string;
  description: string;
  issues: IssueViewDto[];
}

export interface IssueViewDto {
  id: string;
  title: string;
  description: string;
  status: IssueStatus;
  createdAt: Date;
  assignedUserId?: string;
}

export enum IssueStatus {
  Open = 0,
  InProgress = 1,
  Resolved = 2,
  Closed = 3
}
