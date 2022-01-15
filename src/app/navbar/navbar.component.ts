import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public  auth:AuthService,
              private _snackBar: MatSnackBar,
              private router: Router,
              public usv:UserService) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: ['snackbar']
    });
  }

  goplaylist() :void{
    if(this.auth.isAuth===false) this.openSnackBar('You must be signed in to add a video in a playlist', 'Close');
    else{
      this.router.navigateByUrl('/playlist_home');
    }
  }
}
