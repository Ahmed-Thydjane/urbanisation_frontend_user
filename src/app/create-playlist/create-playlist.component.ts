import {Component, Inject, OnInit} from '@angular/core';
import {MessageService} from "../message/message.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Parcel} from "../message/Parcel";
import {DialogDataPlaylist} from "../playlist-home/playlist-home.component";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  existeErreur : boolean = false ;
  messageErreur : string | undefined ;
  title: string | undefined;
  data1:any;

  constructor(public dialogRef: MatDialogRef<CreatePlaylistComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogDataPlaylist,
              @Inject(MessageService) private messageService: MessageService,
              private userserv:UserService) { }

  ngOnInit(): void {

  }
  onClickFermer(): void {
    this.dialogRef.close( "fermer" );
  }

  onClickCreer() : void
  {
    const url = "add_new_playlist" ;
    console.log( this.userserv.id_user);
    console.log(this.title);
    this.data1 = { id_user:this.userserv.id_user, title:this.title } ;
    console.log(this.data1);
    this.messageService.sendMessage(url,this.data1).subscribe(
      (nodeData) => this.maCallBack(nodeData)
    );
  }

  maCallBack( Parcel : Parcel )
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
