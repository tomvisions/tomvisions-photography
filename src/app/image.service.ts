import { Injectable } from '@angular/core';
const Buffer = require('buffer').Buffer;
declare var require: any;
//declare const Buffer:any;
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private _PARAM_LOCATION:string|null = 'tomvisions/main-images';
  private _PARAM_FRONTCLOUD:string|null = 'https://d34wc8uzk8vrsx.cloudfront.net';

  constructor() { }

  loadImage983x409(image: string) {
    const resizedImage = this.resizeWithInS3(image, {
      "resize": {
        "width": 983,
        "height": 409,
        "fit": "cover"
      }
    });

    return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
  }

    loadImage1280x720(image) {
      const resizedImage = this.resizeWithInS3(image, {
        "resize": {
          "width": 1280,
          "height":720,
          "fit": "cover"
        }
      });
      return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
    }
  
    loadImage100x100(image) {
      const resizedImage = this.resizeWithInS3(image, {
        "resize": {
          "width": 270,
          "height": 270,
          "fit": "inside"
        }
      });
      return `${this._PARAM_FRONTCLOUD}/${resizedImage}`;
    }
  

  /**
   * Setup Signature so that a specific bucket and key are resized with the resized serverless app that is running along with the edits
   * being applied
   * @param key
   * @param edits
   */
  public resizeWithInS3(key: string, edits: EditProperties) {

    if (this._PARAM_LOCATION) {
      key = `${this._PARAM_LOCATION}/${key}`;
    }

    const imageRequest = JSON.stringify({
      bucket: "tomvisions-original-images",
      key: key,
      edits: edits
    })

    return `${Buffer.from(imageRequest).toString('base64')}`;
  }

  public setSitePrefix(prefix = true) {
    if (!prefix) {
      this._PARAM_LOCATION = null;
    }
  }
}

export interface EditProperties {
  "resize": {
    width?: number,
    height?: number,
    fit?: string
  }
}
