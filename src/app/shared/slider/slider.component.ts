import { Component, Input } from '@angular/core';
import {  wallpapersIMG } from '../../interfaces/varios-interfaces';

@Component({
  selector: 'shared-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  
  @Input()
  arrayWP!: wallpapersIMG[];
  // _datos!:arrayIMG;
  constructor(){
   
  }


  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    // this.slides.flatMap(datos=>{
    //   this.arrayWP=datos.arrayWP;
    //   })
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

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide

      ? this.arrayWP.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.arrayWP.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
   
    return this.arrayWP[this.currentIndex];
  }
  
 
}
