import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { MainGalleryResolver } from './main-gallery/main-gallery.resolver';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { ViewGalleryResolver } from './view-gallery/view-gallery.resolver';

const routes: Routes = [
  { 
    path: '', 
    component: MainGalleryComponent,
    resolve: {
      images: MainGalleryResolver,
    }
  },
  {
    path: ':id',
    component: ViewGalleryComponent,
    resolve: {
      images: ViewGalleryResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
