import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondtileComponent } from './bondtile/bondtile.component';
import { BonduploadComponent } from './bondupload/bondupload.component';
import { BondshowComponent } from './bondshow/bondshow.component';
import { BondformComponent } from './bondform/bondform.component';



@NgModule({
  declarations: [BondtileComponent, BonduploadComponent, BondshowComponent, BondformComponent],
  imports: [
    CommonModule
  ]
})
export class BondsModule { }
