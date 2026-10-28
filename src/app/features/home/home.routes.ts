import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then((m) => m.HomeComponent),
    title: 'i360technologies — Innovative Enterprise Solutions',
  },
];
