import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {observable, Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedservicebondsService {
readonly Bondurl="https://localhost:44362/api/bond";
  constructor(public http:HttpClient) { }

  bondselect():Observable<any[]>{
    return this.http.get<any>(this.Bondurl);
  }
  bondupdate(val:any){
    return this.http.put(this.Bondurl,val);
  }
  bondadd(val:any){
    return this.http.post(this.Bondurl,val);
  }
  bonddelete(val:any){
    return this.http.delete(this.Bondurl+'/'+val);
  }

}
