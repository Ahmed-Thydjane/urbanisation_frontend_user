import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PasswordDialogComponent} from "../password-dialog/password-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AddAddDialogComponent} from "../add-add-dialog/add-add-dialog.component";

@Component({
  selector: 'app-advertiser-home',
  templateUrl: './advertiser-home.component.html',
  styleUrls: ['./advertiser-home.component.scss']
})
export class AdvertiserHomeComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  @Output() eeNewPlaylist = new EventEmitter();

  ngOnInit(): void {
  }

  newAd():void {
    const config ={
      width:'60%',
    }
    const dialogRef = this.dialog.open(AddAddDialogComponent,config);
    dialogRef.afterClosed().subscribe(result => this.maCallBack(result) );

  }

  maCallBack( result:any ) : void
  {
    if(result !== "fermer") this.eeNewPlaylist.emit( result );
  }


}
