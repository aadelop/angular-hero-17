import { Routes } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'heroes',
        title: 'Heroes list',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        title: 'Heroes dashboard',
        component: DashboardComponent
    }
   
];
