// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//  import { Searchservice } from ''; 
 import { SearchuserService } from '../search-service/search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username:string = "";
  users:any;
  constructor(private SearchuserService:SearchuserService) { }

  ngOnInit(): void {
  }
  sendusername(){
    this.SearchuserService.getusername(this.username);
    this.searchUser();
  }
  searchUser(){
    this.SearchuserService.getusers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })
  }
}