import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserProfileComponent }     from './user-profile/user-profile.component';



const contactRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
   
  }
];

@NgModule({
  imports: [  ],
  exports: [
    RouterModule
  ]
})
export class UserProfileRoutingModule { }