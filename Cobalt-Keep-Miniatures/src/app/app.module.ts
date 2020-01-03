import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';
import { GalleryModule } from './gallery/gallery.module';
import { AuthModule } from './auth/auth.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { DashboardModule } from './dashboard/dashboard.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ServicesModule,
    GalleryModule,
    AuthModule,
    AboutUsModule,
    ContactModule,
    DashboardModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
