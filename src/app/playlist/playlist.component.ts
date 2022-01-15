import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {GetVideoDataService} from "../get_video_data/get-video-data.service";
import {PlayVideoService} from "../play-video/play-video.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor(private userv:UserService,
              private getv:GetVideoDataService,
              private play:PlayVideoService) { }
  data_playlist: any;
  id_playlist: any;
  id_current_playlist: string | undefined;
  ngOnInit(): void {
    this.data_playlist=this.userv.playlists_data;
    this.id_playlist=this.userv.playlists_id;
    this.id_current_playlist=this.userv.id_selected_playlist;
    console.log("================In playlist===============");
    console.log(this.data_playlist);
    console.log(this.id_playlist);
  }

  play_video(movie:any):void{
    this.getv.videoId=movie.id;
    movie={id:{videoId:movie.id}} //Je retrensforme movie sous sa forme d'origne pour l'adapter à playvideo
    this.play.open_play_video_dialog(movie)
  }

}
