// main.ts
import { importProvidersFrom } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule) // ✅ this is the missing part
  ]
}).catch(err => console.error(err));
