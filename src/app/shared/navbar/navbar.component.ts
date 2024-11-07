import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/varios-interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  rutasMenu: MenuItem[]=[
    {componente:'/home',title:'Inicio'},
    {componente:'home',title:'Planes'}
   ];
}
