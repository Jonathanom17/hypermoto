
import { Component, Input } from '@angular/core';
import {  publicidadIMG } from '../../interfaces/varios-interfaces';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'shared-cards-marketing',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './card-marketing.component.html',
  styleUrl: './card-marketing.component.css'
})
export class CardMarketingComponent {
  @Input()
  arrayIMG!:publicidadIMG[];
  @Input()
  itemsPerSlide:number=0;

  constructor(){
    this.ocultarbotones()
  }
  ocultarbotones(){
    const element= document.getElementById('#carousel');
    console.log(element)

  }

}
