import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContactComponent }     from './contact/contact.component';



const contactRoutes: Routes = [
  {
    path: '',
    component: ContactComponent,
   
  }
];

@NgModule({
  imports: [  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }