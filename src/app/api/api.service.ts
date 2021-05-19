import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IServer, MOCK_SERVERS } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}

  public getAllServers$(): Observable<IServer[]> {
    // Simplistic representation of asynchronous HTTP call to API
    return of(MOCK_SERVERS);
  }

}
