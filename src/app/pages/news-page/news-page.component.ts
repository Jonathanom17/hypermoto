import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cardInfor } from '../../interfaces/varios-interfaces';

@Component({
  selector: 'shared-news-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
  cardInformation: cardInfor[] = [
    {
      url: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
      name: 'CB650R'
    },
    {
      url: 'https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr/trims/trim-main/cbr1000rr-abs/2025/2025-cbr1000rr-abs-pearl_white-1505x923.png',
      name: 'CBR1000RR ABS'
    },
    {
      url: 'https://www.kovemoto.com/uploadfile/202308/3c1108fd9265.png',
      name: '450RALLY'
    },
    {
      url: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
      name: 'CB650R'
    },
    {
      url: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
      name: 'CB650R'
    },
    {
      url: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
      name: 'CB650R'
    },
    {
      url: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
      name: 'CB650R'
    },
    {
      url: 'https://powersports.honda.com/motorcycle/standard/-/media/products/family/cb650r/trims/trim-main/cb650r/2024/2024-cb650r-pearl_smoky_gray-1505x923.png',
      name: 'CB650R'
    }
  ]
}
