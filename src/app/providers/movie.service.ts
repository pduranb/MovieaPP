import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  api_key = '67a8195726842a9a26b58d0e6fb4afde';


  constructor(private http: HttpClient, private pipedate: DatePipe) { }

  getQuery(params: string ) {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&page=1&${params}`;
    return this.http.get(url) ;
  }
  getQuerySearch(params: string ) {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${params}`;
    return this.http.get(url) ;
  }
  getQueryDetails(params: string ) {

    const url = `https://api.themoviedb.org/3/movie/${params}?api_key=${this.api_key}`;
    console.log(url);
    return this.http.get(url) ;
  }

  getEstrenos() {

    const hoy =  new Date() ;
    const mesAnterior = new Date() ;
    mesAnterior.setDate(hoy.getDate() - 10);
    const hoyFecha = this.pipedate.transform(hoy, 'yyyy-MM-dd');
    const mesAFecha = this.pipedate.transform(mesAnterior, 'yyyy-MM-dd');
    const parametros = `sort_by=primary_release_date.desc&primary_release_date.gte=${mesAFecha}&primary_release_date.lte=${hoyFecha}`;
    return this.getQuery(parametros)
            .pipe(map( data => data['results'] ) );
  }

  getPopulares() {
    const parametros = `sort_by=popularity.desc`;
    return this.getQuery(parametros)
            .pipe(map( data => data['results'] ) );
  }
  getKidsMovies() {
    const parametros = `certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    return this.getQuery(parametros)
            .pipe(map( data => data['results'] ) );
  }
  getMovie(params: string) {
    return this.getQuerySearch(params)
            .pipe(map( data => data['results'] ) );
  }
  getDetailsMovie(id: string ) {
    return this.getQueryDetails(id)
        .pipe(map( data =>
          data
        ) );
  }
}
