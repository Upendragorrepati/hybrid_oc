import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, upgradeAdapter } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

upgradeAdapter.bootstrap(document.body, ['interestApp']);

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
