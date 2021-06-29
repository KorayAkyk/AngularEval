import {Component, Input, OnInit} from '@angular/core';
import {Statistique} from '../models/statistique';
import {HostListener } from "@angular/core";

@Component({
    selector: 'app-statistique',
    templateUrl: './statistique.component.html',
    styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

    @Input()
    public statistique!: Statistique;

    identifiant = 'test';
    titre = 'test';
    valeur = 'test';
    appreciation = 'test';

    constructor() {
    }

    ngOnInit(): void {
    }


    @HostListener('unloaded')
    ngOnDestroy(): void {
      console.log("ON EST LA");
    }
 
    delete(): void {
        console.log(this.statistique.identifiant);
        fetch('https://stats.naminilamy.fr/' + this.statistique.identifiant,
            {method: 'DELETE'}).then(resp => {
            if (resp.status === 200) {
                this.ngOnDestroy();
                console.log("API DESTROY");
            }
        });
    }
}