import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { ServicesComponent } from './services/services/services.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactComponent } from './contact/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'gallery',component: GalleryComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'about-us',component: AboutUsComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'auth/login',component: LoginComponent},
  {path: 'auth/register',component: RegisterComponent},
];

@NgModule({
  imports: [CommonModule,
            RouterModule.forRoot(routes)
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
