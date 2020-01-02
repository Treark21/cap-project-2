import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { GalleryComponent }     from './gallery/gallery.component';

import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent
  ]
})
export class GalleryModule {}