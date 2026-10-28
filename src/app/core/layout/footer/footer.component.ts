import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly content = inject(SiteContentService);

  readonly company = this.content.company;
  readonly year = new Date().getFullYear();
}
