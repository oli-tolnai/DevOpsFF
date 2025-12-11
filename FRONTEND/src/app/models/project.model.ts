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
  status: string;
  assignedUserId?: string;
}
