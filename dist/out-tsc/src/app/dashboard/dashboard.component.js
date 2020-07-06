import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroes = [];
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail(hero) {
        const link = ['/detail', hero.id];
        this.router.navigate(link);
    }
    ngOnInit() {
        this.getHeroes();
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map