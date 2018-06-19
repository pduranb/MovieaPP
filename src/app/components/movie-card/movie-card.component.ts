import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styles: []
})
export class MovieCardComponent implements OnInit {
  @Input() movies: any [] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalle(movie: any) {
    const movieId: string = movie.id;
    this.router.navigate(['/details', movieId]);
  }
}
