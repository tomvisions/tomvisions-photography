import { Injectable, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError, Subject, takeUntil } from 'rxjs';
import { SharedService } from "../shared.service";
import { Gallery, Image } from './main-gallery.type';
import { GalleryPagination } from './main-gallery.type';
import {CookieService} from "../cookie.service";
@Injectable({
    providedIn: 'root'
})


export class MainGalleryService {
    private _galleries: BehaviorSubject<Gallery[] | null> = new BehaviorSubject(null);
    private _images: BehaviorSubject<Image[] | null> = new BehaviorSubject(null);
    private code:string;
   // private _pagination: BehaviorSubject<GalleryPagination | null> = new BehaviorSubject(null);

    /**
       * Constructor
       */
    constructor(private _httpClient: HttpClient, private _sharedService: SharedService, private _cookieService:CookieService)
    {
        this.code = _cookieService.getCookie('gallery_code') ?? null;
    }

    get images$(): Observable<Image[]> {
        return this._images.asObservable();
    }
   // get pagination$(): Observable<GalleryPagination> {
     //   return this._pagination.asObservable();
   // }
    getImages(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''): Observable<{ images: Image[] }> {
        let url = `${this._sharedService.apiLocation}/api/v1/media/primary`;
        
        if (this.code) {
            url = url.concat(`/${this.code}`)
        }

        return this._httpClient.get<{ images: Image[] }>(url).pipe(
            tap((response) => {
        //        this._pagination.next(response.pagination);
              //  console.log(response);

                this._images.next(response.images);
            })
        );
    }
}
