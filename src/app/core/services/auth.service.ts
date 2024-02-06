import { Injectable } from '@angular/core';
import {
  ILoginUser,
  IRegisterUser,
  IUser,
} from '@shared/models/user/user';
import { Observable, map } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public routePrefix = '/auth';

  constructor(
    private httpService: HttpService
  ) {}

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('email');
  }

  signUp(user: IRegisterUser): Observable<IUser> {
    return this.httpService
      .post<IUser>(`${this.routePrefix}/register`, user)
      .pipe(
        map((response) => {
          localStorage.setItem('email', response.email);
          return response;
        })
      );
  }

  signIn(user: ILoginUser): Observable<IUser> {
    return this.httpService
      .post<IUser>(`${this.routePrefix}/login`, user)
      .pipe(
        map((response) => {
          localStorage.setItem('email', response.email);
          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem('email');
  }
}
