import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const NAV_LINKS: NavLink[] = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Capabilities', path: '/capabilities' },
      { label: 'Mission, Vision & Values', path: '/mission' },
      { label: 'Leadership', path: '/leadership' }
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'All Services', path: '/services' },
      { label: 'Financial Management', path: '/services/financial-management' },
      { label: 'Robotic Process Automation', path: '/services/rpa' },
      { label: 'Program & Project Management', path: '/services/program-project-management' },
      { label: 'Acquisition Management', path: '/services/acquisition-management' },
      { label: 'Business Intelligence', path: '/services/business-intelligence' },
      { label: 'Application Development', path: '/services/application-development' },
      { label: 'Operations & Maintenance', path: '/services/operations-maintenance' }
    ]
  },
  { label: 'Contract Vehicles', path: '/contract-vehicles' },
  { label: 'Careers', path: '/careers' }
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly links = NAV_LINKS;
  menuOpen = false;
  openDropdown: string | null = null;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.openDropdown = null;
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.openDropdown = null;
  }

  toggleDropdown(label: string, event: Event): void {
    event.preventDefault();
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  onNavEnter(label: string): void {
    if (window.matchMedia('(min-width: 960px)').matches) {
      this.openDropdown = label;
    }
  }

  onNavLeave(): void {
    if (window.matchMedia('(min-width: 960px)').matches) {
      this.openDropdown = null;
    }
  }
}
