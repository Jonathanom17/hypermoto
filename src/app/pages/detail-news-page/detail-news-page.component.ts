import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { arrayIMG } from '../../interfaces/varios-interfaces';
import { CardMarketingComponent } from "../../shared/card-marketing/card-marketing.component";
import { MotocycleService } from '../../services/motocycle.service';
import { SliderComponent } from "../../shared/slider/slider.component";

@Component({
  selector: 'shared-news-page',
  standalone: true,
  imports: [RouterOutlet, CardMarketingComponent, SliderComponent],
  templateUrl: './detail-news-page.component.html',
  styleUrl: './detail-news-page.component.css'
})
export class DetailNewsPageComponent implements OnInit{
  
  @Input({transform:numberAttribute})
  id!:number;
  arrayDatos:arrayIMG[]=[];
  arrayTemp:arrayIMG[]=[];


  constructor(private data: MotocycleService){

  }
    ngOnInit(): void {
      
      this.arrayTemp=this.data.getArrayMotocycle();
      this.arrayTemp.forEach((dato) =>{
        if(dato.id===this.id){
          this.arrayDatos.push(dato);
        }
       
      });
    
   
  }
 
}

