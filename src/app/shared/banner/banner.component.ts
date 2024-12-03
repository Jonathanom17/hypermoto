import { Component, Input } from '@angular/core';
import { publicidadIMG } from '../../interfaces/varios-interfaces';

@Component({
  selector: 'shared-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  
  @Input()
  arrayIMG!: publicidadIMG[];
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
    const isLastSlide = this.currentIndex === this.arrayIMG.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  
  getCurrentSlideUrl() {
   
    return this.arrayIMG[this.currentIndex];
  }
}