import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../providers/movie.service';
import { ActivatedRoute } from '@angular/router';
declare var bulmaCarousel: any;

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  movies: any[] = [];
  loading: boolean;
  busqueda = '';
  constructor(private _movieservice: MovieService, private router: ActivatedRoute) {
    this.router.params.subscribe( parm => {
      if (parm['text']) {
        this.busqueda = parm['text'];
        this.buscar();
      } else {
        return;
      }
    });
  }

  ngOnInit() {
  }
  buscar() {
    this.loading = true;
    if (this.busqueda.length > 0) {
      this._movieservice.getMovie(this.busqueda)
        .subscribe( data => {
          this.movies = data;
          this.loading = false;
        });
    }
  }
}
