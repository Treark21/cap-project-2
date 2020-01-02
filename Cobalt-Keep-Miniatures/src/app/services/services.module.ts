import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ServicesComponent }     from './services/services.component';

import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule {}