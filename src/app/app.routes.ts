import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailNewsPageComponent } from './pages/detail-news-page/detail-news-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent
    },
    {
        path: 'home',
        title: 'Inicio',
        component: HomePageComponent
    },
    {
        path:'news',
        title:'Detailss',
        component:DetailNewsPageComponent
    }

];
