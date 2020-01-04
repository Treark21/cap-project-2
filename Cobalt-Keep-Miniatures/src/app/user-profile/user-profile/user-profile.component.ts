import { Component } from '@angular/core';
import { AuthenticationService } from '/Users/Owner/Documents/GitHub/cap-project-2/Cobalt-Keep-Miniatures/src/app/shared/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  
})
export class UserProfileComponent {


  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService) {}

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signIn() {
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  }


