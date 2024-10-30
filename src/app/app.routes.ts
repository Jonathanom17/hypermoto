import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

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
        component:NewsPageComponent
    }

];
