import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{SharedserviceequityService}from './equities/shared/sharedserviceequity.service';
import{SharedservicebondsService}from './bonds/shared/sharedservicebonds.service';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{BondsModule}from './bonds/bonds.module';
import{EquitiesModule}from './equities/equities.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BondsModule,
    EquitiesModule
  ],
  providers: [SharedservicebondsService,SharedserviceequityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
