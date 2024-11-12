import { Component, Input, OnInit } from '@angular/core';
import {   wallpapersIMG } from '../../interfaces/varios-interfaces';
import { CardMarketingComponent } from "../../shared/card-marketing/card-marketing.component";
import { MotocycleService } from '../../services/motocycle.service';
import { SliderComponent } from "../../shared/slider/slider.component";

@Component({
  selector: 'shared-news-page',
  standalone: true,
  imports: [ CardMarketingComponent, SliderComponent],
  templateUrl: './detail-news-page.component.html',
  styleUrl: './detail-news-page.component.css'
})
export class DetailNewsPageComponent implements OnInit{
  
  @Input()
  idModelo!:string;
  arrayIMGWallpapers:wallpapersIMG[]=[];
  arrayTemp:wallpapersIMG[]=[];


  constructor(private data: MotocycleService){

  }
    ngOnInit(): void {
      
      this.arrayTemp=this.data.getArrayIMGWP();
      this.arrayTemp.forEach((dato) =>{
        if(dato.modelo===this.idModelo){
          this.arrayIMGWallpapers.push(dato);
        }
       
      });
    
   
  }
 
}

