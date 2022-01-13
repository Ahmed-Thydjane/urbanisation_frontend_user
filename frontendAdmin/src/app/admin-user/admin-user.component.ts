import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MessageService} from "../message/message.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdAdminDialogComponent} from "../ad-admin-dialog/ad-admin-dialog.component";


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  constructor( private mess:MessageService, private rt:Router,
               public auth:AuthService,
               private dialog: MatDialog,
               private _snackBar: MatSnackBar) { }
  data:any;
  @Output() eeNewPlaylist = new EventEmitter();


  ngOnInit(): void {
     console.log("Bonjour");
    this.mess.sendMessage('getAllUsers',[]).subscribe(
      ( parcel:any) =>{
        if(parcel.status="ok") {
          this.data=parcel.data[0];
          console.log(this.data);
        }

        else console.log("error in getting all user");
      }
    )

  }

  userClick(id:string):void {

  }

  newadmin(){
    if(this.auth.isAuth===false){
      this.openSnackBar('You must be signed in to add a video in a playlist', 'Close')
    }else{


      const config = {
        width: '60%',
      }
      const dialogRef = this.dialog.open( AdAdminDialogComponent, config );
      dialogRef.afterClosed().subscribe(result => this.maCallBack(result) );

    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 10000,
      panelClass: ['snackbar']
    });

  }

  maCallBack( result:any ) : void
  {
    if(result !== "fermer") this.eeNewPlaylist.emit( result );
  }


  changePermission(i:any):void {

    let p=-(i.permission);
    const data={id:i._id,permission:p}
    /* On inverse la permission actuelle*/
    this.mess.sendMessage('modifyPermission',data).subscribe(
      ( parcel:any) =>{
        if(parcel.status="ok") {
          console.log(this.data);
        }

        else console.log("error in changing permission");
      }
    )


  }
}
