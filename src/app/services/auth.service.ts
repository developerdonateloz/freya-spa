import { Injectable } from '@angular/core';
import { Logindto } from '../model/login.dto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  loginValido(logindata: Logindto): boolean {
    return true;
  }
  isLoggedIn(username: string): boolean {
    var loginName = localStorage.getItem(username) || '';

    return loginName != '';
  }
}
