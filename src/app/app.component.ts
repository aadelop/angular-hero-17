import { Component } from '@angular/core';
import { HeroesComponent  } from "./heroes/heroes.component";
import { MessagesComponent } from './messages/messages.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent,MessagesComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Web of Heroes';
}
