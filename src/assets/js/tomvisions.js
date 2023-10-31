//import {Isotope} from 'isotope-layout';
//var requirejs = require('requirejs');
//import {Isotope} from './isotope.pkg.js';
//import {Isotope} from 'isotope-layout';
//import {Toast} from './bootstrap.esm.js';

document.addEventListener('DOMContentLoaded', () => {

  //console.log(Toast);

  const grid = document.querySelector('.grid');

  const iso = new Isotope(grid, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  const filters = document.querySelector('.filters');
  const menuOptions = document.querySelectorAll('.filters ul li');
  Array.from(menuOptions).forEach((menu) => {
    menu.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      filters.querySelector('.is-checked').classList.remove('is-checked')
      const menuSelected = event.currentTarget;
      menuSelected.classList.add('is-checked');

      const filterValue = menuSelected.dataset.filter;
      iso.arrange({filter: filterValue});


    });
  });
});
