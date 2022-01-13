import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-ads',
  templateUrl: './admin-ads.component.html',
  styleUrls: ['./admin-ads.component.scss']
})
export class AdminAdsComponent implements OnInit {

  constructor( private mess:MessageService, private rt:Router) { }
  data:any;


  ngOnInit(): void {
    this.mess.sendMessage('getAllAds',[]).subscribe(
      ( parcel:any) =>{
        if(parcel.status="ok") {
          this.data=parcel.data[0];
          console.log(this.data);
        }

        else console.log("error in getting all Ads");
      }
    )

  }

  userClick(id:string):void {

  }

  changePermission(i:any):void {

    let p=-(i.permission);
    const data={id:i._id,permission:p}
    /* On inverse la permission actuelle*/
    this.mess.sendMessage('modifyPermission',data).subscribe(
      ( parcel:any) =>{
        if(parcel.status="ok") {
          this.rt.navigateByUrl("/adminuser")
          console.log(this.data);
        }

        else console.log("error in changing permission");
      }
    )


  }
}
