import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { GalleryComponent }     from './gallery/gallery.component';
import { LightboxModule } from 'ngx-lightbox';

import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LightboxModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent,
    
  ]
})
export class GalleryModule {}