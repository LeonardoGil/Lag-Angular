import { enableProdMode } from '@angular/core';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { provideRouter } from "@angular/router";
import routeConfig from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));