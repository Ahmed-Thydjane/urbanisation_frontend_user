import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {MessageService} from '../message/message.service';
import {Parcel} from "../message/Parcel";
import {Router} from "@angular/router";
import {ShareService} from "../share/share.service";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string="";
  password: string="";
  errorMessage: string | undefined ;
  erreur = false ;
  reception = false ;

  constructor(private authService: AuthService,private router: Router,private shareService: ShareService,private userserv:UserService) { }

  ngOnInit(): void {
  }

  loginUser():void{
    console.log(this.email);
    console.log(this.password)
    this.correctelyFill( this.email, this.password );

    if(!this.erreur) {
      this.authService.sendAuthentification(this.email, this.password).subscribe(
        (Parcel) => this.maCallBack( Parcel )
      );
    }

  }


  maCallBack( Parcel: Parcel ) : void
  {
    this.authService.finalizeAuthentication( Parcel );
    if( !this.authService.isAuth ) {
      console.log( Parcel.data['reason'] );
      this.errorMessage = "Email or Password not correct" ;
      this.erreur = true ;
    }
    else {
      console.log( Parcel.data );
      this.shareService.Send_user_info(Parcel.data[0]._id);
      this.userserv.id_user=Parcel.data[0]._id;
      this.userserv.pw=Parcel.data[0].password;
      this.userserv.name=Parcel.data[0].name;
      this.userserv.role=Parcel.data[0].role;
      this.router.navigateByUrl( '/home' );
    }
  }

  // Verifie si les champs ont été remplis
  correctelyFill( login:string, password:string )
  {
    if((login==="") && (password==="")) {
      this.errorMessage = "Please enter login and password" ;
      this.erreur = true ;
    }
    else if(login==="") {
      this.errorMessage = "Please enter a login" ;
      this.erreur = true ;
    }
    else if(password==="") {
      this.errorMessage = "Please enter a password" ;
      this.erreur = true ;
    }
    else {
      this.erreur = false ;
    }
  }

}
