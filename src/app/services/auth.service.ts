import { Injectable } from '@angular/core';
import { Logindto } from '../model/login.dto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  keyLogin: string = 'login';
  constructor() {}
  loginValido(logindata: Logindto): boolean {
    return true;
  }
  isLoggedIn(): boolean {
    var loginName = localStorage.getItem(this.keyLogin) || '';

    return loginName != '';
  }
}
