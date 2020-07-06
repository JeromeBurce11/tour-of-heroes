import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
let HeroService = class HeroService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        this.messageService.add(`HeroService: ${message}`);
    }
    // getHero(id: number): Observable<Hero> {
    //   this.messageService.add('HeroService:fetch hero id=${id}');
    //   return of(HEROES.find(hero => hero.id === id));
    // }
    getHero(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url).pipe(tap(_ => this.log(`fetched hero id=${id}`)), catchError(this.handleError(`getHero id=${id}`)));
    }
    /** GET heroes from the server */
    // getHeroes(): Observable<Hero[]> {
    //   return this.http.get<Hero[]>(this.heroesUrl)
    // }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
    /** DELETE: delete the hero from the server */
    deleteHero(hero) {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(tap(_ => this.log(`deleted hero id=${id}`)), catchError(this.handleError('deleteHero')));
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get(`${this.heroesUrl}/?name=${term}`).pipe(tap(x => x.length ?
            this.log(`found heroes matching "${term}"`) :
            this.log(`no heroes matching "${term}"`)), catchError(this.handleError('searchHeroes', [])));
    }
    updateHero(hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(tap(_ => this.log(`updated hero id=${hero.id}`)), catchError(this.handleError('updateHero')));
    }
    addHero(hero) {
        return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(tap((newHero) => this.log(`added hero w/ id=${newHero.id}`)), catchError(this.handleError('addHero')));
    }
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .pipe(tap(_ => this.log('fetched heroes')), catchError(this.handleError('getHeroes', [])));
    }
};
HeroService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], HeroService);
export { HeroService };
//# sourceMappingURL=hero.service.js.map