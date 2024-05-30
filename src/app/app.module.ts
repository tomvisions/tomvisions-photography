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
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import {FormatImagePipe} from "./format-image.pipe";


@NgModule({
  declarations: [
    AppComponent,
    MainGalleryComponent,
    ViewGalleryComponent,
    LoginComponent,
    LogoutComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        LightgalleryModule,
        DisplayTagsPipe,
        ReactiveFormsModule,
        FormsModule,
        FormatImagePipe
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
