import { Component } from '@angular/core';
import { NAICS } from '../../data/content';

@Component({
  selector: 'app-contract-vehicles',
  standalone: true,
  templateUrl: './contract-vehicles.component.html',
  styleUrl: './contract-vehicles.component.scss',
})
export class ContractVehiclesComponent {
  readonly naics = NAICS;
}
