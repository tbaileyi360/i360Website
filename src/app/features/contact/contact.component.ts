import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../core/services/site-content.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly content = inject(SiteContentService);

  readonly company = this.content.company;

  readonly mailToHref = this.buildMailToHref();

  private buildMailToHref(): string {
    const subject = encodeURIComponent('Website inquiry');
    const body = encodeURIComponent(
      [
        'Name: ',
        'Email: ',
        'Organization: ',
        '',
        'Message:',
        '',
      ].join('\n')
    );

    return `mailto:${this.company.email}?subject=${subject}&body=${body}`;
  }
}
