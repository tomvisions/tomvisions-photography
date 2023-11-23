import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _apiLocation;

  constructor() {
    if (environment.node_env === 'dev') {
//      this._apiLocation = 'http://127.0.0.1:9000'
      this._apiLocation = 'https://api-stage.tomvisions.com'
    } else if (environment.node_env === 'stage') {
        this._apiLocation = 'https://api-stage.mamboleofc.ca'
    } else {
      this._apiLocation = 'https://api.mamboleofc.ca';
    }
  }

  get apiLocation() {
    return this._apiLocation;
  }
}
