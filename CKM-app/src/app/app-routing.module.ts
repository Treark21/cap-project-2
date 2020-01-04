import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component'
import { HomeComponent } from './home/home/home.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { ServicesComponent } from './services/services/services.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactComponent } from './contact/contact/contact.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'gallery',component: GalleryComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'about-us',component: AboutUsComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'user-profile',component: UserProfileComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
