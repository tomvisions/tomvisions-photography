import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules/bootstrap/dist/css/bootstrap.min.css",
    './app.component.scss',
    "./css/bootstrap-gallery.css",
    "./css/styles.css",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'gallery-tomvisions-main';
}
