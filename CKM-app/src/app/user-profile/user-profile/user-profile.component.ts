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
  isShow2: boolean = true;
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
  infantrysmallest: number;
  infantrysmallestassembly: number;
  infantrysmallestlevel: number;
  infantrysmall: number;
  infantrysmallassembly: number;
  infantrysmalllevel: number;
  infantrymedium: number;
  infantrymediumassembly: number;
  infantrysmediumevel: number;
  infantryelite: number;
  infantryeliteassembly: number;
  infantryelitelevel: number;
  infantrylarge: number;
  infantrylargeassembly: number;
  infantrylargelevel: number;
  infantryhero: number;
  infantryheroassembly: number;
  infantryherolevel: number;
  infantrylargehero: number;
  infantrylargeheroassembly: number;
  infantrylargeherolevel: number;
  mountedsmall: number;
  mountedsmallassembly: number;
  mountedsmalllevel: number;
  mountedmedium: number;
  mountedmediumassembly: number;
  mountedmediumlevel: number;
  mountedlarge: number;
  mountedlargeassembly: number;
  mountedlargelevel: number;
  vehiclesmall: number;
  vehiclesmallassembly: number;
  vehiclesmalllevel: number;
  vehiclemedium: number;
  vehiclemediumassembly: number;
  vehiclemediumlevel: number;
  vehiclelarge: number;
  vehiclelargeassembly: number;
  vehiclelargelevel: number;

  vehiclelargest: number;
  vehiclelargestassembly: number;
  vehiclelargestlevel: number;

  vehiclesuperheavy: number;
  vehiclesuperheavyassembly: number;
  vehiclesuperheavylevel: number;

  vehicletitan: number;

  vehicletitanassembly: number;
  vehicletitanlevel: number;
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
  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  welcomeEmail() {
    const callable = this.fun.httpsCallable('welcomeEmail');
  }
  sendEmail() {
    const callable = this.fun.httpsCallable('toEmail');
    const message = this.message
    const email = this.email
    const name = this.name
    const models = this.models
    const currency = this.currency
    const infantrysmallest = this.infantrysmallest
    const infantrysmallestassembly = this.infantrysmallestassembly
    const infantrysmallestlevel = this.infantrysmallestlevel
    const infantrysmall = this.infantrysmall
    const infantrysmallassembly = this.infantrysmallassembly
    const infantrysmalllevel = this.infantrysmalllevel
    const infantrymedium = this.infantrymedium
    const infantrymediumassembly = this.infantrymediumassembly
    const infantrysmediumevel = this.infantrysmediumevel
    const infantryelite = this.infantryelite
    const infantryeliteassembly = this.infantryeliteassembly
    const infantryelitelevel = this.infantryelitelevel
    const infantrylarge = this.infantrylarge
    const infantrylargeassembly = this.infantrylargeassembly
    const infantrylargelevel = this.infantrylargelevel
    const infantryhero = this.infantryhero
    const infantryheroassembly = this.infantryheroassembly
    const infantryherolevel = this.infantryherolevel
    const infantrylargehero = this.infantrylargehero
    const infantrylargeheroassembly = this.infantrylargeheroassembly
    const infantrylargeherolevel = this.infantrylargeherolevel
    const mountedsmall = this.mountedsmall
    const mountedsmallassembly = this.mountedsmallassembly
    const mountedsmalllevel = this.mountedsmalllevel
    const mountedmedium = this.mountedmedium
    const mountedmediumassembly = this.mountedmediumassembly
    const mountedmediumlevel = this.mountedmediumlevel
    const mountedlarge = this.mountedlarge
    const mountedlargeassembly = this.mountedlargeassembly
    const mountedlargelevel = this.mountedlargelevel
    const vehiclesmall = this.vehiclesmall
    const vehiclesmallassembly = this.vehiclesmallassembly
    const vehiclesmalllevel = this.vehiclesmalllevel
    const vehiclemedium = this.vehiclemedium
    const vehiclemediumassembly = this.vehiclemediumassembly
    const vehiclemediumlevel = this.vehiclemediumlevel
    const vehiclelarge = this.vehiclelarge
    const vehiclelargeassembly = this.vehiclelargeassembly
    const vehiclelargelevel = this.vehiclelargelevel
    const vehiclelargest = this.vehiclelargest
    const vehiclelargestassembly = this.vehiclelargestassembly
    const vehiclelargestlevel = this.vehiclelargestlevel
    const vehiclesuperheavy = this.vehiclesuperheavy
    const vehiclesuperheavyassembly = this.vehiclesuperheavyassembly
    const vehiclesuperheavylevel = this.vehiclesuperheavylevel
    const vehicletitan = this.vehicletitan
    const vehicletitanassembly = this.vehicletitanassembly
    const vehicletitanlevel = this.vehicletitanlevel
    const scheme = this.scheme

    callable({ text: 'clients name ' + name 
        + '<br> Do you need to go over purchasing models? ' + models 
        + '<br> Clients prefered currecny ' + currency 
        + '<br> Infantry(smallest): ' + infantrysmallest + ' Assembly needed? ' + infantrysmallestassembly + ' Level ' + infantrysmallestlevel 
        + '<br> Infantry(small): ' + infantrysmall + ' Assembly needed?' + infantrysmallassembly + ' Level ' + infantrysmalllevel 
        + '<br> Infantry(medium): ' + infantrymedium + ' Assembly needed?' + infantrymediumassembly + ' Level ' + infantrysmediumevel 
        + '<br> Infantry(elite): ' + infantryelite + ' Assembly needed?' + infantryeliteassembly + ' Level ' + infantryelitelevel  
        + '<br> Infantry(large): ' + infantrylarge + ' Assembly needed?' + infantrylargeassembly + ' Level ' + infantrylargelevel 
        + '<br> Infantry(hero): ' + infantryhero + ' Assembly needed?' + infantryheroassembly + ' Level ' + infantryherolevel  
        + '<br> Infantry(largehero): ' + infantrylargehero + ' Assembly needed?' + infantrylargeheroassembly + ' Level ' + infantrylargeherolevel  
        + '<br> Mounted(small): ' + mountedsmall + ' Assembly needed?' + mountedsmallassembly + ' Level ' + mountedsmalllevel 
        + '<br> Mounted(medium): ' + mountedmedium + ' Assembly needed?' + mountedmediumassembly + ' Level ' + mountedmediumlevel  
        + '<br> Mounted(large): ' + mountedlarge + ' Assembly needed?' + mountedlargeassembly + ' Level ' + mountedlargelevel 
        + '<br> Monster/Vehicle(small): ' + vehiclesmall + ' Assembly needed?' + vehiclesmallassembly + ' Level ' + vehiclesmalllevel 
        + '<br> Monster/Vehicle(medium): ' + vehiclemedium + ' Assembly needed?' + vehiclemediumassembly + ' Level ' + vehiclemediumlevel 
        + '<br> Monster/Vehicle(large): ' + vehiclelarge + ' Assembly needed?' + vehiclelargeassembly + ' Level ' + vehiclelargelevel 
        + '<br> Monster/Vehicle(largest): ' + vehiclelargest + ' Assembly needed?' + vehiclelargestassembly + ' Level ' + vehiclelargestlevel 
        + '<br> Monster/Vehicle(superheavy): ' + vehiclesuperheavy + ' Assembly needed?' + vehiclesuperheavyassembly + ' Level ' + vehiclesuperheavylevel 
        + '<br> Monster/Vehicle(titan): ' + vehicletitan + ' Assembly needed?' + vehicletitanassembly + ' Level ' + vehicletitanlevel 
        + "<br> Color scheme " + scheme 
        + '<br> Any additional questions or requests. ' + message, subject: 'Email from ' + email}).subscribe();
  }
  signOut() {
    this.authenticationService.SignOut();
  }
  toggleDisplay(){
    this.isShow = !this.isShow
  }
  toggleDisplay2(){
    this.isShow2 = !this.isShow2
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
    
    
  }
  
}