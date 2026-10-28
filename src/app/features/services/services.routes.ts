import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./services-list/services.component').then((m) => m.ServicesComponent),
    title: 'Services — i360technologies',
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: 'Service — i360technologies',
  },
];
