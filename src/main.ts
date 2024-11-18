import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()]
}).catch((err) => console.error(err));
bootstrapApplication(HeaderComponent);
