import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError, toArray, from, scan, reduce  } from 'rxjs';
import { GetGallery, Image, Gallery} from '../main-gallery/main-gallery.type';
import {SharedService} from "../shared.service"

@Injectable({
  providedIn: 'root'
})
export class ViewGalleryService
{
  public increment: number = 12;
  currentCount: number = 0;

  // Private
  private _getGallery: BehaviorSubject<Gallery[] | null> = new BehaviorSubject(null);
  private _id = null

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
   get getGallery$(): Observable<Gallery[]>
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
  getGallery(id = null): Observable<Gallery[]>
  {
    const parent = new Error().stack.split('\n')[2].trim().split(' ')[1]
    console.log(parent)

  //  console.log('call from [', ex.stack.split('\n')[2].trim().split(' ')[1], ']');


    if (id !== null) {
      this._id = id;
    }

    if (id === null) {
      id = this._id
    }


    console.log("in get")
    if (parent  !== "ViewGalleryResolver.resolve") {
      this.currentCount = this.currentCount + 1;
    }

    console.log(`${this._sharedService.apiLocation}/media/id/${id}/image/${this.currentCount == 0 ? 1: this.currentCount}/12/key/asc`);


    return this.getGallery$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.get<GetGallery>(`${this._sharedService.apiLocation}/media/id/${id}/image/${this.currentCount == 0 ? 1: this.currentCount}/12/key/asc`).pipe(
        map((getGallery) => {
          this._getGallery.next(getGallery.data);

          return getGallery.data
        }),
      ))
    );
  }
}
