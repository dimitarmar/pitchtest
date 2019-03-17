import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import {PitchService} from '@app/services/pitch.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    pitchesList: any;
    isLoading: boolean;
    numberItems: number;

    constructor(private pitchService: PitchService) { }

    ngOnInit() {
        this.isLoading = true;
        this.pitchService.getPitchesList(1, 50)
            .then( (res: any) => {
                this.isLoading = false;
                this.pitchesList = res.data;
                this.numberItems = res.meta.total_items;
            });
    }

    loadLazy(e: any) {
        this.isLoading = true;
        const pageNumber: number = (e.first / 50) + 1;
        const rowsNumber: number = e.rows;

        this.pitchService.getPitchesList(pageNumber + 1, rowsNumber)
            .then((res: any ) => {
                this.pitchesList = [];
                if (res.data) {
                    this.pitchesList = res.data;
                    this.numberItems = res.meta.total_items;
                }
                this.isLoading = false;
            });
    }
}
