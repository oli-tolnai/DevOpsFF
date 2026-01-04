import { APP_INITIALIZER, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProjectList } from './components/project-list/project-list';
import { ProjectView } from './components/project-view/project-view';
import { ProjectForm } from './components/project-form/project-form';
import { IssueForm } from './components/issue-form/issue-form';
import { ConfigService } from './services/config-service';

@NgModule({
  declarations: [
    App,
    ProjectList,
    ProjectView,
    ProjectForm,
    IssueForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: (cfg: ConfigService) => () => cfg.load(),
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
