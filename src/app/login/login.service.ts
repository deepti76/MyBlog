import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:3000/api/"
  constructor(private http: HttpClient) { }

  validate(user) {
    return this.http.post(this.baseUrl + "login", user);
  }

  resetPassword(user) {
    return this.http.post(this.baseUrl+"reset",user)
  }

  registerUser(user) {
    return this.http.post(this.baseUrl + "register", user);
  }
}
