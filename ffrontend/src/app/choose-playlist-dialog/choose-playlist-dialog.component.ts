import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../user/user.service";
import {MessageService} from "../message/message.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SearchResultComponent} from "../search-result/search-result.component";
import {Parcel} from "../message/Parcel";
import {Observable} from "rxjs";

@Component({
  selector: 'app-choose-playlist-dialog',
  templateUrl: './choose-playlist-dialog.component.html',
  styleUrls: ['./choose-playlist-dialog.component.scss']
})
export class ChoosePlaylistDialogComponent implements OnInit {

  constructor(private userserv:UserService,
              private mess:MessageService,
              @Inject(MAT_DIALOG_DATA) public data1:SearchResultComponent,
              public dialogRef: MatDialogRef<ChoosePlaylistDialogComponent>
              ) { }
  data:any;
  existeErreur : boolean = false ;
  messageErreur : string | undefined ;

  ngOnInit(): void {
    const url='getAllPlaylists';
    const id_user=this.userserv.id_user;
    const data2={user_id:id_user};
    console.log(data2);
    this.mess.sendMessage(url,data2).subscribe(
      data=>{
        this.data=data;
        console.log(this.data);
      }
    )

  }

  savemovie(pl:any): void{
    console.log("savemovie============");
    console.log(pl._id);
    console.log(this.data1);
    const data3={id_playlist:pl._id,videoId:this.data1};
    console.log(data3);
    const url='add_new_movie';
    this.mess.sendMessage(url,data3).subscribe(
      (nodedata) => this.maCallBack(nodedata)
    );
  }
  onClickFermer(): void {
    this.dialogRef.close( "fermer" );
  }

  maCallBack( Parcel:Parcel )
  {
    if(Parcel.status === "error") {
      this.messageErreur = Parcel.data['reason'] ;
      this.existeErreur = true ;
    } else {
      this.existeErreur = false ;
      this.dialogRef.close( Parcel.data );
    }
  }

}
