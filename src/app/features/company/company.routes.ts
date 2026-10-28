import { Routes } from '@angular/router';

export const COMPANY_ROUTES: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
    title: 'About — i360technologies',
  },
  {
    path: 'mission',
    loadComponent: () => import('./mission/mission.component').then((m) => m.MissionComponent),
    title: 'Mission, Vision & Values — i360technologies',
  },
  {
    path: 'leadership',
    loadComponent: () =>
      import('./leadership/leadership.component').then((m) => m.LeadershipComponent),
    title: 'Leadership — i360technologies',
  },
];
