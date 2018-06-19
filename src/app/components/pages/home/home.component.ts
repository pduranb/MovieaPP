import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../providers/movie.service';
declare var bulmaCarousel: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  moviesEstreno: any [] = [] ;
  moviesPopular: any [] = [] ;
  moviesKids: any [] = [] ;

  constructor(private _movie: MovieService) {

    this._movie.getEstrenos().subscribe( data => {
      this.moviesEstreno = data;
    });
    this._movie.getPopulares().subscribe( data => {
      this.moviesPopular = data;
    });
    this._movie.getKidsMovies().subscribe( data => {
      this.moviesKids = data;
    });
  }

  ngOnInit() {
    const datePicker = new bulmaCarousel.attach();
  }
}
