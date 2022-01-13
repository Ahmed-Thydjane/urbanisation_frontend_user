import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../user/user.service";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PasswordDialogComponent>,
              private userserv: UserService,
              private mess:MessageService) { }
  oldpassword:string="";
  newpassword:string="";
  newpassword2:string="";
  message:string="";
  errormessage:string="";


  ngOnInit(): void {
  }


  onClickFermer(): void {
    this.dialogRef.close( "fermer" );
  }
  change_password(){
    if(this.oldpassword===this.userserv.pw){
      if(this.newpassword!==""){
        if(this.newpassword===this.newpassword2){
          const data={id:this.userserv.id_user,newpassword:this.newpassword};
          this.mess.sendMessage('update_password',data).subscribe(
            (nodeData) =>{
              if(nodeData.status='ok'){
                this.message="password updated successfully"
              }
              else if(nodeData.status==="error") console.log(nodeData.data.reason);
            }
          )
        }else{
          this.errormessage="Your new password confirmation is not correct"
        }
      }else{
        this.errormessage="Please enter a new password"
      }


    }else{
      this.errormessage="Your current password is not correct"
    }

  }

}
