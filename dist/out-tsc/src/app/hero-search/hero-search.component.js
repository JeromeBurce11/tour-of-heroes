import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
let HeroSearchComponent = class HeroSearchComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.searchTerms = new Subject();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300), 
        // ignore new term if same as previous term
        distinctUntilChanged(), 
        // switch to new search observable each time the term changes
        switchMap((term) => this.heroService.searchHeroes(term)));
    }
};
HeroSearchComponent = tslib_1.__decorate([
    Component({
        selector: 'app-hero-search',
        templateUrl: './hero-search.component.html',
        styleUrls: ['./hero-search.component.css']
    })
], HeroSearchComponent);
export { HeroSearchComponent };
//# sourceMappingURL=hero-search.component.js.map