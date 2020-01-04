import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AboutUsComponent } from './about-us/about-us.component';

import { AboutUSRoutingModule } from './about-us-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutUSRoutingModule
  ],
  declarations: [
    AboutUsComponent
  ]
})
export class AboutUsModule {}