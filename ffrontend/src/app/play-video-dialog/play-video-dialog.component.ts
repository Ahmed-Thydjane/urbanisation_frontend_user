import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogDataPlaylist} from "../playlist-home/playlist-home.component";
import {MessageService} from "../message/message.service";
import {DomSanitizer} from "@angular/platform-browser";
import {SearchResultComponent} from "../search-result/search-result.component";
import {GetVideoDataService} from "../get_video_data/get-video-data.service";
import {ChoosePlaylistDialogComponent} from "../choose-playlist-dialog/choose-playlist-dialog.component";
import {AuthService} from "../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-play-video-dialog',
  templateUrl: './play-video-dialog.component.html',
  styleUrls: ['./play-video-dialog.component.scss']
})
export class PlayVideoDialogComponent implements OnInit {

SafeUrl: any | undefined;
final_url: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<PlayVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchResultComponent,
    @Inject(MessageService) private messageService: MessageService,
    private _sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private getv:GetVideoDataService,
    public auth:AuthService,
    private _snackBar: MatSnackBar
  ) { }
  @Output() eeNewPlaylist = new EventEmitter();
 videoId: string | undefined;
  ngOnInit(): void {
    console.log("==========IN DIALOG===========");
    this.videoId=this.getv.videoId;
    console.log(this.getv.videoId);
    this.SafeUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.getv.videoId)
    this.final_url=this.SafeUrl+'/'+this.videoId;
  }
  onClickFermer(): void {
    this.dialogRef.close( "fermer" );
  }
  addmovie():void
  {
    if(this.auth.isAuth===false){
      this.openSnackBar('You must be signed in to add a video in a playlist', 'Login')
    }else{
          const video_id=this.getv.videoId;
          const config = {
            width: '60%',
            data: video_id
          }
          const dialogRef = this.dialog.open( ChoosePlaylistDialogComponent, config );
          dialogRef.afterClosed().subscribe(result => this.maCallBack(result) );
    }
    
  }
  maCallBack( result:any ) : void
  {
    if(result !== "fermer") this.eeNewPlaylist.emit( result );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 10000,
      panelClass: ['snackbar']
    });

  }

}
