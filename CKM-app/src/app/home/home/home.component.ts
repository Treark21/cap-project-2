import { Component } from '@angular/core';
import { AuthenticationService} from 'src/app/user-profile/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  
})
export class HomeComponent { 
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