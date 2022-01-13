import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message/message.service";
import {AuthService} from "../auth/auth.service";
import {ShareService} from "../share/share.service";
import {UserService} from "../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-advertiser',
  templateUrl: './sign-up-advertiser.component.html',
  styleUrls: ['./sign-up-advertiser.component.scss']
})
export class SignUpAdvertiserComponent implements OnInit {

  constructor(private messageService: MessageService,
              private authService: AuthService,
              private shareService: ShareService,
              private userserv:UserService,
              private router: Router) { }
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
        const data={name:this.pseudo, email:this.email ,password:this.password,role:1};
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
          this.userserv.role== Parcel.data[0].role;
          this.router.navigateByUrl('home');


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

}



