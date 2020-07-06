import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name:  'Miya', url: '../assets/images/miya.jpeg' },
      { id: 12, name: 'Brombrom',url: '../assets/images/brombrom.jpeg' },
      { id: 13, name: 'Catty',url: '../assets/images/catty.jpeg' },
      { id: 14, name: 'Elsa',url: '../assets/images/elsa.jpeg' },
      { id: 15, name: 'Granger' ,url: '../assets/images/granger.jpeg'},
      { id: 16, name: 'Hareth',url: '../assets/images/hareth.jpeg'},
      { id: 17, name: 'Hilda',url: '../assets/images/hilda.jpeg' },
      { id: 18, name: 'layla' ,url: '../assets/images/layla.jpeg'},
      { id: 19, name: 'lesly' ,url: '../assets/images/lesly.jpeg'},
      { id: 20, name: 'Parsa' ,url: '../assets/images/parsa.jpeg'}
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}