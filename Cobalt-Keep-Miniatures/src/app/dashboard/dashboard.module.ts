import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { DashboardAComponent } from './dashboard-a/dashboard-a.component';
import { DashboardMComponent } from './dashboard-m/dashboard-m.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardAComponent,
    DashboardMComponent
  ]
})
export class DashboardModule {}