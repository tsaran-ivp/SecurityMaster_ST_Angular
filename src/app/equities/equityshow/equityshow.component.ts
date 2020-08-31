import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {SharedserviceequityService} from '../shared/sharedserviceequity.service';
import {securityequity} from '../shared/securityequity.model';


@Component({
  selector: 'app-equityshow',
  templateUrl: './equityshow.component.html',
  styleUrls: ['./equityshow.component.scss']
})

export class EquityshowComponent implements OnInit {
  dataSource = new EquityDataSource(this.service);
  displayedColumns = ['ID','ServiceName','ServiceDescription'];
  constructor(public service:SharedserviceequityService) { }

  ngOnInit(): void {
   // this.service.refreshequitylist();
  }

  
  // populateform(equityitem :securityequity){
  //   this.service.formdata=Object.assign({},equityitem);

  // }
  // deleteitem(id:number){
  //   if(confirm('are u sure u wanna delete?')){
  //     this.service.equityDelete(id).subscribe(res=>{
  //       alert("deleted successfully");
  //       this.service.refreshequitylist();
  //     })
  //   }
  // }

}

export class EquityDataSource extends DataSource<any>{
  constructor(private service:SharedserviceequityService ){
    super();
  }
  connect():Observable<securityequity[]>
  {
    return  this.service.equitySelect();
  }
  disconnect(){}

}