import { Component, NgModuleDecorator, OnInit } from '@angular/core';
import { MyDet } from './shared/models/det.model';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'poject11';
  Card!: string;
  dets!: MyDet[];

  MyDet = [ 
    {
    id: 1,
    name: 'DateFirst',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 2,
    name: 'DateSecond',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 3,
    name: 'DateThird',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 4,
    name: 'DateFour',
    status: (Math.random() >= 0.5 ? true : false),
}, 
{
    id: 5,
    name: 'DateFive',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 6,
    name: 'DateSix',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 7,
    name: 'DateSeven',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 8,
    name: 'DateEight',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 9,
    name: 'DateNine',
    status: (Math.random() >= 0.5 ? true : false),
},
{
    id: 10,
    name: 'DateTen',
    status: (Math.random() >= 0.5 ? true : false),
},
]
  delete(event: any) {
  
    for(var i = 0; i < this.MyDet.length; i++){
      if(this.MyDet[i].id === event)
        this.MyDet.splice(i, 1)
    }
  }
  Onclick(Card: NgModel){
    
      if(this.MyDet.length !== 0){
        var length = this.MyDet.length - 1;
        length = this.MyDet[length].id + 1;
        this.MyDet.push({id: length, name: Card.value, status: (Math.random() >= 0.5 ? true : false)})
      }else{
        this.MyDet.push({id: 1, name: Card.value, status: (Math.random() >= 0.5 ? true : false)})
      }
     
  }
  }

