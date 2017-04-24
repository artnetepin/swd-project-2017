import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  id: any;
  username: any;
  email: any;

  constructor(id: number) {
    this.id = id;
    // this.username = username;
    // this.email = email;
  }

}

@Injectable()
export class AuthService {
  currentUser: User;
  // user: any;

  constructor (public http: Http){
    this.http = http;
  }

  public login(credentials) {
    // if (credentials.login === null || credentials.password === null) {
    //   return Observable.throw("Please insert credentials");
    // } else {
    //   return Observable.create(observer => {
    //     // this.http.post('https://sheltered-savannah-33614.herokuapp.com/login', JSON.stringify(credentials)).map((res:Response) => this.user = res.json());
    //     let access = (this.user);
    //     this.currentUser = new User(this.user.id);
    //     observer.next(access);
    //     observer.complete();
    //   });
    // }
    return this.http.post('https://sheltered-savannah-33614.herokuapp.com/login', JSON.stringify({login: credentials.login, password: credentials.password}))
                    .map((response: Response) => {
                      let user  = response.json();
                      if (user && user.id) {
                        this.currentUser = user;
                      }
                    })

  }

  public register(credentials) {
    // if (credentials.login === null || credentials.password === null) {
    //   return Observable.throw("Please insert credentials");
    // } else {
    //   // At this point store the credentials to your backend!
    //   return Observable.create(observer => {
    //     observer.next(true);
    //     observer.complete();
    //   });
    // }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    // return Observable.create(observer => {
    //   this.currentUser = null;
    //   observer.next(true);
    //   observer.complete();
    // });
  }
}
