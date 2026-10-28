import { Component } from '@angular/core';
import { LEADERSHIP } from '../../data/content';

@Component({
  selector: 'app-leadership',
  standalone: true,
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss',
})
export class LeadershipComponent {
  readonly leaders = LEADERSHIP;
}
