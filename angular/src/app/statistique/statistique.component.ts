import {Component, Input, OnInit} from '@angular/core';
import {Statistique} from '../models/statistique';

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

}