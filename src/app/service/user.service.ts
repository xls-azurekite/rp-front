import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;
  public url = "https://rpmongo.herokuapp.com/user";
  constructor(http: HttpClient) {
    this.http = http;
  }

  getUser(email: string) {
    const url = `${this.url}/email/${email} `;
    return this.http.get(url);
  }

  registerUser(form: any) {
    const url = `${this.url} `;  
    if(form.password1 != form.password2){
      throw new Error("PASSWORD_MATCHNT");
    }
    form.password = form.password1;

    return this.http.post(url, form, { headers: '', responseType: 'json' });
  }

  login(form: any) {
    //this.url = "http://127.0.0.1:3000/user";
    const url = `${this.url}/login `;
    return this.http.post(url, form , { headers: '', responseType: 'json' });
  }
}
