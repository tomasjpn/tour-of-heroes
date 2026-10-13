import { Component } from "@angular/core";
import { Hero } from "../heroes";
import { HEROES } from "../mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.scss",
})
export class HeroesComponent {
  hero: Hero = { id: 1, name: "Windstorm" };
  heroes = HEROES;
}
