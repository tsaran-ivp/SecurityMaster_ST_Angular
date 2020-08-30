import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquitytileComponent } from './equitytile/equitytile.component';
import { EquityuploadComponent } from './equityupload/equityupload.component';
import { EquityshowComponent } from './equityshow/equityshow.component';
import { EquityformComponent } from './equityform/equityform.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EquityService} from '../services/equity.service';


@NgModule({
  providers: [EquityService],

  declarations: [EquitytileComponent, EquityuploadComponent, EquityshowComponent, EquityformComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports :[
    EquitytileComponent,
     EquityuploadComponent, 
     EquityshowComponent,
      EquityformComponent
  ]
})
export class EquitiesModule { }
