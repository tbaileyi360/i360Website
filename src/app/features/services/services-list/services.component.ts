import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../core/services/site-content.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private readonly content = inject(SiteContentService);

  readonly services = this.content.services;
}
