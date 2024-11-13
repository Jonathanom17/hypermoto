import { Component, OnInit } from '@angular/core';
import { CardMarketingComponent } from "../../shared/card-marketing/card-marketing.component";

import { CardNewsComponent } from "../../shared/card-news/card-news.component";
import { MotocycleService } from '../../services/motocycle.service';
import {   publicidadIMG, smallIMG, wallpapersIMG } from '../../interfaces/varios-interfaces';
import { BannerComponent } from "../../shared/banner/banner.component";
import { SliderComponent } from "../../shared/slider/slider.component";
import { PruebasComponent } from "../../shared/pruebas/pruebas.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardMarketingComponent, CardNewsComponent, BannerComponent, SliderComponent, PruebasComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
    
  arrayIMGSmall:smallIMG[]=[];
  arrayLogoMarca:publicidadIMG[]=[];
  arrayPromociones:publicidadIMG[]=[];
  sendArrayWP:wallpapersIMG[]=[];

    constructor(private data: MotocycleService){

    }
  ngOnInit(): void {
    this.arrayIMGSmall=this.data.getArrayIMGSmall();
    this.arrayLogoMarca=this.data.getArrayLogos();
    this.sendArrayWP=this.data.getArrayIMGWP();
    this.arrayPromociones=this.data.getArrayPromociones();
  }




  
  

}
