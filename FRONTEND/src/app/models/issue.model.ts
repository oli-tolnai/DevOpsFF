export interface IssueCreateDto {
  title: string;
  description: string;
  projectId: string;
  priority: number;
}

export interface IssueStatusUpdateDto {
  status: string;
}
