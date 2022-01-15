import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message/message.service";
import {environment} from '../../environments/environment';
import {PlayVideoService} from "../play-video/play-video.service";
import {GetVideoDataService} from "../get_video_data/get-video-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mess:MessageService,
              private play:PlayVideoService,
              private getv:GetVideoDataService) { }

  url:string='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=FR&key=';
  maxResults:number=30;
  data:any;
  ngOnInit(): void {
    this.mess.sendGetMessage(this.url+environment.key+'&maxResults='+ this.maxResults).subscribe(
      (data:any)=>{
          this.data=data.items;
          console.log(this.data);
      }
    )

  }
  play_video(movie:any):void{
    this.getv.videoId=movie.id.videoId;
    this.play.open_play_video_dialog(movie);
    console.log("in home")
  }

}
