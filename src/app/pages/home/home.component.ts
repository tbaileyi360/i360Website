import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PARTNERS, SERVICES, TESTIMONIALS, COMPANY } from '../../data/content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly company = COMPANY;
  readonly services = SERVICES;
  readonly partners = PARTNERS;
  readonly testimonials = TESTIMONIALS;
}
