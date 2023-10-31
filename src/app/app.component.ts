import { Component, ViewEncapsulation } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules../../node_modules/bootstrap/dist/css/bootstrap.min.css",
    './app.component.scss',
    "./css/bootstrap-gallery.css",
    "./css/styles.css",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  homeImage;

  constructor( private _imageService:ImageService) {
    this.homeImage = this._imageService.loadImage983x409('waterfall-sm2.jpg');
  }

  title = 'TomVisions\'s Photography';

}
