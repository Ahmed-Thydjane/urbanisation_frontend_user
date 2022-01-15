import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  constructor() { }
  randIm: number | undefined;
  src:string="";

  ngOnInit(): void {
    this.randIm=this.getRandomInt(5)+1;
    this.src="../assets/shoes"+this.randIm+".jpg"
  }

   getRandomInt(max:number):number {
    return Math.floor(Math.random() * max);
  }

}
