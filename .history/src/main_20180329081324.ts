import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, upgradeAdapter } from './app/app.module';
import { environment } from './environments/environment';

declare var angular: any;


if (environment.production) {
  enableProdMode();
}

upgradeAdapter.bootstrap(document.body, ['ngapp1']);

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
