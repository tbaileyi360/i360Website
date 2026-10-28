import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { getServiceBySlug, SERVICES } from '../../data/content';

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

  readonly service = toSignal(
    this.route.paramMap.pipe(map((params) => getServiceBySlug(params.get('slug') ?? ''))),
    { initialValue: getServiceBySlug(this.route.snapshot.paramMap.get('slug') ?? '') }
  );

  readonly related = SERVICES;

  constructor() {
    effect(() => {
      const item = this.service();
      this.title.setTitle(
        item ? `${item.title} — i360technologies` : 'Service — i360technologies'
      );
    });
  }
}
