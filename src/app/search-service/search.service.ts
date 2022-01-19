
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository} from '../repository/Repository';
import { Username } from '../username/Username'


@Injectable({
  providedIn: 'root'
})

export class SearchuserService {
  username = "Alphine3900";
  
 

  constructor(private http:HttpClient) { }
  
  getusers():Observable<any>{
    
    return this.http.get<any>("https://api.github.com/users/" + this.username )
  }
  getusername(users:string){
     this.username = users;
  }
}