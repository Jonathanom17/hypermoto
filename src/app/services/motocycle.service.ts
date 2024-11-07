import { Injectable } from '@angular/core';
import { arrayIMG, logoMarga } from '../interfaces/varios-interfaces';

@Injectable({
  providedIn: 'root'
})
export class MotocycleService {
  
  private arrayDatos: arrayIMG[] = [
    {
        id: 0,
        marca: 'HONDA',
        modelo: 'CB650R',
        description: '',
        imgMain: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
        arrayWP: [
            {
                url: 'image/honda1.avif',
                modelo: 'CB650R',
                description: '',
            },
            {
                url: 'image/honda2.avif',
                modelo: 'CB650R',
                description: '',
            },
            {
                url: 'image/honda3.avif',
                modelo: 'CB650R',
                description: '',
            },
            {
                url: 'image/honda4.avif',
                modelo: 'CB650R',
                description: '',
            },
            {
                url: 'image/honda5.avif',
                modelo: 'CB650R',
                description: '',
            },
        ]
    }, 
    {
        id: 1,
        marca: 'kOVE',
        modelo: '450 Rally',
        description: 'La KOVE 450 Rally es una motocicleta versátil diseñada para acompañarte tanto en tus desplazamientos diarios como en emocionantes aventuras fuera de la carretera',
        imgMain: 'https://www.kovemoto.com/uploadfile/202308/3c1108fd9265.png',
        arrayWP: [
            {
                url: 'https://kovemotor.es/wp-content/uploads/2024/04/KOVE-MOTOR-ESPANA-Rally-450-on.png',
                modelo: '450 Rally',
                description: '',
            },
            {
                url: 'https://kovemotor.es/wp-content/uploads/2024/04/KOVE-MOTOR-rally-450Rally-galeria-6-2.jpg',
                modelo: '450 Rally',
                description: '',
            },
            {
                url: 'https://kovemotor.es/wp-content/uploads/2024/04/KOVE-MOTOR-rally-450Rally-galeria-5-2.jpg',
                modelo: '450 Rally',
                description: '',
            },
            {
                url: 'https://kovemotor.es/wp-content/uploads/2024/04/KOVE-MOTOR-rally-450Rally-galeria-4-2.jpg',
                modelo: '450 Rally',
                description: '',
            },
            {
                url: 'https://kovemotor.es/wp-content/uploads/2024/04/KOVE-MOTOR-rally-450Rally-galeria-3-2.jpg',
                modelo: '450 Rally',
                description: '',
            },
        ]
    },
    {
        id: 2,
        marca: '',
        modelo: '',
        description: '',
        imgMain: '',
        arrayWP: [
            {
                url: '',
                modelo: '',
                description: '',
            },
            {
                url: '',
                modelo: '',
                description: '',
            },
            {
                url: '',
                modelo: '',
                description: '',
            },
            {
                url: '',
                modelo: '',
                description: '',
            },
            {
                url: '',
                modelo: '',
                description: '',
            },
        ]
    }


];

  

  getArrayMotocycle():arrayIMG[]{
    return  [...this.arrayDatos];
  }

    arrayLogoMarca:logoMarga[]=[
        {url: 'logos/honda.webp',marca: 'HONDA'},
        {url: 'logos/kawasaki.webp',marca: 'KAWASAKI'},
        {url: 'logos/ktm.webp',marca: 'KTM'},
        {url: 'logos/suzuki.webp',marca: 'SUZUKI'},
        {url: 'logos/yamaha.webp',marca: 'YAMAHA'},
        {url: 'logos/husqvarna.webp',marca: 'HUSQVARNA'},
        {url: 'logos/triumph.webp',marca: 'TRIUMPH'},
        {url: 'logos/can-am.webp',marca: 'CAN-AM'},
        {url: 'logos/uma.png',marca: 'PULSAR'},
        {url: 'logos/formula.webp',marca: 'FORMULA'},

    ]
    getArrayLogos():logoMarga[]{
        return  [...this.arrayLogoMarca];
      }


      // tam:arrayIMG[]=[
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
    //   //  { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png"},
    //   //  { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png"},
    //   //  { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
    //   //  {url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png"},
    //   //  { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},


    // ];

}
