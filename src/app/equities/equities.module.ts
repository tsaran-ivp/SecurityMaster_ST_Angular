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
import {SharedserviceequityService} from './shared/sharedserviceequity.service';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { MatMenuModule} from '@angular/material/menu';
// import { MatToolbarModule} from '@angular/material/toolbar';
// import { MatIconModule} from '@angular/material/icon';      
 import { MatCardModule} from '@angular/material/card';      
 import { MatFormFieldModule} from '@angular/material/form-field';
// import { MatDatepickerModule} from '@angular/material/datepicker';
// import { MatRadioModule} from '@angular/material/radio';  
// import { MatSelectModule} from '@angular/material/select';

// import { MatSlideToggleModule} from '@angular/material/slide-toggle';     


@NgModule({
  
  declarations: [EquitytileComponent, EquityuploadComponent, EquityshowComponent, EquityformComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule, 
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,      
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule ,    
    // MatMenuModule,      
    // MatToolbarModule,      
    // MatIconModule,      
     MatCardModule  ,    
    // BrowserAnimationsModule,      
     MatFormFieldModule    
    // MatInputModule,      
    // MatDatepickerModule,      
      //MatSlideToggleModule
    // MatRadioModule,      
    // MatSelectModule      
      
    
    
  ],
  exports :[
    EquitytileComponent,
     EquityuploadComponent, 
     EquityshowComponent,
      EquityformComponent,
      MatButtonModule  , 
      MatTableModule, 
      // MatButtonModule,      
      // MatMenuModule,      
      // MatToolbarModule,      
      // MatIconModule,      
       MatCardModule ,    
      // BrowserAnimationsModule,      
      // MatFormFieldModule,      
       MatInputModule     
      // MatDatepickerModule,      
         
      // MatRadioModule,      
      // MatSelectModule,      
          
      // MatSlideToggleModule 
  ]
  
})
export class EquitiesModule { }
