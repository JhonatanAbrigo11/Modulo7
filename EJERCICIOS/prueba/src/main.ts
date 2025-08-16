import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { CompanyView } from './app/components/company-view/company-view';

bootstrapApplication(CompanyView, appConfig)
  .catch((err) => console.error(err));
