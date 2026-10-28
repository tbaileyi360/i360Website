import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/company/company.routes').then((m) => m.COMPANY_ROUTES),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./features/services/services.routes').then((m) => m.SERVICES_ROUTES),
      },
      {
        path: 'contract-vehicles',
        loadChildren: () =>
          import('./features/contracting/contracting.routes').then((m) => m.CONTRACTING_ROUTES),
      },
      {
        path: 'careers',
        loadChildren: () =>
          import('./features/careers/careers.routes').then((m) => m.CAREERS_ROUTES),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./features/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
      },
      {
        path: '',
        loadChildren: () => import('./features/legal/legal.routes').then((m) => m.LEGAL_ROUTES),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
