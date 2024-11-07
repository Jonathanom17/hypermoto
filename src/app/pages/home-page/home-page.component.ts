import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "../../shared/banner/banner.component";
import { CardMarketingComponent } from "../../shared/card-marketing/card-marketing.component";

import { CardNewsComponent } from "../../shared/card-news/card-news.component";
import { SliderComponent } from "../../shared/slider/slider.component";
import { MotocycleService } from '../../services/motocycle.service';
import { arrayIMG, logoMarga } from '../../interfaces/varios-interfaces';
import { PruebasComponent } from "../../shared/pruebas/pruebas.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, CardMarketingComponent, CardNewsComponent, SliderComponent, PruebasComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
    
  arrayDatos:arrayIMG[]=[];
  arrayLogoMarca:logoMarga[]=[];

    constructor(private data: MotocycleService){

    }
  ngOnInit(): void {
    this.arrayDatos=this.data.getArrayMotocycle();
    this.arrayLogoMarca=this.data.getArrayLogos();
  }




  
  

}
