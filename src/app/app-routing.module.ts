import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{BondtileComponent}from './bonds/bondtile/bondtile.component';
import{EquitytileComponent}from './equities/equitytile/equitytile.component';

const routes: Routes = [
  {path:'bond',component:BondtileComponent},
  {path:'equity',component:EquitytileComponent},
  {path:'',component:BondtileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
