import { Component } from '@angular/core';
import { VALUES } from '../../data/content';

@Component({
  selector: 'app-mission',
  standalone: true,
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
})
export class MissionComponent {
  readonly values = VALUES;
}
