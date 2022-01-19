

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

 import { SearchuserService } from '../search-service/search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username:string = "Alphine3900";
  users:any=[];
  search:any={name:""}
  constructor(private SearchuserService:SearchuserService) { }

  ngOnInit(): void {

    this.SearchuserService.getusers().subscribe((data) => {
      this.users = data;
      console.log(data);
    },alphine  => {
      console.log(alphine.message)
    } )
  }
  sendusername(){
    this.SearchuserService.getusername(this.search.name);
    this.searchUser();
  }
  searchUser(){
    this.SearchuserService.getusers().subscribe((data) => {
      this.users = data;
      console.log(data);
    console.log("mutwiri")},
    
    alphine  => {
      console.log(alphine.message)
    } )
  }
}