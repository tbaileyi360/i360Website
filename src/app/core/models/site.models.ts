export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string[];
  highlights?: { title: string; description: string }[];
}

export interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  fax: string;
  email: string;
  securityEmail: string;
  hq: {
    label: string;
    lines: string[];
  };
  branch: {
    label: string;
    lines: string[];
  };
}

export interface Partner {
  name: string;
  detail: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export interface Leader {
  name: string;
  title: string;
  bio: string;
}

export interface CompanyValue {
  name: string;
  description: string;
}

export interface CapabilityItem {
  title: string;
  proof: string;
  relatedService?: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface ContractVehicle {
  agency: string;
  title: string;
  contractId?: string;
  summary: string;
  details?: string[];
  contactEmail?: string;
}

export interface CompanyIdentifiers {
  legalName: string;
  sizeStatus: string;
  uei: string;
  cage: string;
  founded: string;
  primaryNaics: string;
}
