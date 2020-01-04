import { Component,OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  
})
export class GalleryComponent implements OnInit {
    name = 'Angular';
  
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
