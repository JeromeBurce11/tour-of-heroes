import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroes: Hero[];
  @Input() mode: string = "landscape";
  addingHero = false;
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService,
    private messageService: MessageService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroService: Selected hero id= ' + hero.id);
  }

  delete(hero: Hero): void {
    if (confirm("Are you sure to delete this hero?")) {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
      alert("deleted")
    }
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addHero(data) {
    this.heroes.push(data)
  }

  ngOnInit() {
    this.getHeroes();
  }

}
