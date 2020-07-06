import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let HeroDetailComponent = class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    ngOnInit() {
        this.getHero();
    }
    save() {
        this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
    }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }
    goBack() {
        this.location.back();
    }
};
tslib_1.__decorate([
    Input()
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-hero-detail',
        templateUrl: './hero-detail.component.html',
        styleUrls: ['./hero-detail.component.css']
    })
], HeroDetailComponent);
export { HeroDetailComponent };
//# sourceMappingURL=hero-detail.component.js.map