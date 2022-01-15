import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MessageService} from "../message/message.service";
import {movie_data} from "../message/Parcel";
import {ShareService} from "../share/share.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Parcel} from "../message/Parcel";
import {MatDialog} from "@angular/material/dialog";
import {CreatePlaylistComponent} from "../create-playlist/create-playlist.component";
import {ChoosePlaylistDialogComponent} from "../choose-playlist-dialog/choose-playlist-dialog.component";
import {PlayVideoDialogComponent} from "../play-video-dialog/play-video-dialog.component";
import {GetVideoDataService} from "../get_video_data/get-video-data.service";
import {PlayVideoService} from "../play-video/play-video.service";
import {AuthService} from "../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface movies{
  videoId:string;
  title:string;
  description: string;
  publishTime:string;

}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {
  @Output() eeNewPlaylist = new EventEmitter();

  constructor( private mess: MessageService,
               private shareService: ShareService,
               private _sanitizer: DomSanitizer,
               public dialog: MatDialog,
               private getv: GetVideoDataService,
               private play:PlayVideoService,
               private _snackBar: MatSnackBar,
               private auth:AuthService
              ) { }
  datalength :number=0;
  video : movies[]=[];
  message: string | undefined;
  data: any;

  ngOnInit(): void {
    //console.log(this.search_word);
    this.shareService.sharedMessage.subscribe(
      message => {
        if(message=="" || typeof (message)==undefined )
        {

        }
        else
        {
          this.message = message;
          console.log(this.message);
          let  source_url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&';
          let key='AIzaSyA8cOoaSMbkEmg9oFQmIwr-xCnW4lS41VM';
          let q=this.message; //message contient le mot clé envoyer par recherche
          let maxResults= 10

          this.mess.sendGetMessage(source_url+'q='+q+'&key='+key+'&maxResults='+maxResults).subscribe(
            ( data:any) =>{

              if(data!=null){
                this.data=data.items;
                this.datalength=data.items.length;
                console.log(this.datalength);
                console.log(this.data);

              }


            }
          )

        }

      }
    )




  }
  maCallBack( result:any ) : void
  {
    if(result !== "fermer") this.eeNewPlaylist.emit( result );
  }

addmovie(mov:any):void{
    if(this.auth.isAuth===false){
      this.openSnackBar('You must be signed in to add a video in a playlist', 'Close')
    }else{

      const video_id=mov.id.videoId;
      const config = {
        width: '60%',
        data: video_id
      }
      const dialogRef = this.dialog.open( ChoosePlaylistDialogComponent, config );
      dialogRef.afterClosed().subscribe(result => this.maCallBack(result) );

    }


}


  play_video(movie:any):void{
    this.getv.videoId=movie.id.videoId;
    this.play.open_play_video_dialog(movie)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 10000,
      panelClass: ['snackbar']
    });

  }



}
