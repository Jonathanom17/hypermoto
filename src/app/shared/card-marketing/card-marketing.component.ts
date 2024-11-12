
import { Component, Input } from '@angular/core';
import {  logoMarga } from '../../interfaces/varios-interfaces';

@Component({
  selector: 'shared-cards-marketing',
  standalone: true,
  imports: [],
  templateUrl: './card-marketing.component.html',
  styleUrl: './card-marketing.component.css'
})
export class CardMarketingComponent {
  @Input()
  arrayIMG!:logoMarga[];


}
