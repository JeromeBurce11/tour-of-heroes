import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeroesComponent = class HeroesComponent {
    constructor(router, heroService, messageService) {
        this.router = router;
        this.heroService = heroService;
        this.messageService = messageService;
        this.addingHero = false;
    }
    onSelect(hero) {
        this.selectedHero = hero;
        console.log(hero.id);
        this.messageService.add('HeroService: Selected hero id= ' + hero.id);
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name })
            .subscribe(hero => {
            this.heroes.push(hero);
        });
    }
    delete(hero) {
        if (confirm("Are you sure to delete this hero?")) {
            this.heroes = this.heroes.filter(h => h !== hero);
            this.heroService.deleteHero(hero).subscribe();
            alert("deleted");
        }
    }
    addHero() {
        alert("added");
        this.addingHero = true;
        this.selectedHero = null;
    }
    getHeroes() {
        // this.heroes = this.heroService.getHeroes();
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    ngOnInit() {
        this.getHeroes();
    }
};
HeroesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
    })
], HeroesComponent);
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map