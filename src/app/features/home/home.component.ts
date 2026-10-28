import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../core/services/site-content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly content = inject(SiteContentService);

  readonly company = this.content.company;
  readonly services = this.content.services;
  readonly partners = this.content.partners;
  readonly testimonials = this.content.testimonials;
}
