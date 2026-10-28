import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/content';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = SERVICES;
}
