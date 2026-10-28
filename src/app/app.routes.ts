import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'i360technologies — Innovative Enterprise Solutions',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About — i360technologies',
  },
  {
    path: 'mission',
    loadComponent: () => import('./pages/mission/mission.component').then((m) => m.MissionComponent),
    title: 'Mission, Vision & Values — i360technologies',
  },
  {
    path: 'leadership',
    loadComponent: () =>
      import('./pages/leadership/leadership.component').then((m) => m.LeadershipComponent),
    title: 'Leadership — i360technologies',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services — i360technologies',
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: 'Service — i360technologies',
  },
  {
    path: 'contract-vehicles',
    loadComponent: () =>
      import('./pages/contract-vehicles/contract-vehicles.component').then(
        (m) => m.ContractVehiclesComponent
      ),
    title: 'Contract Vehicles — i360technologies',
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers.component').then((m) => m.CareersComponent),
    title: 'Careers — i360technologies',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — i360technologies',
  },
  { path: '**', redirectTo: '' },
];
