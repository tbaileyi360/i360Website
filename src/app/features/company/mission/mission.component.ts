import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../../core/services/site-content.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
})
export class MissionComponent {
  private readonly content = inject(SiteContentService);

  readonly values = this.content.values;
}
