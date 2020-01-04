import { Component } from '@angular/core';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './user-profile.html',
  
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
    this.authenticationService.SignIn(this.email, this.password);
    this.email = ''; 
    this.password = '';
    
  }

  signOut() {
    this.authenticationService.SignOut();
  }

}
