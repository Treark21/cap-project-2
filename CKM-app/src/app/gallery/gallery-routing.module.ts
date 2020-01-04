import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GalleryComponent }     from './gallery/gallery.component';




const galleryRoutes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    
   
  }
];

@NgModule({
  imports: [  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule { }