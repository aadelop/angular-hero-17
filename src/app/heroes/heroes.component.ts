import { Component, OnInit} from '@angular/core';
import {NgFor ,CommonModule} from '@angular/common';
import {  Hero } from "../hero";
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [CommonModule,FormsModule, NgFor,HeroDetailComponent, RouterModule]
})


export class HeroesComponent {
  
  heroes: Hero [] = [];

  constructor(private heroService: HeroService,  private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
}
