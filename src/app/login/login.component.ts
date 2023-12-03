import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {LoginService} from "./login.service";
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;


  constructor(
      private _formBuilder: FormBuilder,
      private router: Router,
      private _cookieService: CookieService
  ) {
    this.loginForm = this._formBuilder.group({});
  }


  ngOnInit(): void {

    // Create the selected product form
    this.loginForm = this._formBuilder.group({
      code: '',
    });
  }

  loginWithCode() {
    // Get the product object
    const login = this.loginForm.getRawValue();
    this._cookieService.setCookie('gallery_code', login.code, 30);
   // this.router.navigate(['']);
    window.location.href="index.html"
  // this.refresh(); // Re
    // Update the product on the server
/*    this._loginService.setLogin(login).subscribe((login) => {
      if (login['result'] === 'success') {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    }); */
  }
}
