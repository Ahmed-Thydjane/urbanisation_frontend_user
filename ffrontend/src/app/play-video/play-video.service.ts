import {EventEmitter, Injectable, Output} from '@angular/core';
import {PlayVideoDialogComponent} from "../play-video-dialog/play-video-dialog.component";
import {GetVideoDataService} from "../get_video_data/get-video-data.service";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class PlayVideoService {
  @Output() eeNewPlaylist = new EventEmitter();

  constructor(private getv:GetVideoDataService,
              public dialog:MatDialog) { }

  open_play_video_dialog(movie:any):void{
    const config = {
      data: { videoId:movie.id.videoId}
    }
    const dialogRef = this.dialog.open( PlayVideoDialogComponent, config );
    dialogRef.afterClosed().subscribe(result => this.maCallBack(result) );

  }
  maCallBack( result:any ) : void
  {
    if(result !== "fermer") this.eeNewPlaylist.emit( result );
  }
}
