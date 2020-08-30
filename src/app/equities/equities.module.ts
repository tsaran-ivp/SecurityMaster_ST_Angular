import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquitytileComponent } from './equitytile/equitytile.component';
import { EquityuploadComponent } from './equityupload/equityupload.component';
import { EquityshowComponent } from './equityshow/equityshow.component';
import { EquityformComponent } from './equityform/equityform.component';



@NgModule({
  declarations: [EquitytileComponent, EquityuploadComponent, EquityshowComponent, EquityformComponent],
  imports: [
    CommonModule
  ],
  exports :[
    EquitytileComponent,
     EquityuploadComponent, 
     EquityshowComponent,
      EquityformComponent
  ]
})
export class EquitiesModule { }
