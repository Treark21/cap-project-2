import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ServicesComponent }     from './services/services.component';



const contactRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent,
   
  }
];

@NgModule({
  imports: [  ],
  exports: [
    RouterModule
  ]
})
export class ServicesRoutingModule { }