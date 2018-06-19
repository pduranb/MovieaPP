import { Component, OnInit } from '@angular/core';

declare var bulmaCarousel: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})

export class NavbarComponent implements OnInit {
  elemento: any;
  constructor() {
    document.addEventListener('DOMContentLoaded', this.load, false);
    this.elemento = document.getElementsByClassName('navbar-item');
  }
  load() {
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {

    // Add a click event on each of them
    navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        let target = $el.dataset.target;
        target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        console.log(target);
        console.log($el);

        target.classList.toggle('is-active');
        const navitems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
        if (navitems.length > 0) {
          navitems.forEach(element => {
            element.addEventListener( 'click', () => {
            target.classList.remove('is-active');
            } );
          });
        }

      });
    });
  }
  }
  ngOnInit() {
  }

}
