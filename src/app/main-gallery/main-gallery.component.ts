import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainGalleryService } from './main-gallery.service';
import { ImageService } from '../image.service';
import {Observable, Subject, takeUntil} from 'rxjs';
import { GalleryPagination } from './main-gallery.type';
import { Gallery, Image } from './main-gallery.type';
import mixitup, {mixer} from 'mixitup';

export let mixitupIstance;
@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class MainGalleryComponent implements OnInit, AfterViewInit, OnDestroy{
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  galleries$: Observable<Gallery[]>;
  images$: Observable<Image[]>;
  pagination: GalleryPagination;
  

  constructor( private _mainGalleryService: MainGalleryService, private _imageService:ImageService)
  {}


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }


  ngOnDestroy(): void {


  }

  ngAfterContentInit() : void {
    this.images$ = this._mainGalleryService.images$;
  }

  ngAfterViewChecked() {
     const mixer = mixitup('.mix-wrapper', {
      load: {
        sort: 'order:asc'
      },
        animation: {
        effects: 'fade rotateZ(-180deg)',
        duration: 700
      },
      classNames: {
        block: 'programs',
        elementFilter: 'filter-btn',
        elementSort: 'sort-btn'
      },
      selectors: {
        target: '.mix-target'
      }
    })

    const hash = location.hash.replace('#', '.')
   
    if (hash) {
	  	mixer.filter(hash)
    } 
  }

}
