import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {MainGalleryService} from "./main-gallery.service";
import {Gallery, Image, GalleryPagination} from './main-gallery.type'

@Injectable({
  providedIn: 'root'
})
export class MainGalleryResolver implements Resolve<any>
{
  /**
   * Constructor
   */
  constructor(private _mainGalleryService: MainGalleryService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ images: Image[] }>
  {
    return this._mainGalleryService.getImages();
  }
}
