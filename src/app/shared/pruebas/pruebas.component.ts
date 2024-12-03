import { Component, Input, OnInit } from '@angular/core';
import {  publicidadIMG, smallIMG, wallpapersIMG } from '../../interfaces/varios-interfaces';
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
  arrayLogoMarca:publicidadIMG[]=[];
  constructor(){
   
  }


  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }


  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }


  goToNext(): void {
    const isLastSlide = this.currentIndex === this.arrayLogoMarca.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
   
    return this.arrayLogoMarca[this.currentIndex];
  }
  
 
}
