import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LightgalleryModule } from 'lightgallery/angular';
import { DisplayTagsPipe } from './display-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainGalleryComponent,
    ViewGalleryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LightgalleryModule,
    DisplayTagsPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
