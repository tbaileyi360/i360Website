import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../../core/services/site-content.service';

@Component({
  selector: 'app-contract-vehicles',
  standalone: true,
  templateUrl: './contract-vehicles.component.html',
  styleUrl: './contract-vehicles.component.scss',
})
export class ContractVehiclesComponent {
  private readonly content = inject(SiteContentService);

  readonly vehicles = this.content.contractVehicles;
  readonly identifiers = this.content.identifiers;
  readonly naics = this.content.naics;
}
