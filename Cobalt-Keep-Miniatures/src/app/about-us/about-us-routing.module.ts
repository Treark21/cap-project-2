import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutUsComponent }     from './about-us/about-us.component';



const aboutUsRoutes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
   
  }
];

@NgModule({
  imports: [  ],
  exports: [
    RouterModule
  ]
})
export class AboutUSRoutingModule { }