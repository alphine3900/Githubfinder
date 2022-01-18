// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { Repository} from '../repository/Repository';
// import { Username } from '../username/Username';


// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {
//   user!:Username;
//   search!:Repository;  

//   constructor(private http:HttpClient) { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository} from '../repository/Repository';
import { Username } from '../username/Username'


@Injectable({
  providedIn: 'root'
})

export class SearchuserService {
  username = "";
  
 

  constructor(private http:HttpClient) { }
  
  getusers():Observable<any>{
    
    return this.http.get<any>("https://api.github.com/users/" + this.username )
  }
  getusername(users:string){
     this.username = users;
  }
}