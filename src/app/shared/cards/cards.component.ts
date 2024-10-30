import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { sliderIMG } from '../../interfaces/varios-interfaces';

@Component({
  selector: 'shared-cards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

    tam:sliderIMG[]=[
       {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
       {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
       { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
       {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
       {url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png"},
       { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
       {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
       {url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png"},
       { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},
       {url: "https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-XR150L-768x248.png"},
       {url: "https://mundohonda.cr/wp-content/uploads/2024/08/SLIDE-CB190R-768x248.png"},
       { url:"https://mundohonda.cr/wp-content/uploads/2024/09/SLIDE-TRANSALP-768x248.png"},


    ];


}
