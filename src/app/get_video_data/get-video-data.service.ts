import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {MessageService} from "../message/message.service";

@Injectable({
  providedIn: 'root'
})
export class GetVideoDataService {
  videoId: string | undefined;

  constructor(private mess:MessageService) { }

  find_video_data(id:string):any{
    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+id+'&key='+environment.key;
    return this.mess.sendGetMessage(url);
  }
}
