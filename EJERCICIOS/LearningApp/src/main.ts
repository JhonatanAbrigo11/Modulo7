import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LearningComponent } from './app/components/learning.component/learning.component';

bootstrapApplication(LearningComponent, appConfig)
  .catch((err) => console.error(err));
