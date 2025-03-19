import {AfterContentInit, AfterViewChecked, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ImageService } from '../image.service';
import { ViewGalleryService } from './view-gallery.service';
import { Subject, takeUntil } from 'rxjs';
import {BeforeSlideDetail, InitDetail} from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
//import {  zoomSettings } from 'lightgallery/plugins/zoom/lg-zoom-settings';
//import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/zoom";
import lightGallery from 'lightgallery';
import {GetGallery, Gallery} from "../main-gallery/main-gallery.type";
import { fromEvent, reduce, scan, tap } from 'rxjs';
import {LightGallery} from "lightgallery/lightgallery";

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewGalleryComponent implements OnInit, AfterContentInit, AfterViewChecked {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  galleryImages;
  galleries: Gallery[] = []
  galleryName;
  settings;
  onBeforeSlide;
  private _lightGallery: LightGallery
  private _needRefresh = false



  constructor(
    private _viewGalleryService: ViewGalleryService,
    private _imageService: ImageService) {
  }


  ngOnInit() {

  }

  ngAfterViewChecked(): void {
    if (this._needRefresh) {
      this._lightGallery.refresh();
      this._needRefresh = false;
    }
  }

  onInit = (detail: InitDetail): void => {
    this._lightGallery = detail.instance;
  };

  ngAfterContentInit() {
    this.settings = {
      counter: false,
      plugins: [lgZoom],
    };

    this.onBeforeSlide = (detail: BeforeSlideDetail): void => {
      const {index, prevIndex} = detail;
    };

    this.getAlbumData()

    fromEvent(document, 'scroll')
      .pipe(
        tap(() => {
          let fullDocumentHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
          );
          const haveIReachedBottom =
            fullDocumentHeight ===
            window.scrollY + document.documentElement.clientHeight;
          if (haveIReachedBottom) {
            this.getAlbumData();
          }
        })
      )
      .subscribe();

  }


  getAlbumData() {
      this._viewGalleryService.getGallery()
        .pipe(
          tap(
            (result: Gallery[]) => {
              this.galleries = this.galleries.concat(result)
              this._needRefresh = true
            }
          )
        ).subscribe()
   }

}
