import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Equity} from '../models/equity.model';

@Injectable({
  providedIn: 'root'
})
export class EquityService {

  private serviceUrl = 'https://' ; //the path where we get the http get data from 
  constructor(private http:HttpClient) { }
 
  get():Observable<Equity[]>
  {
    return this.http.get<Equity[]>
    (this.serviceUrl);
  }


}
