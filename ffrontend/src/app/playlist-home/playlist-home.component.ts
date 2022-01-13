import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShareService} from "../share/share.service";
import {MatDialog} from "@angular/material/dialog";
import {CreatePlaylistComponent} from "../create-playlist/create-playlist.component";
import {MessageService} from "../message/message.service";
import {environment} from "../../environments/environment";
import {GetVideoDataService} from "../get_video_data/get-video-data.service";
import {UserService} from "../user/user.service";
import {Router} from "@angular/router";



export interface DialogDataPlaylist {
  id_user: string ;
  title: string;
}

@Component({
  selector: 'app-playlist-home',
  templateUrl: './playlist-home.component.html',
  styleUrls: ['./playlist-home.component.scss']
})

export class PlaylistHomeComponent implements OnInit {
  @Output() eeNewPlaylist = new EventEmitter();

  constructor(private shareService: ShareService,
              public dialog: MatDialog,
              private mess:MessageService,
              private vdata:GetVideoDataService,
              private userv:UserService,
              private router: Router) { }
  user_id: string | undefined;
  data_playlists:any;
  tab_video:Array<{ id:string, url: string}>= [];
  tab_id:Array<{ id:string, title:string}>= [];


  ngOnInit(): void {
    this.shareService.sharedMessage2.subscribe(
      data => {
        this.user_id=data;
        console.log(this.user_id);
      }
    )
    const url='getAllPlaylists';
    const data={user_id:this.user_id};
    this.mess.sendMessage(url,data).subscribe(
      (data)=>{
        if(data.status='ok'){
          this.data_playlists=data.data;
          console.log(this.data_playlists);
          for(let i=0;i<this.data_playlists.length;i++){
            this.tab_id.push({id:this.data_playlists[i]._id,title:this.data_playlists[i].title})
            console.log(this.data_playlists[i]);
            const videos=this.data_playlists[i].videos;
            for(let j=0;j<videos.length;j++){
                 console.log(videos[j]);
                 this.vdata.find_video_data(videos[j].videoId).subscribe(
                (data:any)=>{
                  if(data==null){
                    console.log("data video is null");
                  }else{
                    console.log(data.items[0].snippet);
                    if(data.items.length!=0){
                      this.tab_video.push({id:this.data_playlists[i]._id, url:data.items[0].snippet.thumbnails.high.url});
                      this.userv.playlists_data=this.tab_video;
                      this.userv.playlists_id=this.tab_id;
                      this.test();

                    }

                  }

               }
             )
            }

          }

        }
      })

  }

  test():void{
    console.log("fin playlist_home");
    console.log(this.tab_video);
    console.log(this.tab_id);
  }




  newplaylist(): void{
    const config = {
      width: '60%',
      data: { id_user: this.user_id, title: ""}
    }
    const dialogRef = this.dialog.open( CreatePlaylistComponent, config );
    dialogRef.afterClosed().subscribe(result => this.maCallBack(result) );

  }
  maCallBack( result:any ) : void
  {
    if(result !== "fermer") this.eeNewPlaylist.emit( result );
  }

  openplaylist(id:string):void
  {
    this.userv.id_selected_playlist=id;
    this.router.navigateByUrl( '/playlist' );

  }
}
