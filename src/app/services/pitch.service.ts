import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {environment} from '@env/environment';

const routes = {
    quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
};

export interface RandomQuoteContext {
    // The quote's category: 'dev', 'explicit'...
    category: string;
}

@Injectable()
export class PitchService {

    constructor(private httpClient: HttpClient) { }

    getPitchesList(pageNumber: number , pageSize: number) {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        console.log (environment.serverUrl + '/' + 'pitches') ;

        return this.httpClient.get(
            environment.serverUrl + '/' + 'pitches' + '?page[number]=' + pageNumber + '&page[size]=' + pageSize )
            .toPromise()
            .then(res => {
                return res;
            });
    }

}
