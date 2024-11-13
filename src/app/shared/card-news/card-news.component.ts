
import { Component, Input, OnInit, } from '@angular/core';
import { smallIMG } from '../../interfaces/varios-interfaces';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'shared-card-news',
  standalone: true,
  imports: [RouterLink, CarouselModule],
  templateUrl: './card-news.component.html',
  styleUrl: './card-news.component.css'
})
export class CardNewsComponent implements OnInit {
  
 
  @Input()
  slides!:smallIMG[];
  arraySliderUno:smallIMG[]=[];
  arraySliderDos:smallIMG[]=[];
  myInterval = 3000;
  itemsPerSlide:number=4;
    
  ngOnInit(): void {
    if (window.screen.width< 600) { // 768px portrait
      this.itemsPerSlide = 1;
    }else if(window.screen.width< 800) {
      this.itemsPerSlide = 3;
    }else{
      this.itemsPerSlide = 4;
    }
   
    this.llenarArraySider1();
    this.llenarArraySider2();
  }
 
    llenarArraySider1(){
      this.slides.forEach( item=>{
          if(item.marca=="HONDA"){
            
            this.arraySliderUno.push(item)
          }
      })
    }

    getArraySliderUNo(): smallIMG[]{
      return this.arraySliderUno;
    }
    llenarArraySider2(){
      this.slides.forEach( item=>{
          if(item.marca=="YAMAHA"){
            this.arraySliderDos.push(item)
          }
      })
    }

    getArraySliderDos(): smallIMG[]{
      return this.arraySliderDos;
    }

  chancheItemsPerSlide( ){
    this.ngOnInit()
  }


 
}

