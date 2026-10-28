import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../core/services/site-content.service';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './capabilities.component.html',
})
export class CapabilitiesComponent {
  private readonly content = inject(SiteContentService);

  readonly overview = this.content.capabilityOverview;
  readonly capabilities = this.content.capabilities;
  readonly ai = this.content.aiCapability;
  readonly differentiators = this.content.differentiators;
  readonly customers = this.content.capabilityCustomers;
}
