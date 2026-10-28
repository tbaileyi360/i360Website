import { Routes } from '@angular/router';

export const CONTRACTING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contract-vehicles/contract-vehicles.component').then(
        (m) => m.ContractVehiclesComponent
      ),
    title: 'Contract Vehicles — i360technologies',
  },
];
