import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../../core/services/site-content.service';

@Component({
  selector: 'app-leadership',
  standalone: true,
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss',
})
export class LeadershipComponent {
  private readonly content = inject(SiteContentService);

  readonly leaders = this.content.leadership;
}
