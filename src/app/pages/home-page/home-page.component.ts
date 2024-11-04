import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "../../shared/banner/banner.component";
import { sliderIMG } from '../../interfaces/varios-interfaces';
import { CardMarketingComponent } from "../../shared/card-marketing/card-marketing.component";

import { CardNewsComponent } from "../../shared/card-news/card-news.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, CardMarketingComponent, CardNewsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  {
  slidesIMG: sliderIMG[] =  [
    {
      url: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
      title: 'Honda',
     
    },
    {
      url: 'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_1290-SuperDuke-GT-MY23-orange-90-right_%23SALL_%23AEPI_%23V1.png',
      title: 'KTM',
     
    }

  ]
  
  

}
