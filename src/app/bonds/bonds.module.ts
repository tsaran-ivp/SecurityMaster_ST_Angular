import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondtileComponent } from './bondtile/bondtile.component';
import { BonduploadComponent } from './bondupload/bondupload.component';
import { BondshowComponent } from './bondshow/bondshow.component';
import { BondformComponent } from './bondform/bondform.component';
import {SharedservicebondsService} from './shared/sharedservicebonds.service';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [BondtileComponent, BonduploadComponent, BondshowComponent, BondformComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BondtileComponent,
    BonduploadComponent,
    BondshowComponent,
    BondformComponent
  ]
})
export class BondsModule { }
