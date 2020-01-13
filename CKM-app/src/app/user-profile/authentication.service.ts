import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        alert(error.message);
      });    
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        alert(err.message);
      });
  }
  /* Reset Password*/
  resetPassword(email: string) {
    

    this.angularFireAuth.auth.sendPasswordResetEmail(email).
    then(res => {
      console.log('Email sent!');
    })
    .catch(error => {
      alert(error.message);
    });
    
}
  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }  
}