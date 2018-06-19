import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { DetalleComponent } from './components/pages/detalle/detalle.component';
import { HomeComponent } from './components/pages/home/home.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: BusquedaComponent },
    { path: 'details/:id', component: DetalleComponent },
    { path: '**', pathMatch: 'full'  , redirectTo: 'home'  },
];


export const APP_ROUTING = RouterModule.forRoot(ROUTES);
