import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { DetalleComponent } from './components/pages/detalle/detalle.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { MovieService } from './providers/movie.service';
import { APP_ROUTING } from './app.routes';
import { NoimagesPipe } from './pipes/noimages.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { DatePipe } from '@angular/common';
import { LoadingComponent } from './components/shared/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaComponent,
    DetalleComponent,
    MovieCardComponent,
    MovieCarouselComponent,
    NoimagesPipe,
    DomseguroPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING
  ],
  providers: [MovieService, DatePipe, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
