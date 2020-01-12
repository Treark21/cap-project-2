import { Injectable } from '@angular/core'
@Injectable()
export class Album {
    album = [];
    getImages() {
        return this.album = Imagesdelatils.slice(0);
    }

    getImage(id: number) {
        return Imagesdelatils.slice(0).find(Images => Images.id == id)
    }
}

const Imagesdelatils = [

    { 'id': 0, 'src': '../../../assets/images/IMG_0660.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0660.JPG' },
    { 'id': 1, 'src': '../../../assets/images/IMG_0661.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0661.JPG' },
    { 'id': 2, 'src': '../../../assets/images/IMG_0662.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0662.JPG' },
    { 'id': 3, 'src': '../../../assets/images/IMG_0664.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0664.JPG' },
    { 'id': 4, 'src': '../../../assets/images/IMG_0665.JPG', 'caption': 'Choas Knights', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0665.JPG' },
    { 'id': 5, 'src': '../../../assets/images/IMG_0667.JPG', 'caption': 'Choas Knights', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0667.JPG' },
    { 'id': 6, 'src': '../../../assets/images/IMG_0668.JPG', 'caption': 'Choas Knights', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0668.JPG' },
    { 'id': 7, 'src': '../../../assets/images/IMG_0672.JPG', 'caption': 'Choas Knights', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0672.JPG' },
    { 'id': 8, 'src': '../../../assets/images/IMG_0675.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0675.JPG' },
    { 'id': 9, 'src': '../../../assets/images/IMG_0676.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0676.JPG' },
    { 'id': 10, 'src': '../../../assets/images/IMG_0677.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0677.JPG' },
    { 'id': 11, 'src': '../../../assets/images/IMG_0678.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0678.JPG' },
    { 'id': 12, 'src': '../../../assets/images/IMG_0679.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0679.JPG' },
    { 'id': 13, 'src': '../../../assets/images/IMG_0681.JPG', 'caption': 'Choas Knight', 'level': 'level-3', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0681.JPG' },

    { 'id': 14, 'src': '../../../assets/images/IMG_0682.JPG', 'caption': 'Salamanders Centurions', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0682.JPG' },
    { 'id': 15, 'src': '../../../assets/images/IMG_0683.JPG', 'caption': 'Salamanders Centurions', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0683.JPG' },
    { 'id': 16, 'src': '../../../assets/images/IMG_0684.JPG', 'caption': 'Salamanders Centurion', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0684.JPG' },
    { 'id': 17, 'src': '../../../assets/images/IMG_0685.JPG', 'caption': 'Salamanders Centurion', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0685.JPG' },
    { 'id': 18, 'src': '../../../assets/images/IMG_0686.JPG', 'caption': 'Adrax Agatone', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0686.JPG' },
    { 'id': 19, 'src': '../../../assets/images/IMG_0687.JPG', 'caption': 'Adrax Agatone', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0687.JPG' },
    { 'id': 20, 'src': '../../../assets/images/IMG_0692.JPG', 'caption': 'Salamanders Deredeo Dreadnought', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0692.JPG' },
    { 'id': 21, 'src': '../../../assets/images/IMG_0694.JPG', 'caption': 'Salamanders Leviathan Dreadnought', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0694.JPG' },
    { 'id': 22, 'src': '../../../assets/images/IMG_0695.JPG', 'caption': 'Salamanders Leviathan Dreadnought', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0695.JPG' },
    { 'id': 23, 'src': '../../../assets/images/IMG_0696.JPG', 'caption': 'Salamanders Leviathan Dreadnought', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0696.JPG' },
    { 'id': 24, 'src': '../../../assets/images/IMG_0698.JPG', 'caption': 'Salamanders Leviathan Dreadnought', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0698.JPG' },
    { 'id': 25, 'src': '../../../assets/images/IMG_0699.JPG', 'caption': 'Salamanders Leviathan Dreadnought', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0699.JPG' },
    { 'id': 26, 'src': '../../../assets/images/IMG_0702.JPG', 'caption': 'Salamanders Primaris Intercessors', 'level': 'level-2', 'game': '40k', 'thumb': '../../../assets/images/IMG_0702.JPG' },

    { 'id': 27, 'src': '../../../assets/images/IMG_0708.JPG', 'caption': 'Iron Golems', 'level': 'level-1', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0708.JPG' },
    { 'id': 28, 'src': '../../../assets/images/IMG_0709.JPG', 'caption': 'Iron Golems', 'level': 'level-1', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0709.JPG' },
    { 'id': 29, 'src': '../../../assets/images/IMG_0710.JPG', 'caption': 'Iron Golems', 'level': 'level-1', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0710.JPG' },
    { 'id': 30, 'src': '../../../assets/images/IMG_0711.JPG', 'caption': 'Iron Golems', 'level': 'level-1', 'game': 'aos', 'thumb': '../../../assets/images/IMG_0711.JPG' },
]  