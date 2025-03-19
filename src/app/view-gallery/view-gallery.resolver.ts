import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {ViewGalleryService} from "./view-gallery.service";
import {Gallery, GetGallery, Image} from '../main-gallery/main-gallery.type'

@Injectable({
    providedIn: 'root'
})

export class ViewGalleryResolver
{
    /**
     * Constructor
     */
    constructor(private _viewGalleryService: ViewGalleryService,  private _router: Router)
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
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Gallery[]>
  {
    return this._viewGalleryService.getGallery(route.paramMap.get('id'))
      .pipe(
        // Error here means the requested product is not available
        catchError((error) => {

          // Log the error
          console.error(error);

          // Get the parent url
          const parentUrl = state.url.split('/').slice(0, -1).join('/');

          // Navigate to there
          this._router.navigateByUrl(parentUrl);

          // Throw an error
          return throwError(error);
        })
      );
  }
}
