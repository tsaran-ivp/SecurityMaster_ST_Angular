import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {observable, Observable}from 'rxjs';
import{securitybond}from './securitybond.model';
@Injectable({
  providedIn: 'root'
})
export class SharedservicebondsService {
readonly Bondurl="https://localhost:44362/api/bond";
formdata:securitybond;
  bondlist:securitybond[];

constructor(public http:HttpClient) { }
  
  bondselect():Observable<any[]>{
    return this.http.get<any>(this.Bondurl);
  }
  refreshbondlist(){
    this.bondselect().subscribe(data=>{
      this.bondlist=data;
    })
  }
  bondupdate(formdata:securitybond){
    return this.http.put(this.Bondurl,formdata);
  }
  bondadd(val:any){
    return this.http.post(this.Bondurl,val);
  }
  bonddelete(id:number){
    return this.http.delete(this.Bondurl+'/'+id);
  }

}
