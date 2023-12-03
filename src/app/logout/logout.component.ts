import {Component, OnInit} from '@angular/core';
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _cookieService:CookieService,  private router: Router) {}


  ngOnInit() {
     this._cookieService.deleteCookie('gallery_code');
     //this.router.navigate(['']);
    window.location.href="index.html"
  }
}
