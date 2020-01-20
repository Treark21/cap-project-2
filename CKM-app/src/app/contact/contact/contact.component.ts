import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/user-profile/authentication.service'
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',

})
export class ContactComponent {
  email: string;
  password: string;
  name: string;
message: string;
  constructor(public authenticationService: AuthenticationService,public afAuth: AngularFireAuth, private fun: AngularFireFunctions) { }

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
  sendEmail(){
    const callable = this.fun.httpsCallable('genericEmail');
    const message = this.message
    const email = this.email
    const name = this.name
    

    callable({ text: 'clients name: ' + name 
        + '<br> Clients prefered email: ' + email
        
        + "<br> Message from client: " + message 
  
        , subject: 'Message from ask from ' + name}).subscribe();
    this.message = null
    this.email = null
    this.name = null
  }
  }
