import { Component, Input, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() filmName: string = "";
  @Input() filmOnAir: boolean = false;
  @Input() filmAffiche: string = "https://upload.wikimedia.org/wikipedia/fr/6/60/Les_Visiteurs_Logo.png";

  constructor() {

  }

  ngOnInit() {
    
  }

  getOnAir()  {
    return this.filmOnAir;
  }

  onWatchFilm() {
    console.log(`Le film ${this.filmName} à démarré`)
  }

  changeColor() {
    return this.filmOnAir ? "purple" : "red";
  }
}
