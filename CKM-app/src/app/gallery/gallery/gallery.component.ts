import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/user-profile/authentication.service';
import { Lightbox } from 'ngx-lightbox';



declare var jQuery: any;

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.html',
    styleUrls: [ './gallery.css' ]

})
export class GalleryComponent implements OnInit  {
    name = 'Angular';
    email: string;
    password: string;
    bodyText: any;
    filterBy?:string = 'all'
    
    album: any[] = [];
    



    constructor(public authenticationService: AuthenticationService, private _lightbox: Lightbox,) { 
         
    
        this.album.push({'src':'../../../assets/images/IMG_0660.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0660.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0661.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0661.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0662.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0662.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0664.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0664.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0665.JPG','caption':'Choas Knights','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0665.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0667.JPG','caption':'Choas Knights','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0667.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0668.JPG','caption':'Choas Knights','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0668.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0672.JPG','caption':'Choas Knights','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0672.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0675.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0675.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0676.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0676.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0677.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0677.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0678.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0678.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0679.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0679.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0681.JPG','caption':'Choas Knight','level': 'level-3','game': 'aos','thumb':'../../../assets/images/IMG_0681.JPG'});

        this.album.push({'src':'../../../assets/images/IMG_0682.JPG','caption':'Salamanders Centurions','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0682.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0683.JPG','caption':'Salamanders Centurions','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0683.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0684.JPG','caption':'Salamanders Centurion','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0684.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0685.JPG','caption':'Salamanders Centurion','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0685.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0686.JPG','caption':'Adrax Agatone','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0686.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0687.JPG','caption':'Adrax Agatone','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0687.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0692.JPG','caption':'Salamanders Deredeo Dreadnought','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0692.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0694.JPG','caption':'Salamanders Leviathan Dreadnought','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0694.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0695.JPG','caption':'Salamanders Leviathan Dreadnought','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0695.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0696.JPG','caption':'Salamanders Leviathan Dreadnought','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0696.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0698.JPG','caption':'Salamanders Leviathan Dreadnought','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0698.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0699.JPG','caption':'Salamanders Leviathan Dreadnought','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0699.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0702.JPG','caption':'Salamanders Primaris Intercessors','level': 'level-2','game': '40k','thumb':'../../../assets/images/IMG_0702.JPG'});
        
        this.album.push({'src':'../../../assets/images/IMG_0708.JPG','caption':'Iron Golems','level': 'level-1','game': 'aos','thumb':'../../../assets/images/IMG_0708.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0709.JPG','caption':'Iron Golems','level': 'level-1','game': 'aos','thumb':'../../../assets/images/IMG_0709.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0710.JPG','caption':'Iron Golems','level': 'level-1','game': 'aos','thumb':'../../../assets/images/IMG_0710.JPG'});
        this.album.push({'src':'../../../assets/images/IMG_0711.JPG','caption':'Iron Golems','level': 'level-1','game': 'aos','thumb':'../../../assets/images/IMG_0711.JPG'});
       

    }
    open(index: number): void {

        this._lightbox.open(this.album, index);
        }
        
        close(): void {
        
        this._lightbox.close();
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

    signOut() {
        this.authenticationService.SignOut();
    }
    
   
   

ngOnInit(){
    

    (function ($) {
        $('#all').click(function (e) {
            e.stopPropagation();
            $('.level-1').show();
            $('.level-2').show();
            $('.level-3').show();
            $('.level-4').show();
            $('.40k').show();
            $('.aos').show();

        });
        $('#level-1').click(function (e) {
            e.stopPropagation();
            $('.level-1').show();
            $('.level-2').hide();
            $('.level-3').hide();
            $('.level-4').hide();

        });
        $('#level-2').click(function (e) {
            e.stopPropagation();
            $('.level-1').hide();
            $('.level-2').show();
            $('.level-3').hide();
            $('.level-4').hide();

        });
        $('#level-3').click(function (e) {
            e.stopPropagation();
            $('.level-1').hide();
            $('.level-2').hide();
            $('.level-3').show();
            $('.level-4').hide();

        });
        $('#level-4').click(function (e) {
            e.stopPropagation();
            $('.level-1').hide();
            $('.level-2').hide();
            $('.level-3').hide();
            $('.level-4').show();

        });
        $('#40k').click(function (e) {
            e.stopPropagation();
            $('.40k').show();
            $('.aos').hide();
        });
        $('#aos').click(function (e) {
            e.stopPropagation();
            $('.40k').hide();
            $('.aos').show();
        });
    
    })(jQuery);
   
}
}
 
