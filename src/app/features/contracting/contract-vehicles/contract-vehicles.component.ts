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

  readonly naics = this.content.naics;
}
