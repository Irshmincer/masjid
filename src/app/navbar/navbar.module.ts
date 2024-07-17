import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule
  ],
  exports:[NavbarComponent],


})
export class NavbarModule { }
