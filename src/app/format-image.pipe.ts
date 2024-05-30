import { Pipe, PipeTransform } from '@angular/core';
import {ImageService} from "./image.service";

@Pipe({
  name: 'formatImage',
  standalone: true
})
export class FormatImagePipe implements PipeTransform {

  constructor(private _imageService: ImageService) {
  }
  transform(value: any, ...args: any[]): any {
    this._imageService.setSitePrefix(false);
    if (args.length === 0) {
      return this._imageService.loadImage270x270(value.key)
    }

    const size = args[0];

    if (size === "big") {
      if (value.orientation === 1) {
        console.log(value.key)
        return this._imageService.loadImage720x1280(value.key)
      } else {
        console.log(value.key)
        return this._imageService.loadImage1280x720(value.key)
      }
    }
  }
}
