import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrayerRoutingModule } from './prayer-routing.module';
import { PrayerComponent } from './prayer.component';


@NgModule({
  declarations: [
    PrayerComponent
  ],
  imports: [
    CommonModule,
    PrayerRoutingModule
  ]
})
export class PrayerModule { }
