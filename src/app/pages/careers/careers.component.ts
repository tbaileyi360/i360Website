import { Component } from '@angular/core';
import { COMPANY } from '../../data/content';

@Component({
  selector: 'app-careers',
  standalone: true,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent {
  readonly company = COMPANY;
  readonly benefits = [
    'Medical, Vision, Dental',
    'Life, Long/Short Term Disability, AD&D',
    '401(k)',
    'PTO — 15 days to start, 20 days beginning year 4',
    '11 major holidays',
    'Paid maternity leave',
    'Employee referral bonus program',
  ];
}
