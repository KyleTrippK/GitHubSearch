import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user:any;
  repos:any;

  constructor( private http:HttpClient) { }
  showUser(user:any){
    return this.http.get("https://api.github.com/users/" + user+ "?access_token=" + environment.gitApi)
    .pipe(((response:any)=>response));
  }
     
}
