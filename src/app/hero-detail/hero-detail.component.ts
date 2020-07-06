import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.getHero(paramMap);
    })
   
  }
  save(): void {
   const subscription =  this.heroService.updateHero(this.hero)
      .subscribe({
        next:() => this.goBack(),
        error:()=> console.log("faile to save"),
        complete:()=> console.log("success!")
      });
      subscription.unsubscribe();
      
  }
  getHero(paramMap:ParamMap): void {
    const id = +paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero
      });
  }
  goBack(): void {
    this.location.back();
  }
}
