import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-add-dialog',
  templateUrl: './add-add-dialog.component.html',
  styleUrls: ['./add-add-dialog.component.scss']
})
export class AddAddDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddAddDialogComponent>) { }


  url: string ="";
  title: string ="";


  oldpassword:string="";
  newpassword:string="";
  newpassword2:string="";
  message:string="";
  errormessage:string="";

  ngOnInit(): void {
  }

  newAd():void{

  }
  onClickFermer(): void {
    this.dialogRef.close( "fermer" );
  }
}
