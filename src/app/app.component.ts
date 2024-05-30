import {Component, ViewEncapsulation, ElementRef, AfterViewInit, Renderer2, OnDestroy, OnInit} from '@angular/core';
import { ImageService, } from './image.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';
import mixitup from 'mixitup';
import {CookieService} from "./cookie.service";
import {M as Materialize} from '@materializecss/materialize'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules../../node_modules/bootstrap/dist/css/bootstrap.min.css",
    './app.component.scss',
    "./css/bootstrap-gallery.css",
    "./css/styles.css",
  ],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  homeImage;
  title = 'TomVisions\'s Photography';
  code:string;

  constructor( private _imageService:ImageService, private _renderer2: Renderer2, private _router : Router, private _cookieService: CookieService ) {
    this.homeImage = this._imageService.loadImage983x409('waterfall-sm2.jpg');
  }

  ngOnInit() {
    this.code = this._cookieService.getCookie('gallery_code');
  }

  ngAfterViewInit() : void  {
    document.addEventListener('DOMContentLoaded', () => {
        const elems = document.querySelectorAll('.sidenav');
        const instance = Materialize.Sidenav.init(elems,{});
    });

    const clickedOn = (event) => {
      const filters = document.querySelectorAll('.category-section')
      Array.from(filters).forEach((element)=> {
        element.classList.remove('is-checked')
      })
      event.target.classList.add('is-checked')

      const filter = event.target.dataset.filter;
      const url = filter.replace('.', '/#').replace('*', '/');

      if (this._router.url !== "/") {
        this._router.navigateByUrl(url);
      }
    }

    const filters = document.querySelectorAll('.category-section')

    Array.from(filters).forEach((element)=> {
      element.addEventListener("click", clickedOn);
    })
  }

  onClick(event) {
    console.log(event);
  }
 ngOnDestroy() {  }
}
//export const minitupInstance = new MixitupService();
