import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../providers/movie.service';
declare var bulmaCarousel: any;

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  movies: any[] = [];
  loading: boolean;
  constructor(private _movieservice: MovieService) {}

  ngOnInit() {
  }
  buscar(termino: string) {
    this.loading = true;
    this._movieservice.getMovie(termino)
        .subscribe( data => {
          console.log(data);
          this.movies = data;
          this.loading = false;
        });
  }
}
