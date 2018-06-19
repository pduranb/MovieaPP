import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../providers/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {
  movie: any = {};
  getMovie(id: string) {
    this._ms.getDetailsMovie(id).subscribe( (data: any) => {
      this.movie = data;
      console.log(this.movie);
    });
  }

  constructor(private router: ActivatedRoute, private _ms: MovieService , private location: Location) {
    this.router.params.subscribe( params => {
      this.getMovie(params['id']);
    });
  }

  ngOnInit() {
  }
  getBack() {

    this.location.back();
  }
}
