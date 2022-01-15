import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ShareService} from "../share/share.service";
import {UserService} from "../user/user.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   research:string="";
  message: string | undefined;
  constructor(private router: Router,private sharedService: ShareService,
              private userserv:UserService,
              public auth:AuthService
              ) { }
  username:string|undefined;

  // @ts-ignore
  ngOnInit(): void {
    this.username=this.userserv.name;
    console.log(this.username);
  }

  // @ts-ignore
  onresearch(): void{
    console.log(this.research);
    this.sharedService.nextMessage(this.research);
    this.router.navigateByUrl( '/search-result' );
  }

  newMessage() {
    this.sharedService.nextMessage("Second Message")
  }

  deconnection(): void{
    this.auth.isAuth=false;
  }

}
