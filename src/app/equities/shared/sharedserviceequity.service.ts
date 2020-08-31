import { Injectable } from '@angular/core';

import {HttpClient}from '@angular/common/http';
import {Observable}from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{securityequity} from '../shared/securityequity.model';

@Injectable(
{
  providedIn:'root'
}
)

export class SharedserviceequityService {

  readonly equityUrl="https://localhost:44362/api/equity";
  formdata:securityequity;
  equitylist:securityequity[];

  constructor(public http:HttpClient) { }

  equitySelect():Observable<securityequity[]>{
    return this.http.get<securityequity[]>(this.equityUrl);
  }
  refreshequitylist(){
    this.equitySelect().subscribe(data=>{
      this.equitylist=data;
    })
  }

  equityUpdate(formdata:securityequity){
    return this.http.put(this.equityUrl,formdata);
  }
  equityAdd(val:any){
    return this.http.post(this.equityUrl,val);
  }
  equityDelete(id:number){
    return this.http.delete(this.equityUrl+'/'+id);
  }
  
}
