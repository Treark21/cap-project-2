import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardAComponent } from './dashboard-a/dashboard-a.component';
import { DashboardMComponent } from './dashboard-m/dashboard-m.component';



const AuthRoutes: Routes = [
    {
      path: '',
      component: DashboardAComponent,
      
    },
    {
        path: '',
        component: DashboardMComponent,
        
      }];

@NgModule({
  imports: [  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }