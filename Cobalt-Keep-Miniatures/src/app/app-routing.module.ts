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
import { DashboardAComponent } from './dashboard/dashboard-a/dashboard-a.component';
import { DashboardMComponent } from './dashboard/dashboard-m/dashboard-m.component';
import { UserProfileComponent } from './user-profile/user-profile.component'

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'gallery',component: GalleryComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'about-us',component: AboutUsComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'auth/login',component: LoginComponent},
  {path: 'auth/register',component: RegisterComponent},
  {path: 'dashboard-a',component: DashboardAComponent},
  {path: 'dashboard-m',component: DashboardMComponent},
  {path: 'user-profile',component: UserProfileComponent}
];

@NgModule({
  imports: [CommonModule,
            RouterModule.forRoot(routes)
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
