import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private requestOptions = new RequestOptions({
    headers: new Headers({
      'authorization': 'token c4178561-abf7-4f8b-8afd-53bdea8ed2aa'
    })
  });

  constructor(private http: Http) { }

  getTodos () {
    return this.http.get('./me/todomvc', this.requestOptions).map(res => {
      return res.json();
    }).catch(error => {
      console.log(error);
      return Observable.of<any[]>([]);
    });
  }

  saveTodos (newTodos: any[]) {
    return this.http.post('./me/todomvc', newTodos, this.requestOptions).map(res => {
      return res.json();
    }).catch(error => {
      console.log(error);
      return Observable.of<any[]>([]);
    })
  }

}
