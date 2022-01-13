import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Parcel} from './Parcel';


@Injectable({
  providedIn: 'root'
})
export class MessageService
{
  constructor( private http: HttpClient ) { }

  sendMessage( url: string, data: any ): Observable<Parcel>
  {
    const urlComplete = environment.debutUrl + url ;
    console.log( urlComplete );
    return this.http.post<Parcel>( urlComplete, data, {withCredentials: true} );
  }

  sendGetMessage( url: string ): Observable<any>
  {
    return this.http.get<any>( url );
  }
}
