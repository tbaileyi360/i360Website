import { Injectable } from '@angular/core';
import {
  COMPANY,
  LEADERSHIP,
  NAICS,
  NAV_LINKS,
  PARTNERS,
  SERVICES,
  TESTIMONIALS,
  VALUES,
} from '../data/site.content';
import {
  CompanyInfo,
  CompanyValue,
  Leader,
  NavLink,
  Partner,
  ServiceItem,
  Testimonial,
} from '../models/site.models';

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  readonly company: CompanyInfo = COMPANY;
  readonly navLinks: NavLink[] = NAV_LINKS;
  readonly services: ServiceItem[] = SERVICES;
  readonly partners: Partner[] = PARTNERS;
  readonly testimonials: Testimonial[] = TESTIMONIALS;
  readonly leadership: Leader[] = LEADERSHIP;
  readonly values: CompanyValue[] = VALUES;
  readonly naics: string[] = NAICS;

  getServiceBySlug(slug: string): ServiceItem | undefined {
    return this.services.find((service) => service.slug === slug);
  }
}
