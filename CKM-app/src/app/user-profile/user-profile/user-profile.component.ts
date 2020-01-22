import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

import { FormGroup, FormControl } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { stringify } from 'querystring';
import { async } from '@angular/core/testing';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.component.scss']

})
export class UserProfileComponent  {

  email: string;
  password: string;
  isShow: boolean = true;
  
  upload: any[];
  name: string;
  models: string;
  services: string;
  assembly: boolean = false;
  basing: boolean = false;
  currency: string;
  scheme: string;
  message: string;
  country: string;
 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;
  
  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;
  

  constructor(public authenticationService: AuthenticationService, public afAuth: AngularFireAuth, private fun: AngularFireFunctions, private storage: AngularFireStorage,) { }


  startUpload(event: FileList) {
    //file object
    const file =event.item(0)
    //Client-side validation
    if (file.type.split('/')[0] !== 'image') {
      alert('Unsupported file type. Please choose an image file.')
      return;
    }

    //storage path
    const filePath = `scheme/${new Date().getTime()}_${file.name}`;

    const fileRef = this.storage.ref(filePath)
    
    //main task
    this.storage.upload(filePath, file).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.downloadURL = url;
          
        })
      })
    ).subscribe();

    

    //progress monitoring
    this.percentage = this.storage.upload(filePath, file).percentageChanges();
    this.snapshot = this.storage.upload(filePath, file).snapshotChanges();

    //download URL
  //  finalize(()=>{
  //   this.downloadURL = fileRef.getDownloadURL() 
  //  })
    
   
  //  return this.downloadURL
  }

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
  resetPassword() {
    this.authenticationService.resetPassword(this.email);
    this.email = '';
    
}
  toggleDisplay(){
    this.isShow = !this.isShow
  }
  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  welcomeEmail() {
    const callable = this.fun.httpsCallable('welcomeEmail');
  }
  
  signOut() {
    this.authenticationService.SignOut();
  }
  
  sendEmail2() {
    const callable = this.fun.httpsCallable('toEmail');
    const message = this.message;
    const email = this.email;
    const name = this.name;
    const upload = this.downloadURL;
    const country = this.country;
    const scheme = this.scheme;
    const basing = this.basing;
    const assembly = this.assembly;
    const percentage = this.percentage
    const snapshot = this.snapshot
    

    callable({ text: 'clients name: ' + name 
        + '<br> Clients prefered email: ' + email
        + '<br> Assembly requested: ' + assembly
        + '<br> Basing requested: ' + basing
        + '<br> Country located: ' + country
        + "<br> Models and levels requesting: " + message 
        + "<br> Color scheme: " + scheme 
        + "<br> Color scheme link: " + upload
        , subject: 'Quote ask from ' + name}).subscribe();
   
    this.message = null;
    this.name = null;
    this.email = null;
    this.assembly = null;
    this.basing = null;
    this.country = null;
    this.scheme = null;
    this.isShow = !this.isShow;
    
    
    
  }
 
}