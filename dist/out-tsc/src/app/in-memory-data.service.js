import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let InMemoryDataService = class InMemoryDataService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Miya', url: 'app/assets/images/miya.jpeg' },
            { id: 12, name: 'Brombrom', url: 'assets/images/brombrom.jpeg' },
            { id: 13, name: 'Catty', url: 'assets/images/catty.jpeg' },
            { id: 14, name: 'Elsa', url: 'assets/images/elsa.jpeg' },
            { id: 15, name: 'Granger', url: 'assets/images/granger.jpeg' },
            { id: 16, name: 'Hareth', url: 'assets/images/hareth.jpeg' },
            { id: 17, name: 'Hilda', url: 'assets/images/hilda.jpeg' },
            { id: 18, name: 'layla', url: 'assets/images/layla.jpeg' },
            { id: 19, name: 'lesly', url: 'assets/images/lesly.jpeg' },
            { id: 20, name: 'Parsa', url: 'assets/images/parsa.jpeg' }
        ];
        return { heroes };
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes) {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
};
InMemoryDataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
], InMemoryDataService);
export { InMemoryDataService };
//# sourceMappingURL=in-memory-data.service.js.map