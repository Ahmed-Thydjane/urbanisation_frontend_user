import { Injectable } from '@angular/core';
import {MessageService} from '../message/message.service';
import {Observable} from 'rxjs';
import {Parcel} from '../message/Parcel';




@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  isAuth: boolean = false ;
  user_id: string | undefined;

  constructor( private messageService: MessageService ) { }

  sendAuthentification( email: string, password: string ) : Observable<Parcel>
  {
    const data = { email:email, password:password };
    return this.messageService.sendMessage( "checkLogin", data );
  }

  finalizeAuthentication( nodeData: Parcel ) : void
  {
    if(nodeData.status === "ok") this.isAuth = true ;
    else this.isAuth = false ;
  }
}
