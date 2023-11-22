import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor as interceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements interceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token") || ''
    const userId = localStorage.getItem("userId") || ''
    if (token && userId) {
      request = request.clone(
        {
          headers: request.headers.set('BEARER', token).set('USER-ID', userId)
        });
      return next.handle(request);
    }
    else
      return next.handle(request);
  }
}
