import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FaceSnap } from '../../components/face-snap/face-snap.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    FaceSnap
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private http = inject(HttpClient);
  protected readonly pokemons = signal<any[]>([]);
}


