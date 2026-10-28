import { Routes } from '@angular/router';

export const LEGAL_ROUTES: Routes = [
  {
    path: 'sms-privacy',
    loadComponent: () =>
      import('./sms-privacy/sms-privacy.component').then((m) => m.SmsPrivacyComponent),
    title: 'SMS Privacy Policy — i360technologies',
  },
  {
    path: 'sms-terms',
    loadComponent: () =>
      import('./sms-terms/sms-terms.component').then((m) => m.SmsTermsComponent),
    title: 'SMS Terms & Conditions — i360technologies',
  },
];
