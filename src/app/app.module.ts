import {
  NgModule,
  forwardRef
} from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { UpgradeAdapter } from '@angular/upgrade';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ngapp2Component } from './ngapp2/ngapp2.component';

declare var angular: any;

/*
 * Create our upgradeAdapter
 */
export const upgradeAdapter: UpgradeAdapter = new UpgradeAdapter(
  forwardRef(() => AppModule));

  /*
 * Expose our ng2 content to ng1
 */
angular.module('ngapp1')
  .directive('ngapp2',
             upgradeAdapter.downgradeNg2Component(Ngapp2Component))
/*
 * Expose our ng1 content to ng2
 */
upgradeAdapter.upgradeNg1Provider('ngapp1Service');
upgradeAdapter.upgradeNg1Provider('$state');

@NgModule({
  declarations: [
    AppComponent,
    Ngapp2Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AlertModule.forRoot()
  ],
  providers: [
  ],
  // bootstrap: [AppComponent]

})

export class AppModule { }


