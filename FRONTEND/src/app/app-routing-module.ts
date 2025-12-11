import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectList } from './components/project-list/project-list';
import { ProjectView } from './components/project-view/project-view';
import { ProjectForm } from './components/project-form/project-form';
import { IssueForm } from './components/issue-form/issue-form';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectList },
  { path: 'projects/new', component: ProjectForm },
  { path: 'projects/edit/:id', component: ProjectForm },
  { path: 'projects/:id', component: ProjectView },
  { path: 'issues/new', component: IssueForm }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
