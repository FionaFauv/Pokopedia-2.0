import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface CardData {
  label: string;
  desc: string;
  color: string;
  stroke: string;
  icon: string;
}

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrl: './section-card.component.css',
})
export class SectionCardComponent {
  constructor(private sanitizer: DomSanitizer) {}

  cards: CardData[] = [
    {
      label: 'Pokemon',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.',
      color: '#d4f5e0',
      stroke: '#6ec48a',
      icon: this.svg('<path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 1c1 2 2 4.5 2 8 0 5.5-4.78 10-10 11Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>', '#6ec48a'),
    },
    {
      label: 'Ecosystemes',
      desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: '#d4eaf5',
      stroke: '#6aaed4',
      icon: this.svg('<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>', '#6aaed4'),
    },
    {
      label: 'Sanctuaires',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      color: '#ecdff5',
      stroke: '#a87cd4',
      icon: this.svg('<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>', '#a87cd4'),
    },
    {
      label: 'Ressources',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      color: '#f5ecd4',
      stroke: '#d4a86a',
      icon: this.svg('<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>', '#d4a86a'),
    },
    {
      label: 'Metamorph',
      desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia.',
      color: '#f5d4e8',
      stroke: '#d46aa8',
      icon: this.svg('<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>', '#d46aa8'),
    },
    {
      label: 'Guides',
      desc: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt labore.',
      color: '#f5f5d4',
      stroke: '#b4b46a',
      icon: this.svg('<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>', '#b4b46a'),
    },
  ];

  safeIcon(icon: string) {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  private svg(paths: string, color: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }
}