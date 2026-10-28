import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS, COMPANY } from '../../data/content';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly company = COMPANY;
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
