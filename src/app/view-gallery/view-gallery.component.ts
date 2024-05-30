import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from '../image.service';
import { ViewGalleryService } from './view-gallery.service';
import { Subject, takeUntil } from 'rxjs';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
//import {  zoomSettings } from 'lightgallery/plugins/zoom/lg-zoom-settings';
//import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/zoom";
import lightGallery from 'lightgallery';

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewGalleryComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  galleryImages;
  galleries;
  galleryName;
  settings;
  onBeforeSlide;


  constructor(
    private _viewGalleryService: ViewGalleryService,
    private _imageService: ImageService) { }


  ngOnInit() {
    this.settings =  {
      counter: false,
      plugins: [lgZoom],
    };

    this.onBeforeSlide = (detail: BeforeSlideDetail): void => {
      const { index, prevIndex } = detail;
      console.log(index, prevIndex);
    };

    this._viewGalleryService.getGallery$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((galleries) => {

        this.galleries = galleries
      })
  }
}
