import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SiteContentService } from '../../../core/services/site-content.service';

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
  private readonly content = inject(SiteContentService);

  readonly service = toSignal(
    this.route.paramMap.pipe(
      map((params) => this.content.getServiceBySlug(params.get('slug') ?? ''))
    ),
    {
      initialValue: this.content.getServiceBySlug(
        this.route.snapshot.paramMap.get('slug') ?? ''
      ),
    }
  );

  readonly related = this.content.services;

  constructor() {
    effect(() => {
      const item = this.service();
      this.title.setTitle(
        item ? `${item.title} — i360technologies` : 'Service — i360technologies'
      );
    });
  }
}
