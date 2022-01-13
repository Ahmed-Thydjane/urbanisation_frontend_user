import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CreatePlaylistComponent} from "../create-playlist/create-playlist.component";
import {MatDialog} from "@angular/material/dialog";
import {PasswordDialogComponent} from "../password-dialog/password-dialog.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Output() eeNewPlaylist = new EventEmitter();

  ngOnInit(): void {
  }

  change_password(){
    const config ={
      width:'60%',
    }
    const dialogRef = this.dialog.open(PasswordDialogComponent,config);
    dialogRef.afterClosed().subscribe(result => this.maCallBack(result) );
  }

  maCallBack( result:any ) : void
  {
    if(result !== "fermer") this.eeNewPlaylist.emit( result );
  }
}
