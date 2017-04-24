import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export class User {
  id: any;
  login: any;
  name: any;
  photo_url: any;
  level: any;

  constructor(id: any, login: string, name: string, photo_url: string, level: any) {
    this.id= id;
    this.login = login;
    this.name = name;
    this.photo_url = photo_url;
    this.level = level;
  }

}

@Injectable()
export class AuthService {
  currentUser: User;
  user: any;

  constructor(private http: Http) {}

  public login(credentials) {
  if (credentials.login === null || credentials.password === null) {
    return Observable.throw("Please insert credentials");
  }
  else {
    return Observable.create(observer => {
      let url = 'https://sheltered-savannah-33614.herokuapp.com/login';
      this.http.post(url, credentials).map(res => res.json()).subscribe(
        user => {
          let access = (user.id);
          this.currentUser = new User(user.id, user.login, user.name, user.photo_url, user.level);
          observer.next(access);
          observer.complete();
        }
      );
    });
  }
}

  public register(credentials) {
    if (credentials.login === null || credentials.password === null || credentials.name === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        let url = 'https://sheltered-savannah-33614.herokuapp.com/add_user';
        this.http.post(url, credentials).map(res => res.json()).subscribe(
          result => {
            let register = (result.done);
            if (register) {
              // alert('Account created');
              observer.next(true);
              observer.complete();
            } else {
              alert('Error occured');
              observer.next(false);
            }
          }
        );
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
