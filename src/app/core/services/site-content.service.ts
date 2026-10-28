import { Injectable } from '@angular/core';
import {
  AI_CAPABILITY_SECTION,
  CAPABILITIES,
  CAPABILITY_CUSTOMERS,
  CAPABILITY_OVERVIEW,
  COMPANY,
  COMPANY_IDENTIFIERS,
  CONTRACT_VEHICLES,
  DIFFERENTIATORS,
  LEADERSHIP,
  NAICS,
  NAV_LINKS,
  PARTNERS,
  SERVICES,
  TESTIMONIALS,
  VALUES,
} from '../data/site.content';
import {
  AiCapabilitySection,
  CapabilityItem,
  CompanyIdentifiers,
  CompanyInfo,
  CompanyValue,
  ContractVehicle,
  Differentiator,
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
  readonly capabilityOverview = CAPABILITY_OVERVIEW;
  readonly capabilities: CapabilityItem[] = CAPABILITIES;
  readonly differentiators: Differentiator[] = DIFFERENTIATORS;
  readonly capabilityCustomers: string[] = CAPABILITY_CUSTOMERS;
  readonly aiCapability: AiCapabilitySection = AI_CAPABILITY_SECTION;
  readonly contractVehicles: ContractVehicle[] = CONTRACT_VEHICLES;
  readonly identifiers: CompanyIdentifiers = COMPANY_IDENTIFIERS;

  getServiceBySlug(slug: string): ServiceItem | undefined {
    return this.services.find((service) => service.slug === slug);
  }
}
