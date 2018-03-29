import {
  NgModule,
  forwardRef
} from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ngapp2Component } from './ngapp2/ngapp2.component';
// import { AddPinComponent } from './add-pin/add-pin.component';
// import { PinControlsComponent } from './pin-controls/pin-controls.component';
// import { AnalyticsService } from './analytics.service';

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
  // .directive('addPin',
  //            upgradeAdapter.downgradeNg2Component(AddPinComponent));

// angular.module('ngapp1')
//   .factory('AnalyticsService',
//            upgradeAdapter.downgradeNg2Provider(AnalyticsService));

/*
 * Expose our ng1 content to ng2
 */
upgradeAdapter.upgradeNg1Provider('ngapp1Service');
upgradeAdapter.upgradeNg1Provider('$state');

// upgradeAdapter.bootstrap(document.body, ['ngapp1']);


@NgModule({
  declarations: [
    AppComponent,
    Ngapp2Component,
    // AddPinComponent,
    // PinControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // AnalyticsService
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }


