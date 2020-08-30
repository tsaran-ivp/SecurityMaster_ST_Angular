import { Injectable } from '@angular/core';

import {HttpClient}from '@angular/common/http';
import {observable, Observable}from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceequityService {

  readonly Equityurl="https://localhost:44362/api/equity";
  constructor(public http:HttpClient) { }

  bondselect():Observable<any[]>{
    return this.http.get<any>(this.Equityurl);
  }
  bondupdate(val:any){
    return this.http.put(this.Equityurl,val);
  }
  bondadd(val:any){
    return this.http.post(this.Equityurl,val);
  }
  bonddelete(val:any){
    return this.http.delete(this.Equityurl+'/'+val);
  }
  
}
