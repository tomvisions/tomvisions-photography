import { Injectable, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError, Subject, takeUntil } from 'rxjs';
import { SharedService } from "../shared.service";
import { Login } from './login.type';
@Injectable({
    providedIn: 'root'
})


export class LoginService {
    private _login: BehaviorSubject<Login | null> = new BehaviorSubject(null);

    /**
       * Constructor
       */
    constructor(private _httpClient: HttpClient, private _sharedService: SharedService)
    {}

    get login$(): Observable<Login> {
      return this._login.asObservable();
    }

    setLogin(login: Login): Observable<{ login: Login }>
    {
        return this.login$.pipe(
            take(1),
            switchMap(theContactUs => this._httpClient.post<{ login: Login }>(`${this._sharedService.apiLocation}/api/v1/media/login`,
                login, { headers: {
                        'Content-Type': 'application/json'
                    }}).pipe(
                map((login) => {

                    return login;
                }),
            ))
        );
    }
}
