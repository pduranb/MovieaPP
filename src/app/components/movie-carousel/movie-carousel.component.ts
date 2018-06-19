import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
declare var bulmaCarousel: any;

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styles: []
})
export class MovieCarouselComponent implements OnInit {
  @Input() movies: any [] = [];
  @Input() title: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  verDetalle(movie: any) {
    const movieId: string = movie.id;
    this.router.navigate(['/details', movieId]);
  }

}
