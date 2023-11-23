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
export class ViewGalleryComponent {
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
        this._imageService.setSitePrefix(false);
        this.galleryImages = [];
        for (let image of this.galleries) {
          if (image.orientation === 1) {
      //    this.galleryImages.push({ big: this._imageService.loadImage1280x720(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
          this.galleryImages.push({ big: this._imageService.loadImage720x1280(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
          } else {
       //     this.galleryImages.push({ big: this._imageService.loadImage720x1280(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
      
            this.galleryImages.push({ big: this._imageService.loadImage1280x720(image['key']),  small: this._imageService.loadImage100x100(image['key']) })
          }
        }  
        console.log(this.galleryImages);  
      })
  }
}
