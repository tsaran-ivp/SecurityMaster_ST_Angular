import { Component, OnInit } from '@angular/core';
import {EquityService} from '../../services/equity.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {Equity} from '../../models/equity.model';



@Component({
  selector: 'app-equityshow',
  templateUrl: './equityshow.component.html',
  styleUrls: ['./equityshow.component.scss']
})
export class EquityshowComponent implements OnInit {

  dataSource =new EquityDataSource(this.equityService);
  displayedColumns=['id','serviceName'];

  constructor(private equityService:EquityService) { }

  ngOnInit(): void {
  }

}

export class EquityDataSource extends DataSource<any>{
  constructor(private equityService:EquityService)
  {
    super();
  }
  connect():Observable<Equity[]>{
    return this.equityService.get();
  }
  disconnect(){}
}
