import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cardInfor, SliderIMG } from '../../interfaces/varios-interfaces';

@Component({
  selector: 'shared-news-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detail-news-page.component.html',
  styleUrl: './detail-news-page.component.css'
})
export class DetailNewsPageComponent {
  slides: SliderIMG[] =  [
    {
      url: 'image/honda1.avif',
      title: 'CB650R',
      description: 'This is the first slide',
    },
    {
      url: 'image/honda2.avif',
      title: 'CB650R',
      description: 'This is the second slide',
    },
    {
      url: 'image/honda3.avif',
      title: 'Control de Masa Moscular',
      description: 'This is the third slide',
    },
    {
      url: 'image/honda4.avif',
      title: 'Clase Funcional',
      description: 'This is the fourth slide',
    },
    {
      url: 'image/honda5.avif',
      title: 'Equipo de Ültima Generación',
      description: 'This is the fifth slide',
    },
  ];

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

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return this.slides[this.currentIndex];
  }
  



}

