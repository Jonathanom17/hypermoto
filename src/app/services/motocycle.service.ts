import { Injectable } from '@angular/core';
import { publicidadIMG, smallIMG, wallpapersIMG } from '../interfaces/varios-interfaces';

@Injectable({
    providedIn: 'root'
})
export class MotocycleService {

    private arrayDatos: smallIMG[] = [
        {
            id: 0,
            marca: 'HONDA',
            modelo: 'CB650R',
            description: '',
            imgMain: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',

        },

        {
            id: 1,
            marca: 'HONDA',
            modelo: 'CB1000r',
            description: '',
            imgMain: 'https://powersports.honda.com/motorcycle/standard/cb1000r/-/media/products/family/cb1000r/trim-hero/gallery/cb1000r-black-edition/2024/black/2023-cb1000r-black-gallery-01.png',

        },
        {
            id: 2,
            marca: 'HONDA',
            modelo: 'Africa twin',
            description: '',
            imgMain: 'https://powersports.honda.com/motorcycle/adventure/africa-twin/2024/-/media/products/family/africa-twin/trim-hero/gallery/africa-twin-adventure-sports-es/2024/pearl-white/2024-africa-twin-adventure-sports-pearl_glare_white-gallery-01.png',

        },
        {
            id: 3,
            marca: 'HONDA',
            modelo: 'CRF450R',
            description: '',
            imgMain: 'https://powersports.honda.com/motorcycle/motocross/crf450r/-/media/products/family/crf450r/trim-hero/gallery/crf450r/2025/red/2025-crf450r-red-gallery-01.png',

        },
        {
            id: 1,
            marca: 'HONDA',
            modelo: 'CB1000r',
            description: '',
            imgMain: 'https://powersports.honda.com/motorcycle/standard/cb1000r/-/media/products/family/cb1000r/trim-hero/gallery/cb1000r-black-edition/2024/black/2023-cb1000r-black-gallery-01.png',

        },
        {
            id: 3,
            marca: 'YAMAHA',
            modelo: 'YZFR1S1L',
            description: '',
            imgMain: 'https://yamahamotorsports.com/media/images/icons/products/25_YZFR1S1L.png',

        },

        {
            id: 3,
            marca: 'YAMAHA',
            modelo: 'MT09SPSS',
            description: '',
            imgMain: 'https://yamahamotorsports.com/media/images/icons/products/25_MT09SPSS.png',

        },
        {
            id: 3,
            marca: 'YAMAHA',
            modelo: 'XTZ7SL',
            description: '',
            imgMain: 'https://yamahamotorsports.com/media/images/icons/products/25_XTZ7SL.png',

        },

        {
            id: 3,
            marca: 'YAMAHA',
            modelo: 'YZFR1S1L',
            description: '',
            imgMain: 'https://yamahamotorsports.com/media/images/icons/products/25_YZFR1S1L.png',

        },






        // {
        //     id: 5,
        //     marca: 'kOVE',
        //     modelo: '450 Rally',
        //     description: 'La KOVE 450 Rally es una motocicleta versátil diseñada para acompañarte tanto en tus desplazamientos diarios como en emocionantes aventuras fuera de la carretera',
        //     imgMain: 'https://www.kovemoto.com/uploadfile/202308/3c1108fd9265.png',
        // },
        // {
        //     id: 2,
        //     marca: '',
        //     modelo: '',
        //     description: '',
        //     imgMain: '',
        // }


    ];
    getArrayIMGSmall(): smallIMG[] {
        return [...this.arrayDatos];
    }


    private arrayWP: wallpapersIMG[] = [
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


    getArrayIMGWP(): wallpapersIMG[] {
        return [...this.arrayWP];
    }

    arrayLogoMarca: publicidadIMG[] = [
        { url: 'logos/honda.webp', marca: 'HONDA' },
        { url: 'logos/kawasaki.webp', marca: 'KAWASAKI' },
        { url: 'logos/ktm.webp', marca: 'KTM' },
        { url: 'logos/suzuki.png', marca: 'SUZUKI' },
        { url: 'logos/yamaha.webp', marca: 'YAMAHA' },
        { url: 'logos/husqvarna.webp', marca: 'HUSQVARNA' },
        { url: 'logos/triumph.webp', marca: 'TRIUMPH' },
        { url: 'logos/can-am.webp', marca: 'CAN-AM' },
        { url: 'logos/uma.png', marca: 'PULSAR' },
        { url: 'logos/formula.webp', marca: 'FORMULA' },

    ]
    getArrayLogos(): publicidadIMG[] {
        return [...this.arrayLogoMarca];
    }


    private arrayPromociones: publicidadIMG[] = [
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png" },
        { url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png" },


    ];
    getArrayPromociones(): publicidadIMG[] {
        return [...this.arrayPromociones];
    }

}
