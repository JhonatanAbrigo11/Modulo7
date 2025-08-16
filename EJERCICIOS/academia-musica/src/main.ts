import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { GradeComponent } from './app/components/grade-component/grade-component';

bootstrapApplication(GradeComponent, appConfig)
  .catch((err) => console.error(err));
