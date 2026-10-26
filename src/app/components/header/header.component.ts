import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems = [
    { label: 'Pokedex', route: '/pokedex' },
    { label: 'Recettes', route: '/recettes' },
    { label: 'Habitadex', route: '/habitadex' },
    { label: 'Spécialités', route: '/specialites' },
    { label: 'Objets', route: '/objets' },
    { label: 'Guides', route: '/guides' },
  ];
}