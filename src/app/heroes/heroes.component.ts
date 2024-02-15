import { Component, OnInit} from '@angular/core';
import {NgFor ,CommonModule} from '@angular/common';
import {  Hero } from "../hero";
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [CommonModule,FormsModule, NgFor]
})
export class HeroesComponent {
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes= HEROES;
}
