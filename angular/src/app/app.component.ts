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
  public listStatistiques: Statistique[];

  constructor(){
    this.statistique1 = new Statistique('TEST1','POP1','1','A')
    this.statistique2 = new Statistique('TEST2','POP2','2','B')

    this.listStatistiques = [this.statistique1, this.statistique2];

    setTimeout(() => {
        this.listStatistiques.push(new Statistique('TEST3', 'POP3', '3', 'C'));
    }, 5000);

    this.listStatistiques=[];

    fetch('https://stats.naminilamy.fr/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      data.forEach((stat: { id: string; title: string; value: number; appreciation: string; })=>{
        this.listStatistiques.push(new Statistique('' + stat.id,'' +stat.title,''+stat.value,''+stat.appreciation));

      })
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
  }
}

