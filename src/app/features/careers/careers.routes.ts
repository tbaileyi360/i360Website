import { Routes } from '@angular/router';

export const CAREERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./careers.component').then((m) => m.CareersComponent),
    title: 'Careers — i360technologies',
  },
];
