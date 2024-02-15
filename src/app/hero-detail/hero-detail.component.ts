import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import {  Hero } from "../hero";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?:Hero;
}