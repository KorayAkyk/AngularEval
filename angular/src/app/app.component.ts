import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'angular';
  public statistique1: Statistique;
  public statistique2: Statistique;

  constructor(){
    this.statistique1 = new Statistique('“fa1f5f40','Popa','60293','DEFET')
    this.statistique2 = new Statistique('“fa68546','Pop1','60','DE')
  }

  
}

