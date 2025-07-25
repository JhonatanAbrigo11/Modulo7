import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { InvoiceComponent } from './app/components/invoice/invoice';

bootstrapApplication(InvoiceComponent, appConfig)
  .catch((err) => console.error(err));
