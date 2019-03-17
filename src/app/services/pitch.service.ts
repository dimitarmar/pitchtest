import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable()
export class PitchService {

    constructor(private httpClient: HttpClient) { }

    getPitchesList(pageNumber: number , pageSize: number) {

        return this.httpClient.get(
            environment.serverUrl + '/' + 'pitches' + '?page[number]=' + pageNumber + '&page[size]=' + pageSize )
            .toPromise()
            .then(res => {
                return res;
            });
    }

}
