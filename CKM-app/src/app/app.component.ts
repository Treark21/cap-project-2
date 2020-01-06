import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './user-profile/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,public afAuth: AngularFireAuth, private fun: AngularFireFunctions) { }
  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  sendEmail() {
    const callable = this.fun.httpsCallable('genericEmail');
    callable({ text: 'Sending email with Angular and SendGrid is fun!', subject: 'Email from Angular'}).subscribe();
  }

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }

   title = 'CKM-app';
}
