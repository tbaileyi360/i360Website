import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

const SERVICE_TITLES = new Map<string, string>([
  ['financial-management', 'Financial Management Solutions'],
  ['rpa', 'Robotic Process Automation (RPA)'],
  ['program-project-management', 'Program and Project Management'],
  ['acquisition-management', 'Acquisition Management Solutions'],
  ['business-intelligence', 'Business Intelligence and Analytics'],
  ['application-development', 'Application Development'],
  ['operations-maintenance', 'Operations and Maintenance'],
]);

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);

  readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('slug') ?? '',
  });

  constructor() {
    effect(() => {
      const serviceTitle = SERVICE_TITLES.get(this.slug());
      this.title.setTitle(
        serviceTitle ? `${serviceTitle} — i360technologies` : 'Service — i360technologies'
      );
    });
  }
}
