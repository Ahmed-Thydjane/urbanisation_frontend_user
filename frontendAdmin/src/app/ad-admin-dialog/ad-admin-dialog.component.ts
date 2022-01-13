import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {MessageService} from "../message/message.service";
import {AuthService} from "../auth/auth.service";
import {UserService} from "../user/user.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ad-admin-dialog',
  templateUrl: './ad-admin-dialog.component.html',
  styleUrls: ['./ad-admin-dialog.component.scss']
})
export class AdAdminDialogComponent implements OnInit {

  constructor(private messageService: MessageService,
  private authService: AuthService,
  private userserv:UserService,
  private router: Router,
  private dialogRef:MatDialogRef<AdAdminDialogComponent>) { }

  email: string="";
  password: string="";
  password2: string="";
  pseudo: string="";
  role:string="";
  erreur:boolean=false;
  errorMessage: String | undefined;

  ngOnInit(): void {
  }

  sign_up():void{
    console.log("++++++++++sign up");
    this.correctelyFill(this.email,this.password,this.password2,this.pseudo);
    if(!this.erreur){
      if(this.password2===this.password){
        const data={pseudo:this.pseudo, email:this.email ,password:this.password,role:2};
        console.log(data);
        this.messageService.sendMessage('sign_up',data).subscribe(
          (Parcel) => this.maCallBack( Parcel )
        )
      }
      else{
        this.errorMessage="Password are different, Please enter the same Password to confirm";

      }

    }

  }
  maCallBack(Parcel:any):void{
    if(Parcel.status=='error'){
      if(Parcel.data.reason=='email_already_exist') {
        this.errorMessage = 'This email already exist'
      }
    }
    else if(Parcel.status=='ok'){
      this.authService.sendAuthentification(this.email, this.password).subscribe(
        (Parcel) => {
          this.userserv.id_user=Parcel.data[0]._id;
          this.userserv.user_data=Parcel.data;


        }
      );
    }

  }


  correctelyFill( login:string, password:string, password2:string, pseudo:string)
  {
    if((login==="") && (password==="")) {
      this.errorMessage = "Please enter Email and password" ;
      this.erreur = true ;
    }
    else if(pseudo==="") {
      this.errorMessage = "Please enter a name or a pseudo " ;
      this.erreur = true ;
    }
    else if(login==="") {
      this.errorMessage = "Please enter an email" ;
      this.erreur = true ;
    }

    else if(password==="") {
      this.errorMessage = "Please enter a password" ;
      this.erreur = true ;
    }
    else if(password2==="") {
      this.errorMessage = "Please confirm the password" ;
      this.erreur = true ;
    }

    else {
      this.erreur = false ;
    }
  }

  onClickFermer(): void {
    this.dialogRef.close( "fermer" );
  }

}
