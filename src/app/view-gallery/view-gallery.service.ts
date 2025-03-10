import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { GetGallery, Image} from '../main-gallery/main-gallery.type';
import {SharedService} from "../shared.service"

@Injectable({
  providedIn: 'root'
})
export class ViewGalleryService
{
  // Private
  private _getGallery: BehaviorSubject<GetGallery | null> = new BehaviorSubject(null);


  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService : SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------



   /**
   * Getter for product
   */
   get getGallery$(): Observable<GetGallery>
   {
     return this._getGallery.asObservable();
   }

/*
    getGalleryById(slug) : Observable<GalleryEvent> {

        return this.galleryEvent$.pipe(
          take(1),
          switchMap(gallery => this._httpClient.get<GetGallery>(`${this._sharedService.apiLocation}/api/v1/gallery/${slug}`,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }).pipe(
            map((getgallery) => {
              this._gallery.next(getgallery.galleries);

              return gallery;
            }),
          ))
        );
      }
*/
  getGallery(id): Observable<GetGallery>
  {
    console.log(`${this._sharedService.apiLocation}/media/id/${id}/image/1/100/key/asc`);


    return this.getGallery$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.get<GetGallery>(`${this._sharedService.apiLocation}/media/id/${id}/image/1/100/key/asc`,
        { headers: {
            'Content-Type': 'application/json'
          }}).pipe(
        map((getGallery) => {
          this._getGallery.next(getGallery.data);

          return getGallery.data
        }),
      ))
    );
  }
}
