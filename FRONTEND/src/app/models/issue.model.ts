export interface IssueCreateDto {
  title: string;
  description: string;
  projectId: string;
}

export interface IssueStatusUpdateDto {
  status: number;
}
