import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private message = new BehaviorSubject(undefined);
  private message2 = new BehaviorSubject(undefined);
  sharedMessage = this.message.asObservable();
  sharedMessage2 = this.message2.asObservable();

  constructor() { }

  nextMessage(message: any) {
    this.message.next(message)
  }
  Send_user_info(message: any) {
    this.message2.next(message)
  }
}
