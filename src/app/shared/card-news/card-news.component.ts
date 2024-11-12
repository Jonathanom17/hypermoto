import { Component, Input } from '@angular/core';
import { smallIMG } from '../../interfaces/varios-interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-card-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-news.component.html',
  styleUrl: './card-news.component.css'
})
export class CardNewsComponent {
  @Input()
  arrayCardInfo!:smallIMG[];
  
}
