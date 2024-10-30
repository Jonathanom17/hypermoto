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
