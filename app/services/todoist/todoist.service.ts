import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { config } from './../../config.ts';
@Injectable()
export class TodoistService {
  private url: string = 'https://todoist.com/API/v7/sync';
  private token: string = config.todoist.key;

  constructor(private http: Http) { }
 
  getTodoist() {
    let body = 'token='+ this.token +'&sync_token=*&resource_types=["items"]';  
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    let options = new RequestOptions({headers: headers});

    return this.http.post(this.url, body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  addTodo(content: string) {
    let command = {
      'type': 'item_add',
      'temp_id': '',
      'args': {
        'content': content,
        'project_id': ''
      },
      'uuid': ''
    };

    let body = 'token='+ this.token + '&commands=' + command;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({headers: headers});
    
    return this.http.post(this.url, body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);    
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}