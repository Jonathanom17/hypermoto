import { Component, Input, OnInit } from '@angular/core';
import {  smallIMG, wallpapersIMG } from '../../interfaces/varios-interfaces';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'shared-pruebas',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.css'
})
export class PruebasComponent  {
  @Input()
  slides!:smallIMG[];
  myInterval = 0;
 
  itemsPerSlide = 4;
  
  
 
}
