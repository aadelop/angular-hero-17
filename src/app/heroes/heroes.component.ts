import { Component, OnInit} from '@angular/core';
import {NgFor ,CommonModule} from '@angular/common';
import {  Hero } from "../hero";
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [CommonModule,FormsModule, NgFor,HeroDetailComponent]
})


export class HeroesComponent {
  
  heroes: Hero [] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService,  private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
}
